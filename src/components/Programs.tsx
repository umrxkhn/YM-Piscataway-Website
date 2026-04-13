const programs = [
  {
    title: "Weekly Halaqas",
    desc: "Gather every week for engaging Islamic discussions, Quran study, and spiritual growth in a welcoming environment.",
  },
  {
    title: "Sports",
    desc: "Basketball, soccer, and more — staying active while building brotherhood and having fun together.",
  },
  {
    title: "Retreats & Trips",
    desc: "Outdoor adventures and overnight retreats that strengthen bonds and create unforgettable memories.",
  },
  {
    title: "Community Service",
    desc: "Give back through food drives, volunteering, and local outreach that makes a real difference.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Our Programs
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          From weekly gatherings to annual retreats, there's always something happening at YM Piscataway.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <span className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
