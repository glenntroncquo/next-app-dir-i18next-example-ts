import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import IframeWidget from "./IframeWidget";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase";
import { companyId } from "@/lib/company_id";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd, hairSalonJsonLd } from "../../lib/schema";
import { ROUTES, absoluteUrl } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Afspraak maken",
  description:
    "Boek je afspraak bij D'Ana Hair in Merelbeke-Melle. Keratine, haarbotox en meer. Tel. +32 477 37 10 71.",
  path: ROUTES.afspraak,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Afspraak", href: ROUTES.afspraak },
];

export default function AfspraakPage() {
  return (
    <>
      <JsonLd
        data={{
          ...hairSalonJsonLd(absoluteUrl(ROUTES.afspraak)),
          "@type": ["WebPage", "HairSalon"],
          name: "Afspraak maken — D'Ana Hair",
        }}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="section-container pt-20 lg:pt-32">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-3">Boeken</p>
            <h1 className="mb-2 font-display text-4xl text-ink md:text-5xl">
              Afspraak maken
            </h1>
            <p className="text-salon-text-medium mb-8">
              Kies een moment in de agenda. Salon in Merelbeke-Melle,
              Hundelgemsesteenweg 73.
            </p>
            <IframeWidget
              companyId={companyId || undefined}
              supabaseUrl={SUPABASE_URL || undefined}
              supabaseKey={SUPABASE_ANON_KEY || undefined}
              widgetDomain={process.env.NEXT_PUBLIC_WIDGET_DOMAIN || undefined}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
