import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd } from "../../lib/schema";
import { NAP, ROUTES, fullAddress } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van D'Ana Hair.",
  path: ROUTES.voorwaarden,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Voorwaarden", href: ROUTES.voorwaarden },
];

export default function VoorwaardenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <article className="md:pt-32 pt-24 pb-20 max-w-3xl mx-auto px-6">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-4xl font-display font-bold mb-6">
            Algemene voorwaarden
          </h1>
          <p className="text-salon-text-medium mb-4">
            D&apos;Ana Hair, {fullAddress()}, BTW {NAP.vat}.
          </p>
          <p className="text-salon-text-dark mb-4">
            Afspraken zijn bindend na bevestiging. Te laat of niet komen zonder
            bericht kan betekenen dat de slot verloren gaat. Prijzen van
            keratine en botox hangen af van haarlengte en -conditie; het
            bedrag op de site is een startprijs, geen offerte.
          </p>
          <p className="text-salon-text-dark">
            Contact: {NAP.email} of {NAP.telephone}.
          </p>
        </article>
        <Footer />
      </div>
    </>
  );
}
