import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import ymLogo from "@/assets/ym-logo.png";
import instagramPost1 from "@/assets/instagram-post-1.jpg";
import instagramPost2 from "@/assets/instagram-post-2.jpg";
import instagramPost3 from "@/assets/instagram-post-3.jpg";
import instagramPost4 from "@/assets/instagram-post-4.jpg";
import instagramPost5 from "@/assets/instagram-post-5.jpg";
import instagramPost6 from "@/assets/instagram-post-6.jpg";

const instagramPosts = [
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DXpuC8bkQa1/", image: instagramPost2 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DXZsMeSET6s/", image: instagramPost1 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DWpOWTaEY6X/", image: instagramPost3 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/p/DUj_05ijYwo/", image: instagramPost4 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/", image: instagramPost5 },
  { url: "https://www.instagram.com/ym.piscataway.brothers/", image: instagramPost6 },
];

const StayConnected = () => {
  return (
    <section id="connect" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          Check out our latest posts, events, and highlights on Instagram to keep up on our any of our upcoming events
        </p>

        <div className="flex flex-col items-center mt-8 mb-10 gap-2">
          <a href="https://www.instagram.com/ym.piscataway.brothers/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-primary/50 rounded-xl px-5 py-3 bg-transparent interactive-card">
            <img src={instagramLogo} alt="Instagram" className="w-10 h-10 object-contain" loading="lazy" width={512} height={512} />
            <h3 className="font-heading text-lg font-bold text-foreground">@ym.piscataway.brothers</h3>
          </a>
        </div>

        {/* Instagram-style post cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {instagramPosts.map((post, index) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-primary/50 bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="inline-block rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
                    <span className="block rounded-full bg-card p-[2px]">
                      <img
                        src={ymLogo}
                        alt="YM Piscataway"
                        className="h-7 w-7 rounded-full object-cover"
                        loading="lazy"
                      />
                    </span>
                  </span>
                  <span className="truncate text-sm font-semibold text-foreground">
                    ym.piscataway.brothers
                  </span>
                </div>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </div>

              {/* Image */}
              <img
                src={post.image}
                alt={`YM Piscataway Instagram post ${index + 1}`}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={640}
                height={640}
              />

              {/* Action row */}
              <div className="flex items-center justify-between px-3 pt-3 pb-2">
                <div className="flex items-center gap-3 text-foreground">
                  <Heart className="h-5 w-5" aria-hidden="true" />
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <Send className="h-5 w-5" aria-hidden="true" />
                </div>
                <Bookmark className="h-5 w-5 text-foreground" aria-hidden="true" />
              </div>
              <div className="px-3 pb-3 text-xs font-semibold text-foreground">
                View on Instagram
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
