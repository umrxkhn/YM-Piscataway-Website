import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
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
    <section id="newsletter" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold-gradient">
          Newsletter
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">
          Subscribe to get updates on upcoming events, programs, and community news delivered to your inbox
        </p>
        <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto mt-8">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting} className="bg-gold-gradient text-primary-foreground hover:opacity-90">
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
