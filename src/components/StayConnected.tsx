import { Instagram, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const instagramPosts = [
  "https://www.instagram.com/ym.piscataway.brothers/p/DXFh_QCEc0s/",
  "https://www.instagram.com/ym.newjersey.brothers/p/DW4FmIEjffs/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DWpOWTaEY6X/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DV9hxTzkfXT/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DVHdGFBEX3y/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DU1vunskZIO/",
];

const StayConnected = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Re-process embeds when component mounts
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  });

  return (
    <section id="connect" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Check out our latest events and highlights on Instagram
        </p>

        <div className="flex items-center justify-center gap-3 mt-8 mb-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Instagram className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">@ym.piscataway.brothers</h3>
            <p className="text-muted-foreground text-sm">Follow us on Instagram</p>
          </div>
        </div>

        {/* Instagram Embeds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((url) => (
            <div key={url} className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "hsl(0 0% 7%)",
                  border: "1px solid hsl(0 0% 18%)",
                  borderRadius: "8px",
                  maxWidth: "400px",
                  width: "100%",
                  minWidth: "280px",
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/ym.piscataway.brothers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            View Full Feed on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
