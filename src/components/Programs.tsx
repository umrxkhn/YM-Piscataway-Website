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
    time: "5:30 PM",
    location: "TBD",
    day: "18",
    month: "Apr",
    weekday: "Friday",
  },
  {
    title: "Basketball Night",
    date: "Apr 20, 2026",
    time: "1:30 PM",
    location: "Middlebush Park",
    locationUrl: "https://www.google.com/maps/search/Middlebush+Park+NJ",
    day: "20",
    month: "Apr",
    weekday: "Sunday",
  },
  {
    title: "Friday Halaqa",
    date: "Apr 25, 2026",
    time: "5:30 PM",
    location: "TBD",
    day: "25",
    month: "Apr",
    weekday: "Friday",
  },
  {
    title: "Community Food Drive",
    date: "Apr 27, 2026",
    time: "10:00 AM",
    location: "TBD",
    day: "27",
    month: "Apr",
    weekday: "Sunday",
  },
  {
    title: "ICNA YMC Convention",
    date: "May 23, 2026",
    time: "All Day",
    location: "Baltimore, MD",
    day: "23",
    month: "May",
    weekday: "Saturday",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.slice(0, 4).map((event, i) => (
              <div
                key={i}
                className="flex flex-col bg-card border border-border rounded-lg overflow-hidden interactive-card text-center"
              >
                {/* Date badge */}
                <div className="flex flex-col items-center justify-center bg-primary/10 px-5 py-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {event.weekday}
                  </span>
                  <span className="text-3xl font-bold text-foreground leading-tight">
                    {event.month} {event.day}
                  </span>
                </div>

                {/* Event details */}
                <div className="flex flex-col items-center px-4 py-4 flex-1">
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-1.5 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 justify-center">
                      <Clock className="h-3.5 w-3.5" />
                      {event.time}
                    </span>
                    {event.locationUrl ? (
                      <a
                        href={event.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 justify-center hover:text-primary transition-colors"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 justify-center">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    )}
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
