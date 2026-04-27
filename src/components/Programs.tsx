const programs = [
  {
    title: "Weekly Halaqas",
    desc: "Gather every Friday for inclusive sports, prayer, engaging Islamic discussions, and great food in a welcoming environment",
  },
  {
    title: "Sports",
    desc: "Basketball, soccer, spikeball, and more — stay active while building brotherhood, teamwork, and lifelong friendships every week",
  },
  {
    title: "Retreats & Trips",
    desc: "Our annual ICNA YMC Conference and Weekend Camp Retreat strengthen bonds and create unforgettable memories together",
  },
  {
    title: "Community Service",
    desc: "Give back through weekly food drives, mosque volunteering, and local outreach that make a real difference in our community",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          Our Programs
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          From weekly gatherings to annual retreats, there's always something happening at YM Piscataway
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-primary/50 rounded-lg p-6 interactive-card text-center"
            >
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
