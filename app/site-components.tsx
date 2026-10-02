import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { SiteHeader } from "./site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <>
    <a className="skip-link" href="#main">Siirry sisältöön</a>
    <SiteHeader />
    <main id="main" tabIndex={-1}>{children}</main>
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Saneeraus Gurut, etusivu">SG<span>.</span></Link>
          <p>Saneeraus Gurut Oy<br />Remontit Keski-Uudellamaalla.</p>
        </div>
        <div><h2>Palvelut</h2><Link href="/kylpyhuoneremontti">Kylpyhuoneremontit</Link><Link href="/huoneistoremontti">Huoneistoremontit</Link><Link href="/keittioremontti">Keittiöremontit</Link></div>
        <div><h2>Tutustu</h2><Link href="/referenssit">Referenssit</Link><Link href="/nain-toimimme">Näin toimimme</Link><Link href="/yritys">Yritys</Link><Link href="/tarjouspyynto">Tarjouspyyntö</Link></div>
        <div><h2>Ota yhteyttä</h2><a href="tel:+358503476660">050 347 6660</a><a href="mailto:kari@saneerausgurut.fi">kari@saneerausgurut.fi</a><span>Forssankatu 4, 04430 Järvenpää</span></div>
      </div>
      <div className="wrap footer-bottom"><span>© 2026 Saneeraus Gurut Oy</span><Link href="/tietosuoja">Tietosuoja</Link></div>
    </footer>
    <nav className="mobile-sticky" aria-label="Nopea yhteydenotto">
      <a href="tel:+358503476660"><Phone size={18} aria-hidden="true" /> Soita</a>
      <Link href="/tarjouspyynto">Pyydä kartoitus <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </nav>
  </>;
}

export function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="button-primary" href={href}>{children}<ArrowUpRight size={19} aria-hidden="true" /></Link>;
}

export function SectionIntro({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return <div className="section-intro"><span className="kicker">{kicker}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}

export function ServiceCard({ number, title, description, href }: { number: string; title: string; description: string; href: string }) {
  return <Link className="service-card" href={href}>
    <span className="service-number">{number} / PALVELU</span>
    <div className="service-icon" aria-hidden="true"><span className="mini-grid"><i /><i /><i /><i /></span></div>
    <h3>{title}</h3><p>{description}</p>
    <span className="service-bottom">Tutustu palveluun <ArrowUpRight size={20} aria-hidden="true" /></span>
  </Link>;
}

export function PhotoPanel({ className = "", label }: { className?: string; label: string }) {
  return <div className={`photo-panel ${className}`}>
    <Image fill priority sizes="(max-width: 800px) 100vw, 46vw" src="https://le-de.cdn-website.com/448e4c656a21430e8cc5daa0898b5b95/dms3rep/multi/opt/WhatsApp%2BImage%2B2026-09-17%2Bat%2B09.42.40-1095w.jpeg" alt="Keittiö, jossa on vaaleat kaapistot" />
    <div className="photo-label"><span className="photo-cross" aria-hidden="true">＋</span>{label}</div>
  </div>;
}

export function Faq({ items }: { items: [string, string][] }) {
  return <div className="faq-list">{items.map(([question, answer]) => <details key={question}>
    <summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p>
  </details>)}</div>;
}
