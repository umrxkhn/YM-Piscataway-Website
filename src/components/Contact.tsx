import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold-gradient">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Want to join or learn more? Reach out to our coordinator.
          </p>
          <div className="inline-block mt-4 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5">
            <p className="text-foreground font-bold text-xl">Maaz Motiwala</p>
            <p className="text-muted-foreground text-sm">YM Piscataway Coordinator</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-4">
            <a href="mailto:ympiscataway@gmail.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <span>ympiscataway@gmail.com</span>
            </a>
            <a href="tel:+11234567890" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12 space-y-4">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={5}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
