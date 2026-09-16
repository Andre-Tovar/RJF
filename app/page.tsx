import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Compass, HandHeart, Users } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const pillars = [
  { number: "01", icon: Users, title: "Peer mentorship", body: "Practical, student-to-student guidance for first-year engineers—from registration to finding the right major." },
  { number: "02", icon: Compass, title: "Ambassadorship", body: "A candid view of life at Rossin for prospective students, families, and visitors to the college." },
  { number: "03", icon: HandHeart, title: "STEM outreach", body: "Hands-on engineering experiences that connect Lehigh students with schools and neighbors across Bethlehem." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Lehigh University · Rossin College</p>
          <h1 id="hero-title">Engineering is better when no one navigates it alone.</h1>
          <p className="hero-intro">
            We are student mentors, college ambassadors, and community builders helping the next generation of Lehigh engineers find their way forward.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/join">How to join <ArrowUpRight size={17} /></Link>
            <a className="text-link" href="#mission">Discover our mission <ArrowDown size={16} /></a>
          </div>
        </div>
        <figure className="hero-media">
          <Image src="/rjf-canstruction.jpg" alt="Rossin Junior Fellows collaborating on a Canstruction outreach project" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <figcaption>RJF outreach · Packard Lab · Photo: Douglas Benedict</figcaption>
        </figure>
        <div className="hero-index" aria-hidden="true">01</div>
      </section>

      <section className="mission-intro" id="mission">
        <p>OUR PURPOSE</p>
        <h2>We make engineering feel more human.</h2>
        <p className="mission-summary">
          Rossin Junior Fellows connect first-year and prospective students with honest guidance, useful resources, and a welcoming community.
        </p>
      </section>

      <section className="pillars-section" aria-labelledby="what-we-do">
        <div className="section-heading">
          <p className="eyebrow">How we show up</p>
          <h2 id="what-we-do">Three ways we serve.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map(({ number, icon: Icon, title, body }) => (
            <article className="pillar-card" key={title}>
              <div className="pillar-top"><span>{number}</span><Icon size={25} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="action-story">
        <figure className="story-image">
          <Image src="/rjf-broughal.jpg" alt="Rossin Junior Fellows guiding Broughal Middle School students through engineering experiments" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </figure>
        <div className="story-copy">
          <p className="eyebrow">RJF in action</p>
          <blockquote>“We’ve been through it all—so who better to help?”</blockquote>
          <p>
            Fellows turn experience into support: helping new students plan courses, welcoming future engineers, and making STEM tangible for younger learners.
          </p>
          <a className="text-link" href="https://news.lehigh.edu/prepared-to-hit-the-ground-running" target="_blank" rel="noreferrer">
            Read the Lehigh story <ArrowUpRight size={16} />
          </a>
          <p className="photo-credit">Photo: Douglas Benedict · Lehigh University</p>
        </div>
      </section>

      <section className="upcoming-section">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">On the horizon</p>
            <h2>Stay in the loop.</h2>
          </div>
          <Link className="text-link" href="/calendar">Full calendar <ArrowRight size={16} /></Link>
        </div>
        <div className="event-preview-grid">
          <article className="event-preview featured-event">
            <span className="event-status">Fall 2026</span>
            <CalendarDays size={30} />
            <h3>First-year academic planning</h3>
            <p>Course planning and honest answers from students who remember being in your shoes.</p>
            <span>Date and location to be announced</span>
          </article>
          <article className="event-preview">
            <span className="event-status">Coming up</span>
            <h3>Engineering open house</h3>
            <p>Meet Fellows from across Rossin departments and ask us anything about student life.</p>
            <span>Details coming soon</span>
          </article>
          <article className="event-preview">
            <span className="event-status">Community</span>
            <h3>STEM outreach day</h3>
            <p>A hands-on day of experiments, building, and problem solving with local students.</p>
            <span>Details coming soon</span>
          </article>
        </div>
      </section>

      <section className="fellows-preview-section">
        <div className="fellows-preview-copy">
          <p className="eyebrow">The people behind RJF</p>
          <h2>Different disciplines. One generous community.</h2>
          <p>Our Fellows represent departments across the Rossin College and bring their own paths, questions, and perspectives to every conversation.</p>
          <Link className="button button-light" href="/fellows">Meet the Fellows <ArrowRight size={17} /></Link>
        </div>
        <div className="monogram-stack" aria-label="Fellow profile preview">
          <div className="monogram-card mono-one"><span>CS</span><small>Computer Science</small></div>
          <div className="monogram-card mono-two"><span>BE</span><small>Bioengineering</small></div>
          <div className="monogram-card mono-three"><span>ME</span><small>Mechanical Engineering</small></div>
        </div>
      </section>

      <section className="join-banner">
        <p className="eyebrow">Ready to give back?</p>
        <h2>Your experience could be someone else’s starting point.</h2>
        <Link className="circle-link" href="/join" aria-label="Learn how to join RJF"><ArrowUpRight size={34} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}

