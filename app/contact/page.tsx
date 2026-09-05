import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd, hairSalonJsonLd } from "../../lib/schema";
import {
  NAP,
  ROUTES,
  WEEKDAY_HOURS,
  absoluteUrl,
  fullAddress,
} from "../../lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Bezoek D'Ana Hair in Merelbeke-Melle, Hundelgemsesteenweg 73. Tel. +32 477 37 10 71. Ongeveer 15 minuten van Gent.",
  path: ROUTES.contact,
  keywords:
    "contact D'Ana Hair, haarsalon Merelbeke, Hundelgemsesteenweg 73, telefoon",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Contact", href: ROUTES.contact },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={hairSalonJsonLd(absoluteUrl(ROUTES.contact))} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen bg-cream">
        <Navbar />
        <section className="pb-20 pt-28 md:pt-36">
          <div className="mx-auto max-w-6xl px-6">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-4">Bezoek</p>
            <h1 className="font-display text-5xl text-ink md:text-6xl">Contact</h1>
            <p className="mt-4 max-w-2xl text-lg text-salon-text-medium">
              Onze salon ligt in Merelbeke-Melle, niet in Gent. Vanuit Gent is
              het ongeveer 15 minuten. Bel, mail of kom langs op afspraak.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="eyebrow mb-6">Gegevens</h2>
                <address className="not-italic space-y-4 text-salon-text-medium">
                  <p>
                    <strong className="text-ink">Adres</strong>
                    <br />
                    <a href={NAP.mapsUrl} className="underline decoration-stone underline-offset-4 hover:text-ink">
                      {fullAddress()}
                    </a>
                  </p>
                  <p>
                    <strong className="text-ink">Telefoon</strong>
                    <br />
                    <a href={`tel:${NAP.telephoneHref}`} className="hover:text-ink">
                      {NAP.telephone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-ink">E-mail</strong>
                    <br />
                    <a href={`mailto:${NAP.email}`} className="hover:text-ink">
                      {NAP.email}
                    </a>
                  </p>
                </address>

                <h2 className="eyebrow mb-4 mt-12">Openingsuren</h2>
                <dl className="max-w-sm space-y-2">
                  {WEEKDAY_HOURS.map((row) => (
                    <div
                      key={row.labelNl}
                      className="flex justify-between border-b border-stone/40 py-2 text-sm"
                    >
                      <dt>{row.labelNl}</dt>
                      <dd className="text-ink">{row.display}</dd>
                    </div>
                  ))}
                </dl>

                <Link href={ROUTES.afspraak} className="btn-primary mt-10 inline-flex">
                  Afspraak maken
                </Link>
              </div>

              <div>
                <h2 className="eyebrow mb-6">Route</h2>
                <div className="mb-4 h-80 overflow-hidden border border-stone/40">
                  <iframe
                    src={NAP.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="D'Ana Hair — Hundelgemsesteenweg 73, Merelbeke-Melle"
                  />
                </div>
                <p className="text-sm text-salon-text-medium">
                  Gratis parkeren voor de salon. Vanuit Gent: N60 richting
                  Merelbeke. Geen vestiging in Gent of Oudenaarde.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
