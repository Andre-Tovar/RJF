import { ArrowUpRight, Check, Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const steps = [
  { number: "01", title: "Get to know the role", body: "Talk with a current Fellow or your department about the mentorship, admissions, and outreach work RJFs support." },
  { number: "02", title: "Connect with your department", body: "Selection is coordinated through individual Rossin departments, typically during the spring semester." },
  { number: "03", title: "Receive a nomination", body: "Departments nominate students who bring strong academics, leadership, warmth, and a genuine desire to serve." },
  { number: "04", title: "Join the cohort", body: "New Fellows begin contributing as ambassadors and peer mentors across the college community." },
];

export default function JoinPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero join-hero">
        <div>
          <p className="eyebrow">Join RJF</p>
          <h1>Turn what you’ve learned into a hand up.</h1>
        </div>
        <div className="page-hero-aside">
          <p>RJF is for Rossin students who want to make engineering more welcoming—for first-year students, future students, and the broader community.</p>
          <a className="button button-gold" href="mailto:rma2@lehigh.edu?subject=Rossin%20Junior%20Fellows%20interest">Ask about RJF <Mail size={17} /></a>
        </div>
      </section>

      <section className="fit-section">
        <div>
          <p className="eyebrow">Is RJF for you?</p>
          <h2>We’re looking for generous leaders.</h2>
        </div>
        <div className="fit-list">
          {["You enjoy helping other students find their footing.", "You can represent your department with honesty and enthusiasm.", "You want to contribute to admissions, mentoring, or STEM outreach.", "You are ready to make time for service alongside your coursework."].map((item) => (
            <p key={item}><Check size={20} /> {item}</p>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow">How it works</p>
          <h2>The path to becoming a Fellow.</h2>
        </div>
        <ol className="process-list">
          {steps.map((step) => (
            <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="facts-section">
        <article><span>ELIGIBILITY</span><strong>Sophomore, junior, or senior</strong></article>
        <article><span>TIMELINE</span><strong>Department nominations in spring</strong></article>
        <article><span>COMMITMENT</span><strong>Volunteer leadership and service</strong></article>
      </section>

      <section className="contact-panel">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Questions are welcome.</h2>
          <p>Your department is the best first stop. You can also contact the program directly to learn about the current nomination timeline.</p>
        </div>
        <a className="circle-link circle-link-light" href="mailto:rma2@lehigh.edu?subject=Rossin%20Junior%20Fellows%20interest" aria-label="Email about joining RJF"><ArrowUpRight size={34} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}

