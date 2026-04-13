import { Calendar, MapPin, Clock } from "lucide-react";

const programs = [
  {
    title: "Weekly Halaqas",
    desc: "Gather weekly on Fridays for inclusive sports, engaging prayer, interactive islamic discussions, and amazing food while increasing our spiritual growth in a welcoming environment",
  },
  {
    title: "Sports",
    desc: "Basketball, soccer, spikeball, and more whilst staying active while building brotherhood, strengthening teamwork, and having fun with others together every week",
  },
  {
    title: "Retreats & Trips",
    desc: "Our annual ICNA YMC Convention & Weekend Camp Retreat featuring additional activities that strengthen bonds, build lasting friendships, and create unforgettable memories together",
  },
  {
    title: "Community Service",
    desc: "Give back through our weekly food drives, volunteering in various mosques, and local outreach that makes a real difference in our community and beyond, inspiring others to serve",
  },
];

const upcomingEvents = [
  {
    title: "Friday Halaqa",
    date: "Apr 18, 2026",
    time: "7:00 PM",
    location: "Masjid Al-Huda",
    day: "18",
    month: "Apr",
  },
  {
    title: "Basketball Night",
    date: "Apr 20, 2026",
    time: "6:00 PM",
    location: "Piscataway Community Center",
    day: "20",
    month: "Apr",
  },
  {
    title: "Friday Halaqa",
    date: "Apr 25, 2026",
    time: "7:00 PM",
    location: "Masjid Al-Huda",
    day: "25",
    month: "Apr",
  },
  {
    title: "Community Food Drive",
    date: "Apr 27, 2026",
    time: "10:00 AM",
    location: "Downtown Piscataway",
    day: "27",
    month: "Apr",
  },
  {
    title: "ICNA YMC Convention",
    date: "May 23, 2026",
    time: "All Day",
    location: "Baltimore, MD",
    day: "23",
    month: "May",
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
          From weekly gatherings to annual retreats, there's always something happening at YM Piscataway
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-lg p-6 interactive-card text-center"
            >
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mt-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gold-gradient">
              Upcoming Events
            </h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            Mark your calendars and join us at our next events
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="flex items-stretch bg-card border border-border rounded-lg overflow-hidden interactive-card"
              >
                {/* Date badge */}
                <div className="flex flex-col items-center justify-center bg-primary/10 px-5 py-4 min-w-[80px]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {event.month}
                  </span>
                  <span className="text-2xl font-bold text-foreground leading-tight">
                    {event.day}
                  </span>
                </div>

                {/* Event details */}
                <div className="flex flex-col justify-center px-5 py-4 flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
