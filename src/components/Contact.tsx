import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold-gradient">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">
          Want to join or learn more? Reach out to our coordinator.
        </p>
        <div className="inline-flex flex-col items-center mt-6 px-8 py-5 rounded-lg border border-primary/30 bg-primary/5 gap-3">
          <div>
            <p className="text-foreground font-bold text-xl">Maaz Motiwala</p>
            <p className="text-muted-foreground text-sm">YM Piscataway Coordinator</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:maaz.motiwala@youngmuslims.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-bold">maaz.motiwala@youngmuslims.com</span>
            </a>
            <a href="tel:+19083402190" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>(908) 340-2190</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
