import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
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
          <a href="mailto:maaz.motiwala@youngmuslims.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <span>maaz.motiwala@youngmuslims.com</span>
          </a>
          <a href="tel:+19083402190" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span>(908) 340-2190</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
