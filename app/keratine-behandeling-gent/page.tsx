import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqList } from "../components/FaqList";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  hairSalonJsonLd,
} from "../../lib/schema";
import { NAP, ROUTES, absoluteUrl, fullAddress } from "../../lib/site";
import { KERATIN_FAQS } from "../../lib/keratin";

export const metadata = pageMetadata({
  title: "Keratinebehandeling nabij Gent",
  description:
    "Keratine bij D'Ana Hair: de salon ligt in Merelbeke-Melle, ongeveer 15 minuten van Gent. Geen vals Gents adres. Hundelgemsesteenweg 73.",
  path: ROUTES.keratineGent,
  keywords:
    "keratinebehandeling Gent, keratine nabij Gent, haarsalon Merelbeke, D'Ana Hair",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Keratine nabij Gent", href: ROUTES.keratineGent },
];

const faqs = [
  KERATIN_FAQS[1],
  KERATIN_FAQS[2],
  KERATIN_FAQS[3],
  KERATIN_FAQS[6],
  KERATIN_FAQS[7],
].map((f) => ({ question: f.question, answer: f.answer }));

export default function KeratineGentPage() {
  return (
    <>
      <JsonLd data={hairSalonJsonLd(absoluteUrl(ROUTES.keratineGent))} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <article className="md:pt-32 pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
              Keratinebehandeling nabij Gent
            </h1>
            <p className="text-lg text-salon-text-medium mb-6">
              Zoek je een keratinebehandeling in of rond Gent? D&apos;Ana Hair
              heeft <strong>geen salon in Gent</strong>. We zitten in
              Merelbeke-Melle, {fullAddress()}, ongeveer 15 minuten van Gent.
            </p>
            <p className="text-salon-text-dark mb-6">
              Die eerlijkheid is bewust. Een Gents postadres verzinnen helpt
              Google noch klanten. Je rijdt of neemt de bus naar de
              Hundelgemsesteenweg, parkeert voor de deur, en laat keratine doen
              door Daniela of Ana Paula.
            </p>
            <p className="text-salon-text-dark mb-8">
              Route: N60 richting Merelbeke. Telefoon {NAP.telephone}. Details
              over de behandeling:{" "}
              <Link href={ROUTES.keratine} className="text-salon-pink underline">
                keratinebehandeling
              </Link>
              . Lokaal in Merelbeke:{" "}
              <Link
                href={ROUTES.keratineMerelbeke}
                className="text-salon-pink underline"
              >
                keratine in Merelbeke
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href={ROUTES.afspraak} className="btn-primary">
                Afspraak maken
              </Link>
              <Link href={ROUTES.contact} className="btn-outline">
                Route & contact
              </Link>
            </div>
          </div>
        </article>
        <FaqList faqs={faqs} />
        <Footer />
      </div>
    </>
  );
}
