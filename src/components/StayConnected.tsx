import { useState } from "react";
import { Instagram, Mail, Send, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const StayConnected = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: trimmed });
    setIsSubmitting(false);
    if (error) {
      if (error.code === "23505") {
        toast({ title: "You're already subscribed!", description: "Thanks for your enthusiasm." });
      } else {
        toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      }
      return;
    }
    toast({ title: "Subscribed!", description: "You'll hear from us soon." });
    setEmail("");
  };

  return (
    <section id="connect" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Follow us on Instagram and subscribe to our newsletter to stay up to date.
        </p>

        <div className="max-w-2xl mx-auto mt-12 space-y-8">
          {/* Instagram Section */}
          <div className="bg-card border border-border rounded-lg p-8 interactive-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">@ympiscataway</h3>
                <p className="text-muted-foreground text-xs">Follow us on Instagram</p>
              </div>
            </div>

            {/* Recent posts grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="https://instagram.com/ympiscataway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-md bg-muted/50 border border-border flex items-center justify-center hover:border-primary/40 transition-all hover:bg-muted/80 group"
                >
                  <div className="text-center">
                    <Instagram className="w-6 h-6 text-muted-foreground/40 mx-auto group-hover:text-primary/60 transition-colors" />
                    <p className="text-[10px] text-muted-foreground/40 mt-1 group-hover:text-primary/60 transition-colors">View post</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://instagram.com/ympiscataway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Feed
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="bg-card border border-border rounded-lg p-8 interactive-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Newsletter</h3>
                <p className="text-muted-foreground text-xs">Get updates on events & programs</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Subscribe to get updates on upcoming events, programs, and community news delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="flex-1"
              />
              <Button type="submit" disabled={isSubmitting} size="sm" className="bg-gold-gradient text-primary-foreground hover:opacity-90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
