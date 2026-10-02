import Link from "next/link";
import { ArrowUpRight, Check, Phone, Ruler, ShieldCheck, MoveRight } from "lucide-react";
import { Cta, PhotoPanel, SectionIntro, ServiceCard, SiteShell, Faq } from "./site-components";

const services = [
  {number:"01", title:"Kylpyhuoneremontit", href:"/kylpyhuoneremontti", description:"Märkätilan uudistus suunnitelmasta viimeistelyyn. Selvitetään työn sisältö ja lähtötilanne ennen tarjousta."},
  {number:"02", title:"Huoneistoremontit", href:"/huoneistoremontti", description:"Pintojen päivityksestä laajempaan kokonaisuuteen. Työvaiheet sovitaan kohteen tarpeen mukaan."},
  {number:"03", title:"Keittiöremontit", href:"/keittioremontti", description:"Kalusteiden ja pintojen uudistus tai koko keittiön remontti. Aloitetaan siitä, mikä tilassa tarvitsee muutosta."},
];

export default function Home() {
  return <SiteShell>
    <section className="hero wrap" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-line"/> REMONTIT KESKI-UUDELLAMAALLA</span>
        <h1 id="hero-heading">Remontti, joka tehdään <em>niin kuin sovitaan.</em></h1>
        <p className="lead">Kylpyhuone-, huoneisto- ja keittiöremontit Järvenpäässä, Keravalla ja Tuusulassa. Kerro, mitä olet suunnittelemassa. Katsotaan yhdessä, mitä työ vaatii.</p>
        <div className="actions"><Cta href="/tarjouspyynto">Pyydä remonttikartoitus</Cta><Link className="text-link" href="/referenssit">Tutustu työn jälkeen <ArrowUpRight size={18}/></Link></div>
        <div className="hero-facts"><span><Check size={17}/> Paikallinen toimija</span><span><Check size={17}/> Kolme ydinpalvelua</span><span><Check size={17}/> Suora yhteys yritykseen</span></div>
      </div>
      <PhotoPanel className="hero-photo" label="KODIN TILAT UUTEEN KÄYTTÖÖN" />
      <div className="hero-index" aria-hidden="true">01 / 04</div>
    </section>

    <div className="band"><div className="wrap band-inner"><span>JÄRVENPÄÄ</span><span className="band-sep"/><span>KERAVA</span><span className="band-sep"/><span>TUUSULA</span><span className="band-end">KOTISI REMONTTI ALKAA TÄSTÄ <MoveRight size={22}/></span></div></div>

    <section className="section wrap" id="palvelut"><SectionIntro kicker="01 / PALVELUT" title="Mitä olet remontoimassa?" description="Valitse omaan tilanteeseesi sopiva palvelu. Jokaiselta sivulta pääset suoraan kertomaan kohteestasi."/><div className="service-grid">{services.map(s=><ServiceCard key={s.number} {...s}/>)}</div><p className="aside-note">Tarvitsetko vesivahinkokorjausta tai terassin? <Link href="/yhteystiedot">Kysy, sopiiko työ meille <ArrowUpRight size={15}/></Link></p></section>

    <section className="proof-section"><div className="wrap proof-grid"><div><span className="kicker light">02 / TYÖN JÄLKI</span><h2>Hyvä remontti näkyy <em>yksityiskohdissa.</em></h2><p>Kohteen kuvat ja työn sisältö kertovat enemmän kuin yleiset lupaukset. Lisäämme tähän yrityksen vahvistamat toteutukset, kun kuvien käyttöluvat ja projektitiedot on tarkistettu.</p><Link className="light-link" href="/referenssit">Referenssien tila <ArrowUpRight size={18}/></Link></div><div className="proof-visual"><div className="outline-number">01</div><div className="proof-caption"><span>KOHDEKUVAT</span><strong>Asiakkaan aineisto odottaa vahvistusta</strong></div></div></div></section>

    <section className="section wrap process-preview"><SectionIntro kicker="03 / TOIMINTATAPA" title="Tiedät, mitä seuraavaksi tapahtuu." description="Remontti on helpompi aloittaa, kun työn sisältö ja seuraavat päätökset käydään läpi rauhassa."/><div className="steps"><div><span>01</span><Ruler/><h3>Kerro kohteesta</h3><p>Kuvaile tila, sijainti ja toivottu muutos. Voit liittää mukaan kuvia.</p></div><div><span>02</span><ShieldCheck/><h3>Käydään työ läpi</h3><p>Selvitetään lähtötilanne ja rajataan tarjottava työ kohteeseen sopivaksi.</p></div><div><span>03</span><Check/><h3>Sovitaan toteutus</h3><p>Tarjouksen sisältö, aikataulu ja työnjako vahvistetaan ennen aloitusta.</p></div></div><Link className="under-link" href="/nain-toimimme">Katso koko prosessi <ArrowUpRight size={18}/></Link></section>

    <section className="split-section wrap"><div className="split-accent"><span>PAIKALLINEN / KESKI-UUSIMAA</span><strong>SG<span>.</span></strong></div><div className="split-copy"><span className="kicker">04 / YRITYS</span><h2>Remontti tehdään ihmiseltä ihmiselle.</h2><p>Saneeraus Gurut Oy toimii Järvenpään seudulla. Kun suunnittelet remonttia, saat yhteyden suoraan yritykseen ja voit käydä projektin lähtökohdat läpi ennen päätöstä.</p><Link className="under-link" href="/yritys">Tutustu yritykseen <ArrowUpRight size={18}/></Link></div></section>

    <section className="section wrap faq-home"><SectionIntro kicker="05 / USEIN KYSYTTYÄ" title="Ennen kuin otat yhteyttä"/><Faq items={[
      ["Millä alueella toimitte?","Pääasiallinen toimialue on Järvenpää, Kerava ja Tuusula. Kysy myös lähikuntien kohteista."],
      ["Miten remontin hinta määräytyy?","Hinta riippuu kohteesta, työn laajuudesta, materiaaleista ja tarvittavista työvaiheista. Saat kohteeseesi perustuvan tarjouksen, kun lähtötilanne on selvitetty."],
      ["Voinko lähettää kuvia jo alussa?","Kyllä. Voit lisätä tarjouspyyntöön 1–5 kuvaa nykyisestä tilasta. Kuvat auttavat hahmottamaan työn laajuutta."],
      ["Pitääkö minun tietää tarkka toteutus?","Ei. Kerro, mikä tilassa ei nyt toimi ja mitä haluaisit muuttaa. Toteutusta voidaan tarkentaa kartoituksessa."]
    ]}/></section>
    <FinalCall/>
  </SiteShell>;
}

export function FinalCall(){return <section className="final-call"><div className="wrap final-call-inner"><div><span className="kicker light">ALOITETAAN KESKUSTELUSTA</span><h2>Millainen remontti <em>sinulla on mielessä?</em></h2><p>Kerro lyhyesti kohteesta. Otamme seuraavan askeleen sen perusteella.</p></div><div className="final-actions"><Cta href="/tarjouspyynto">Pyydä kartoitus</Cta><a href="tel:+358503476660"><Phone size={18}/> 050 347 6660</a></div></div></section>}
