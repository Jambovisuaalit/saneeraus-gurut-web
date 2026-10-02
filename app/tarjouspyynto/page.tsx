import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "../site-components";
import RequestForm from "./request-form";
export const metadata:Metadata={title:"Pyydä remonttikartoitus",description:"Kerro remontin tyyppi, sijainti ja yhteystiedot. Voit liittää mukaan 1–5 kuvaa."};
export default function RequestPage(){return <SiteShell><div className="wrap form-layout"><div><div className="form-intro"><span className="kicker">ALOITA TÄSTÄ / TARJOUSPYYNTÖ</span><h1>Kerro meille remontistasi.</h1><p>Muutama tieto riittää alkuun. Jos et vielä tiedä tarkkaa toteutusta, kuvaile tilanne omin sanoin.</p></div><Suspense fallback={<p>Ladataan lomaketta...</p>}><RequestForm/></Suspense></div><aside className="form-aside"><span className="kicker">MIELUUMMIN PUHELIMESSA?</span><h2>Soita suoraan.</h2><p>Voit käydä remontin ensimmäiset kysymykset läpi puhelimitse.</p><a href="tel:+358503476660">050 347 6660</a><p>Kuvat ovat vapaaehtoisia. Älä lisää kuviin arkaluonteisia henkilötietoja.</p></aside></div></SiteShell>}
