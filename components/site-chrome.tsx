import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Rossin Junior Fellows home">
        <span className="brand-mark">RJF</span>
        <span className="brand-name">Rossin Junior Fellows</span>
      </Link>
      <nav aria-label="Primary navigation" className="desktop-nav">
        <Link href="/#mission">Mission</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/fellows">Fellows</Link>
        <Link href="/join">Join RJF</Link>
        <a href="https://engineering.lehigh.edu/" target="_blank" rel="noreferrer">
          Lehigh Engineering <ArrowUpRight size={14} />
        </a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><Menu size={22} /></summary>
        <nav aria-label="Mobile navigation">
          <Link href="/#mission">Mission</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/fellows">Fellows</Link>
          <Link href="/join">Join RJF</Link>
          <a href="https://engineering.lehigh.edu/" target="_blank" rel="noreferrer">
            Lehigh Engineering <ArrowUpRight size={14} />
          </a>
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">RJF</span>
          <span className="brand-name">Rossin Junior Fellows</span>
        </Link>
        <p>Mentorship, service, and a more connected engineering community.</p>
      </div>
      <div className="footer-links">
        <p className="footer-label">Explore</p>
        <Link href="/calendar">Calendar</Link>
        <Link href="/fellows">Meet the Fellows</Link>
        <Link href="/join">Join RJF</Link>
      </div>
      <div className="footer-links">
        <p className="footer-label">Lehigh</p>
        <a href="https://engineering.lehigh.edu/" target="_blank" rel="noreferrer">Rossin College ↗</a>
        <a href="https://www2.lehigh.edu/" target="_blank" rel="noreferrer">Lehigh University ↗</a>
        <a href="mailto:rma2@lehigh.edu">Contact RJF</a>
      </div>
      <div className="footer-base">
        <span>© 2026 Rossin Junior Fellows</span>
        <span>Student organization site · Bethlehem, PA</span>
      </div>
    </footer>
  );
}

