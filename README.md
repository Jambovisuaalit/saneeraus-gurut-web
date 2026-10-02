# Saneeraus Gurut — verkkosivusto

Next.js-sivusto Saneeraus Gurut Oy:lle. Sisältää etusivun, kolme palvelusivua, referenssi-, yritys-, prosessi- ja yhteystietosivut sekä tarjouspyyntölomakkeen.

## Käynnistys

Node.js 22+, pnpm. Asenna riippuvuudet komennolla pnpm install --frozen-lockfile. Kopioi .env.example tiedostoksi .env.local ja täytä palvelinmuuttujat. Käynnistä pnpm dev.

## Vercel-asetukset

- Framework: Next.js
- Root directory: repository root
- Build command: pnpm build
- Production branch: main
- Server-side secrets: RESEND_API_KEY, LEAD_FROM_EMAIL, LEAD_TO_EMAIL
- LEAD_FROM_EMAIL vaatii Resendissä vahvistetun lähettäjädomainin.
- NEXT_PUBLIC_SITE_INDEXABLE=false, kunnes referenssit, tietosuoja ja julkaisu on hyväksytty.
- Pidä Preview Deployment Protection päällä. Älä liitä nykyistä saneerausgurut.fi-domainia ennen erillistä julkaisupäätöstä.

Lomake vastaa onnistumisella vasta, kun Resend on hyväksynyt viestin. Se lähettää yhteydenottotiedot ja enintään viisi kuvaa yrityksen osoitteeseen. Ilman ympäristömuuttujia se palauttaa virheen ja tarjoaa puhelinyhteyden. Lomakkeen lähetys on testattava oikealla testiviestillä ennen liikenteen ohjaamista Verceliin.

## Julkaisun tarkistuslista

1. Vahvista yhteystiedot, toimialue, palveluiden sisältö ja kartoituksen ehdot asiakkaalta.
2. Korvaa nykyiseltä sivustolta ladattu ulkoinen hero-kuva luvallisella paikallisella kuva-aineistolla. Lisää 3–5 varmennettua referenssiä ja niiden julkaisuluvat.
3. Vahvista tietosuojaselosteeseen säilytysaika ja käsittelijät.
4. Ota Resend käyttöön, vahvista lähettäjädomain ja lisää salaiset muuttujat Verceliin.
5. Testaa lomake ja kuvien saapuminen, virhetilanne, mobiili 390 px ja näppäimistökäyttö.
6. Kytke botinesto tai palvelutason rate limiting ennen julkista liikennettä.
7. Aseta NEXT_PUBLIC_SITE_INDEXABLE=true, tarkista metadata ja yhdistä domain vasta hyväksytyn QA:n jälkeen.

## Kehityskäytännöt

- main on tuotantohaara; muutokset PR:llä.
- CI suorittaa lintin, tyyppitarkistuksen ja tuotantokäännöksen.
- Pidä salaisuudet Vercelin ympäristömuuttujissa, älä repossa.
- Vercelin Git-integraatio luo Previewn PR:ille. Hyväksy head SHA ja Preview ennen mergeä.
