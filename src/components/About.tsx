import { Users, Heart, BookOpen, HandHelping } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Companionship",
    desc: "Halaqas, sports, retreats & conferences that build lasting brotherhood",
  },
  {
    icon: Heart,
    title: "Mentorship",
    desc: "Leadership workshops, career guidance, and one-on-one mentoring",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Islamic studies, professional development, and community learning circles",
  },
  {
    icon: HandHelping,
    title: "Service",
    desc: "Feeding the hungry, relief work, and local volunteering efforts",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gold-gradient">
          What We Do
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 text-lg">
          We strive to empower Muslim youth to become the leaders of tomorrow through
          companionship, mentorship, education, and service
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-lg p-8 text-center border border-primary/50 interactive-card group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
