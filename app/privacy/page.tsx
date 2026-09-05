import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd } from "../../lib/schema";
import { NAP, ROUTES, fullAddress } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Privacybeleid",
  description: "Privacybeleid van D'Ana Hair, haarsalon in Merelbeke-Melle.",
  path: ROUTES.privacy,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Privacybeleid", href: ROUTES.privacy },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <article className="md:pt-32 pt-24 pb-20 max-w-3xl mx-auto px-6 prose prose-salon">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-4xl font-display font-bold mb-6">Privacybeleid</h1>
          <p className="text-salon-text-medium mb-4">
            D&apos;Ana Hair, {fullAddress()}, verwerkt persoonsgegevens om
            afspraken te maken, je te contacteren en de salon te runnen.
            Contact: {NAP.email}, {NAP.telephone}.
          </p>
          <h2 className="text-2xl font-display font-semibold mt-8 mb-3">
            Welke gegevens
          </h2>
          <p className="text-salon-text-dark mb-4">
            Naam, telefoon, e-mail en afspraakgegevens via het boekingswidget
            (Supabase). We verkopen geen gegevens.
          </p>
          <h2 className="text-2xl font-display font-semibold mt-8 mb-3">
            Bewaartermijn
          </h2>
          <p className="text-salon-text-dark mb-4">
            Afspraken bewaren we zolang nodig voor planning en wettelijke
            verplichtingen. Je kunt inzage of wissing vragen via {NAP.email}.
          </p>
          <h2 className="text-2xl font-display font-semibold mt-8 mb-3">
            Cookies
          </h2>
          <p className="text-salon-text-dark">
            Zie ons{" "}
            <a
              href={ROUTES.cookies}
              className="underline decoration-stone underline-offset-4 hover:text-ink"
            >
              cookiebeleid
            </a>
            .
          </p>
        </article>
        <Footer />
      </div>
    </>
  );
}
