import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.95.0";

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

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase credentials are not configured");
    }

    const { email } = await req.json();
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Verify the email is actually subscribed before sending anything.
    // This prevents the function from being abused as an open email relay.
    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: subscriber, error: lookupError } = await admin
      .from("newsletter_subscribers")
      .select("id")
      .ilike("email", normalizedEmail)
      .maybeSingle();

    if (lookupError) {
      console.error("Subscriber lookup failed:", lookupError.message);
      return new Response(JSON.stringify({ error: "Lookup failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!subscriber) {
      return new Response(JSON.stringify({ error: "Not subscribed" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; background:#000; color:#fff; padding:32px; border-radius:12px; max-width:560px; margin:auto;">
        <h1 style="color:#D4A843; margin:0 0 16px;">Thanks for subscribing!</h1>
        <p style="color:#ddd; line-height:1.6; margin:0 0 16px;">
          You're now signed up for the <strong>YM Piscataway</strong> newsletter. Expect updates on our latest events, halaqas, retreats, and community service opportunities.
        </p>
        <p style="color:#aaa; line-height:1.6; margin:0 0 24px;">
          We're excited to have you with us. Stay tuned!
        </p>
        <hr style="border:none; border-top:1px solid #333; margin:24px 0;" />
        <p style="color:#888; font-size:12px; margin:0;">YM Piscataway — Brothers building community</p>
      </div>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "YM Piscataway <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for subscribing to the YM Piscataway newsletter",
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Resend error:", response.status, data);
      return new Response(JSON.stringify({ error: "Send failed" }), {
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
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
