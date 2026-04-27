import { Instagram, ExternalLink } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import { useEffect, useRef, useState } from "react";

const instagramPosts = [
  "https://www.instagram.com/ym.piscataway.brothers/p/DXFh_QCEc0s/",
  "https://www.instagram.com/ym.newjersey.brothers/p/DW4FmIEjffs/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DWpOWTaEY6X/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DV9hxTzkfXT/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DVHdGFBEX3y/",
  "https://www.instagram.com/ym.piscataway.brothers/p/DU1vunskZIO/",
];

const StayConnected = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const processEmbeds = () => {
      if ((window as any).instgrm?.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if ((window as any).instgrm?.Embeds) {
      processEmbeds();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", processEmbeds);
      // In case it already loaded
      setTimeout(processEmbeds, 500);
      return;
    }

    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, [isVisible]);

  return (
    <section id="connect" className="py-24 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Check out our latest events and highlights on Instagram
        </p>

        <div className="flex flex-col items-center mt-8 mb-10 gap-2">
          <a href="https://www.instagram.com/ym.piscataway.brothers/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-border rounded-xl px-5 py-3 bg-transparent interactive-card">
            <img src={instagramLogo} alt="Instagram" className="w-10 h-10 object-contain" loading="lazy" width={512} height={512} />
            <h3 className="font-heading text-lg font-bold text-foreground">@ym.piscataway.brothers</h3>
          </a>
          <a href="https://www.instagram.com/ym.piscataway.brothers/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">Click to view full feed</a>
        </div>

        {/* Instagram Embeds Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {isVisible &&
            instagramPosts.map((url) => (
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
      </div>
    </section>
  );
};

export default StayConnected;
