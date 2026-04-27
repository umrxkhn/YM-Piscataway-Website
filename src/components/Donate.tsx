import { Heart, ExternalLink } from "lucide-react";

const paymentMethods = [
  {
    name: "Zelle",
    details: "Qasim Bishirat — 917-676-7696",
  },
  {
    name: "Apple Pay",
    details: "Qasim Bishirat — 917-676-7696",
  },
  {
    name: "Venmo",
    details: "@YM_Piscataway",
  },
];

const Donate = () => {
  return (
    <section id="donate" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          Donate
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Your generous contributions help us continue serving the community
        </p>

        <a
          href="https://giving.ymsite.com/page/YM2026?fundraiser=NLQCEJCV&member=SNKQPTXV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)] mb-14"
        >
          Donate Online <ExternalLink className="w-5 h-5" />
        </a>

        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
            Other Ways To Give Back 
          </h3>
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="bg-card border border-primary/50 rounded-xl p-6 flex flex-col items-center text-center gap-2 transition-transform duration-200 hover:border-primary hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="font-heading text-xl font-bold text-primary">
                {method.name}
              </h3>
              <p className="text-muted-foreground transition-colors hover:text-foreground">{method.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;
