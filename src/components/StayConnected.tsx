import { Instagram, ExternalLink } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import { useEffect } from "react";

const instagramPosts = [
  "https://www.instagram.com/ym.piscataway.brothers/p/DXZsMeSET6s/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DWzioENEXh8/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DWpOWTaEY6X/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DUj_05ijYwo/",
];

const StayConnected = () => {
  useEffect(() => {
    const processEmbeds = () => {
      if ((window as any).instgrm?.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if ((window as any).instgrm?.Embeds) {
      processEmbeds();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"], script[src="//www.instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", processEmbeds);
      setTimeout(processEmbeds, 500);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="connect" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Check out our latest events and highlights on Instagram
        </p>

        <div className="flex flex-col items-center mt-8 mb-10 gap-2">
          <a href="https://www.instagram.com/ym.piscataway.brothers/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-primary/50 rounded-xl px-5 py-3 bg-transparent interactive-card">
            <img src={instagramLogo} alt="Instagram" className="w-10 h-10 object-contain" loading="lazy" width={512} height={512} />
            <h3 className="font-heading text-lg font-bold text-foreground">@ym.piscataway.brothers</h3>
          </a>
          <a href="https://www.instagram.com/ym.piscataway.brothers/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">Click to view full feed</a>
        </div>

        {/* Instagram Embeds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instagramPosts.map((url) => (
            <div key={url} className="flex justify-center min-h-[360px]">
              <blockquote
                className="instagram-media w-full min-w-[280px] max-w-[400px] rounded-lg border border-border bg-card p-6 text-center text-foreground"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-lg border border-primary/35 bg-background/60 p-6 transition-colors hover:border-primary"
                >
                  <Instagram className="h-10 w-10 text-primary" aria-hidden="true" />
                  <span className="font-heading text-lg font-bold text-foreground">View this post on Instagram</span>
                  <span className="text-sm text-muted-foreground">A post shared by YM Piscataway</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open post <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
