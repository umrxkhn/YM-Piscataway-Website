import { ExternalLink } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import instagramPost1 from "@/assets/instagram-post-1.jpg";
import instagramPost2 from "@/assets/instagram-post-2.jpg";
import instagramPost3 from "@/assets/instagram-post-3.jpg";
import instagramPost4 from "@/assets/instagram-post-4.jpg";

const instagramPosts = [
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DXZsMeSET6s/", image: instagramPost1 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DWzioENEXh8/", image: instagramPost2 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DWpOWTaEY6X/", image: instagramPost3 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DUj_05ijYwo/", image: instagramPost4 },
];

const StayConnected = () => {
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

        {/* Instagram Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instagramPosts.map((post, index) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-border bg-card transition-transform hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={`YM Piscataway Instagram post ${index + 1}`}
                className="aspect-square w-full object-cover"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="flex items-center justify-between gap-3 p-4 text-sm font-semibold text-primary">
                <span>View post</span>
                <ExternalLink
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
