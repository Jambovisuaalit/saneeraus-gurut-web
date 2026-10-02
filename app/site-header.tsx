"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const nav = [
  { href: "/kylpyhuoneremontti", label: "Kylpyhuone" },
  { href: "/huoneistoremontti", label: "Huoneisto" },
  { href: "/keittioremontti", label: "Keittiö" },
  { href: "/referenssit", label: "Referenssit" },
  { href: "/nain-toimimme", label: "Näin toimimme" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <header className="site-header">
    <div className="wrap header-inner">
      <Link className="brand" href="/" aria-label="Saneeraus Gurut, etusivu" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">SG<span>.</span></span>
        <span className="brand-name">SANEERAUS<br />GURUT</span>
      </Link>
      <nav className="desktop-nav" aria-label="Päävalikko">
        {nav.map(item => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <a className="header-phone" href="tel:+358503476660" aria-label="Soita numeroon 050 347 6660"><Phone size={17} aria-hidden="true" /><span>050 347 6660</span></a>
        <Link className="header-cta" href="/tarjouspyynto" aria-current={pathname === "/tarjouspyynto" ? "page" : undefined}>Pyydä kartoitus <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button ref={menuButton} className="menu-button" type="button" aria-label={open ? "Sulje valikko" : "Avaa valikko"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(value => !value)}>
          {open ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
    </div>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobiilivalikko" hidden={!open}>
      {[...nav, { href: "/yritys", label: "Yritys" }, { href: "/yhteystiedot", label: "Yhteystiedot" }].map(item => <Link onClick={() => setOpen(false)} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
    </nav>
  </header>;
}
