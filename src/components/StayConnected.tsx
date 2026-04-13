import { Instagram, ExternalLink } from "lucide-react";

const StayConnected = () => {
  return (
    <section id="connect" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Check out our latest events and highlights on Instagram.
        </p>

        <div className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">@ympiscataway</h3>
              <p className="text-muted-foreground text-sm">Follow us on Instagram</p>
            </div>
          </div>

          {/* Large Instagram grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a
                key={i}
                href="https://instagram.com/ympiscataway"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-lg bg-card border border-border flex items-center justify-center interactive-card group"
              >
                <div className="text-center">
                  <Instagram className="w-8 h-8 text-muted-foreground/30 mx-auto group-hover:text-primary/60 transition-colors" />
                  <p className="text-xs text-muted-foreground/30 mt-2 group-hover:text-primary/60 transition-colors">View post</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/ympiscataway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Feed on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
