import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const board = [
  { initials: "P", role: "President", accent: "gold" },
  { initials: "VP", role: "Vice President", accent: "blue" },
  { initials: "O", role: "Outreach Chair", accent: "green" },
  { initials: "C", role: "Communications Chair", accent: "red" },
];

const departments = [
  "Bioengineering",
  "Chemical & Biomolecular Engineering",
  "Civil & Environmental Engineering",
  "Computer Science & Engineering",
  "Electrical & Computer Engineering",
  "Industrial & Systems Engineering",
  "Materials Science & Engineering",
  "Mechanical Engineering & Mechanics",
  "IDEAS & Interdisciplinary Programs",
];

export default function FellowsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero fellows-hero">
        <div>
          <p className="eyebrow">Meet the Fellows</p>
          <h1>Students who remember what the first step felt like.</h1>
        </div>
        <div className="page-hero-aside">
          <p>RJF brings together engineering students from across Rossin—each ready to listen, share what they know, and help someone else move forward.</p>
        </div>
      </section>

      <section className="board-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">2026–27 leadership</p>
          <h2>Executive board.</h2>
          <p className="section-note">Profile names and portraits will be added after the incoming board confirms publication consent.</p>
        </div>
        <div className="board-grid">
          {board.map((member) => (
            <article className="board-card" key={member.role}>
              <div className={`board-portrait accent-${member.accent}`} aria-hidden="true">{member.initials}</div>
              <p>{member.role}</p>
              <h3>Name coming soon</h3>
              <span>Profile in preparation</span>
            </article>
          ))}
        </div>
      </section>

      <section className="department-section">
        <div className="department-intro">
          <p className="eyebrow">Across Rossin</p>
          <h2>Find a Fellow in your field.</h2>
          <p>Department representatives can answer discipline-specific questions and connect you with the right people and resources.</p>
        </div>
        <ol className="department-list">
          {departments.map((department, index) => (
            <li key={department}><span>{String(index + 1).padStart(2, "0")}</span><strong>{department}</strong><small>Representatives coming soon</small></li>
          ))}
        </ol>
      </section>

      <section className="join-strip">
        <div><p className="eyebrow">See yourself here?</p><h2>Bring your perspective to RJF.</h2></div>
        <Link className="button button-primary" href="/join">Explore the process <ArrowRight size={17} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}

