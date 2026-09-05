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
      <div className="min-h-screen">
        <Navbar />
        <section className="md:pt-32 pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-4">
                Contact
              </h1>
              <p className="text-lg text-salon-text-medium max-w-2xl mx-auto">
                Onze salon ligt in Merelbeke-Melle, niet in Gent. Vanuit Gent is
                het ongeveer 15 minuten. Bel, mail of kom langs op afspraak.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h2 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                  Contactgegevens
                </h2>
                <address className="not-italic space-y-4 text-salon-text-medium">
                  <p>
                    <strong className="text-salon-text-dark">Adres</strong>
                    <br />
                    <a href={NAP.mapsUrl} className="hover:text-salon-pink">
                      {fullAddress()}
                    </a>
                  </p>
                  <p>
                    <strong className="text-salon-text-dark">Telefoon</strong>
                    <br />
                    <a
                      href={`tel:${NAP.telephoneHref}`}
                      className="hover:text-salon-pink"
                    >
                      {NAP.telephone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-salon-text-dark">E-mail</strong>
                    <br />
                    <a
                      href={`mailto:${NAP.email}`}
                      className="hover:text-salon-pink"
                    >
                      {NAP.email}
                    </a>
                  </p>
                </address>

                <h2 className="font-display font-semibold text-xl mt-10 mb-6 text-salon-pink">
                  Openingsuren
                </h2>
                <dl className="space-y-2">
                  {WEEKDAY_HOURS.map((row) => (
                    <div
                      key={row.labelNl}
                      className="flex justify-between py-2 border-b border-salon-pink/20"
                    >
                      <dt>{row.labelNl}</dt>
                      <dd className="font-medium">{row.display}</dd>
                    </div>
                  ))}
                </dl>

                <Link href={ROUTES.afspraak} className="btn-primary mt-8 inline-flex">
                  Afspraak maken
                </Link>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h2 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                  Route
                </h2>
                <div className="rounded-lg overflow-hidden h-80 bg-salon-cream/20 mb-4">
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
