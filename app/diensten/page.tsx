import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { ServiceTile } from "./components/ServiceTile";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ROUTES } from "@/lib/site";
import { HUB_COPY, SERVICES } from "@/lib/content/services";

export const metadata = pageMetadata({
  title: HUB_COPY.seoTitle,
  description: HUB_COPY.seoDescription,
  path: ROUTES.diensten,
  image: "/keratine.webp",
  imageAlt: "Keratinebehandeling bij D'Ana Hair in Merelbeke",
  keywords: "haarsalon diensten Merelbeke, keratine, haarbotox, knippen, kleuren",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Diensten", href: ROUTES.diensten },
];

export default function DienstenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <section className="pb-20 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={crumbs} />
          <div className="mb-12 text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-salon-text-dark md:text-5xl">
              Onze <span className="text-salon-pink">diensten</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-salon-text-medium">
              {HUB_COPY.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceTile key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-8 text-salon-text-medium">
            Keratine zoek je in{" "}
            <Link
              href={ROUTES.keratineMerelbeke}
              className="text-salon-pink underline"
            >
              Merelbeke
            </Link>{" "}
            of{" "}
            <Link href={ROUTES.keratineGent} className="text-salon-pink underline">
              nabij Gent
            </Link>
            . De salon zelf is één adres.
          </p>
          <Link href={ROUTES.afspraak} className="btn-primary inline-flex items-center px-8 py-3">
            Afspraak maken
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
