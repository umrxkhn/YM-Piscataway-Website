import heroCollage from "@/assets/hero-collage.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col sm:block sm:items-center sm:justify-center overflow-hidden bg-background"
    >
      {/* Mobile: full collage shown at top, text below */}
      <img
        src={heroCollage}
        alt="Young Muslims Piscataway community activities"
        className="block sm:hidden w-full h-auto"
        width={1920}
        height={1080}
      />
      {/* Desktop: collage as full background */}
      <img
        src={heroCollage}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div className="hidden sm:block absolute inset-0 bg-background/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex-1 flex flex-col justify-center py-8 sm:py-0 sm:absolute sm:inset-0 sm:items-center sm:justify-center">
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-gold-gradient leading-tight">
          YOUNG MUSLIMS
        </h1>
        <p className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-gold-gradient mt-1 tracking-wide">
          PISCATAWAY
        </p>
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-foreground/80 mt-4 font-light">
          For the youth – By the youth
        </p>
        <p className="font-heading text-primary text-base sm:text-lg md:text-xl font-normal tracking-[0.3em] mt-4">
          EST. 2001
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-semibold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)]"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-3 rounded-md font-semibold transition-all duration-200 hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_20px_2px_hsl(43_80%_50%/0.4)]"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
