# D'Ana Hair — danahair.be

Nederlandstalige Next.js-site (App Router) voor salon D'Ana Hair in Merelbeke-Melle. Geen i18n, geen locale-prefixen.

## URL-kaart (Nederlands, zonder `/nl`)

| Pad | Inhoud |
| --- | --- |
| `/` | Homepage |
| `/diensten` | Editorial overzicht (foto-grid, keratine uitgelicht) |
| `/diensten/[slug]` | Detailpagina’s uit `lib/content/services.ts` |
| `/diensten/keratine-behandeling` | Keratine (money page) |
| `/diensten/haarbotox` | Haarbotox |
| `/diensten/ritual-nutrition` | Ritual Nutrition + LED |
| `/diensten/kleuren` | Kleuren |
| `/diensten/balayage` | Balayage |
| `/diensten/knippen` | Knippen |
| `/diensten/brushing` | Brushing |
| `/diensten/extensions` | Extensions |
| `/diensten/opsteekkapsel` | Opsteekkapsel |
| `/over-ons` | Team |
| `/contact` | NAP + uren |
| `/keratine-behandeling-merelbeke` | Lokale landing (echt adres) |
| `/keratine-behandeling-gent` | Eerlijk: salon in Merelbeke, ~15 min van Gent |
| `/afspraak` | Boekingswidget (iframe) |
| `/privacy` `/cookiebeleid` `/voorwaarden` | Juridisch |

Canonical host: **danahair.be** (www → non-www, 301). `html lang="nl-BE"`.

## Diensten

Hub als editorial strips (foto + copy, keratin eerst), plus `[slug]`-detailpagina’s. Visueel systeem: cream / ink / stone (Sematelier-achtig), rechthoekige outline-CTA’s. Geen salon-roze.

- Copy, beelden, prijzen, FAQ en SEO-titels: `lib/content/services.ts`
- Hub: `app/diensten/page.tsx`
- Detail: `app/diensten/[slug]/page.tsx` (`generateMetadata`, canonical, Service JSON-LD; keratin ook FAQPage)


## 410 Gone

Verwijderde doorway-pagina's blijven **410** (niet 301), met en zonder oude locale:

- `/gent`, `/merelbeke`, `/oudenaarde`
- `/nl/gent`, `/en/merelbeke`, `/fr/oudenaarde`, …

Zie `proxy.ts` + `lib/redirects.ts`.

## Redirects (301)

Oude paden en locale-prefixen gaan in één hop naar de Nederlandse URL, o.a.:

- `/booking`, `/appointment`, `/nl/booking`, `/en/booking` → `/afspraak`
- `/services`, `/nl/services` → `/diensten`
- `/services/keratine`, `/nl/services/keratine` → `/diensten/keratine-behandeling`
- `/services/botox` → `/diensten/haarbotox`
- `/services/ritual-led` → `/diensten/ritual-nutrition`
- `/about`, `/wie-is-wie` → `/over-ons`
- `/nl`, `/en`, `/fr`, `/pt` → `/`

Root `/` is Nederlands. Geen Accept-Language- of cookie-redirect meer.

## NAP (één adres)

- Hundelgemsesteenweg **73**, 9820 Merelbeke-Melle, BE
- Tel. **+32 477 37 10 71**
- E-mail **info.danahair@gmail.com**

Niet gebruiken: Hundelgemsesteenweg 1A of +32 9 222 00 00.

Uren (UI + JSON-LD): wo 13:30–21:00, do 17:00–21:00, vr 09:00–18:00, za 09:00–16:00. Ma/di/zo gesloten.

## Ontwikkelen

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Boekingswidget: `NEXT_PUBLIC_COMPANY_ID`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, optioneel `NEXT_PUBLIC_WIDGET_DOMAIN`.

Beeld-CDN: `NEXT_PUBLIC_CLOUDFLARE_URL` (R2). Bestaande foto's en `keratine.webp` blijven via `lib/imageUrl.ts`.

```bash
npm run build
```

`app/sitemap.ts` en `app/robots.ts` vervangen de oude statische January-sitemap. Geen crawl-delay. `public/llms.txt` is een korte samenvatting voor AI-crawlers.
