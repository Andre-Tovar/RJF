import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  { month: "SEP", date: "TBA", category: "Mentoring", title: "First-year welcome & peer meet-up", detail: "Meet current Fellows, find a familiar face, and start the semester with a stronger support network.", place: "Rossin College · Location TBA" },
  { month: "OCT", date: "TBA", category: "Admissions", title: "Engineering open house", detail: "A student-led look at academics, community, and the everyday experience of learning engineering at Lehigh.", place: "Lehigh University · Location TBA" },
  { month: "NOV", date: "TBA", category: "Mentoring", title: "First-year academic planning", detail: "Bring your questions and draft schedule. Fellows help first-year engineers prepare for registration.", place: "Packard Lab · Room TBA" },
  { month: "FALL", date: "TBA", category: "Outreach", title: "Community STEM day", detail: "Hands-on challenges designed to make engineering welcoming, collaborative, and fun for local students.", place: "Bethlehem · Location TBA" },
];

function EventList({ category }: { category?: string }) {
  const visible = category ? events.filter((event) => event.category === category) : events;
  return (
    <div className="event-list">
      {visible.map((event) => (
        <article className="event-row" key={event.title}>
          <div className="event-date"><span>{event.month}</span><strong>{event.date}</strong></div>
          <div className="event-content">
            <span className="event-tag">{event.category}</span>
            <h3>{event.title}</h3>
            <p>{event.detail}</p>
            <span className="event-place"><MapPin size={15} /> {event.place}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CalendarPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero calendar-hero">
        <div>
          <p className="eyebrow">RJF calendar</p>
          <h1>Show up.<br />Pitch in.<br />Meet someone new.</h1>
        </div>
        <div className="page-hero-aside">
          <CalendarDays size={35} strokeWidth={1.5} />
          <p>Fall 2026 dates are being finalized. Event details will appear here as soon as they are confirmed.</p>
          <a className="text-link" href="https://eventscalendar.lehigh.edu/department/pc_rossin_college_of_engineering_and_applied_science/calendar" target="_blank" rel="noreferrer">
            Rossin College calendar <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="calendar-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Upcoming programming</p>
          <h2>Fall at a glance.</h2>
        </div>
        <Tabs defaultValue="all" className="event-tabs">
          <TabsList variant="line" aria-label="Filter events by category" className="event-tab-list">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="mentoring">Mentoring</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
          </TabsList>
          <TabsContent value="all"><EventList /></TabsContent>
          <TabsContent value="mentoring"><EventList category="Mentoring" /></TabsContent>
          <TabsContent value="admissions"><EventList category="Admissions" /></TabsContent>
          <TabsContent value="outreach"><EventList category="Outreach" /></TabsContent>
        </Tabs>
        <aside className="calendar-note">
          <strong>Planning an RJF event?</strong>
          <p>Send confirmed dates, locations, and registration links to the communications chair for publication.</p>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}

