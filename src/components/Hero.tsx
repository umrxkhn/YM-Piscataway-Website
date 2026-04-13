import heroCollage from "@/assets/hero-collage.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroCollage}
        alt="Young Muslims Piscataway community activities"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-gold-gradient leading-tight">
          YOUNG MUSLIMS
        </h1>
        <p className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-gold-gradient mt-2 tracking-wide">
          PISCATAWAY
        </p>
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-foreground/80 mt-6">
          For the youth – By the youth
        </p>
        <p className="font-heading text-primary text-base sm:text-lg md:text-xl font-normal tracking-[0.3em] mt-4">
          EST. 2001
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary/10 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
