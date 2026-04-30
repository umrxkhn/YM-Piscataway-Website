import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const RESEND_AUDIENCE_ID = Deno.env.get("RESEND_AUDIENCE_ID");

    const { email } = await req.json();
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const gatewayHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    };

    // Add contact to Resend audience (non-blocking for the welcome email)
    if (RESEND_AUDIENCE_ID) {
      try {
        const contactRes = await fetch(`${GATEWAY_URL}/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
          method: "POST",
          headers: gatewayHeaders,
          body: JSON.stringify({ email, unsubscribed: false }),
        });
        if (!contactRes.ok) {
          const errBody = await contactRes.text();
          console.error("Resend audience add failed:", contactRes.status, errBody);
        }
      } catch (e) {
        console.error("Resend audience add threw:", e instanceof Error ? e.message : e);
      }
    } else {
      console.warn("RESEND_AUDIENCE_ID not configured; skipping audience sync");
    }

    const html = `
      <div style="font-family: Arial, sans-serif; background:#000; color:#fff; padding:32px; border-radius:12px; max-width:560px; margin:auto;">
        <h1 style="color:#D4A843; margin:0 0 16px;">Thank you for subscribing!</h1>
        <p style="color:#ddd; line-height:1.6; margin:0 0 16px;">
          Thank you for subscribing to <strong>Young Muslims Piscataway's</strong> newsletter. You'll receive updates on our latest events, halaqas, retreats, and community service opportunities.
        </p>
        <p style="color:#aaa; line-height:1.6; margin:0 0 24px;">
          We're excited to have you with us
        </p>
        <hr style="border:none; border-top:1px solid #333; margin:24px 0;" />
        <p style="color:#888; font-size:12px; margin:0;">YM Piscataway — Brothers building community</p>
      </div>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: gatewayHeaders,
      body: JSON.stringify({
        from: "Young Muslims Piscataway <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for subscribing to Young Muslims Piscataway's newsletter",
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Resend error:", response.status, data);
      return new Response(JSON.stringify({ error: "Email delivery failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-newsletter-welcome failed:", message);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
