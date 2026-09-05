import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd } from "../../lib/schema";
import { ROUTES } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Cookiebeleid",
  description: "Cookiebeleid van D'Ana Hair.",
  path: ROUTES.cookies,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Cookiebeleid", href: ROUTES.cookies },
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <article className="md:pt-32 pt-24 pb-20 max-w-3xl mx-auto px-6">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-4xl font-display font-bold mb-6">Cookiebeleid</h1>
          <p className="text-salon-text-medium mb-4">
            Deze site gebruikt functionele cookies die nodig zijn om pagina&apos;s
            te tonen en het boekingswidget te laten werken. We plaatsen geen
            taalcookie meer: de site is Nederlandstalig.
          </p>
          <p className="text-salon-text-dark mb-4">
            Het boekingsiframe kan eigen cookies zetten op het domein van de
            widget-aanbieder. Analysetools plaatsen we alleen als we die later
            expliciet activeren.
          </p>
          <p className="text-salon-text-dark">
            Vragen: zie het{" "}
            <a
              href={ROUTES.privacy}
              className="underline decoration-stone underline-offset-4 hover:text-ink"
            >
              privacybeleid
            </a>
            .
          </p>
        </article>
        <Footer />
      </div>
    </>
  );
}
