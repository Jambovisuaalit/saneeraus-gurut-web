import Link from "next/link";
import { Check } from "lucide-react";
import { SiteShell } from "../site-components";
export default function ThankYou(){return <SiteShell><section className="wrap content-section narrow" style={{minHeight:"60vh"}}><div className="success-mark"><Check size={64}/></div><span className="kicker">VIESTI TALLENNETTU</span><h1>Kiitos yhteydenotosta.</h1><p className="plain-body">Remonttipyyntösi on vastaanotettu. Ota kiireellisessä asiassa yhteyttä myös puhelimitse numeroon <a href="tel:+358503476660"><u>050 347 6660</u></a>.</p><Link className="under-link" href="/">Takaisin etusivulle</Link></section></SiteShell>}
