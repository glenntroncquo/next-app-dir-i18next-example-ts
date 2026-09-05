import Link from "next/link";
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

      <section className="bg-cream pb-16 pt-28 md:pt-36">
        <div className="mx-auto max-w-4xl px-6">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mb-4">{HUB_COPY.eyebrow}</p>
          <h1 className="font-display text-5xl text-ink md:text-6xl">
            {HUB_COPY.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-salon-text-medium">
            {HUB_COPY.intro}
          </p>
        </div>
      </section>

      <section className="border-t border-stone/40">
        {SERVICES.map((service, index) => (
          <ServiceTile key={service.slug} service={service} index={index} />
        ))}
      </section>

      <section className="bg-cream py-20 text-center">
        <p className="mx-auto mb-8 max-w-xl px-6 text-salon-text-medium">
          Keratine zoek je in{" "}
          <Link
            href={ROUTES.keratineMerelbeke}
            className="text-ink underline decoration-stone underline-offset-4"
          >
            Merelbeke
          </Link>{" "}
          of{" "}
          <Link
            href={ROUTES.keratineGent}
            className="text-ink underline decoration-stone underline-offset-4"
          >
            nabij Gent
          </Link>
          . De salon zelf is één adres.
        </p>
        <Link href={ROUTES.afspraak} className="btn-primary">
          Afspraak maken
        </Link>
      </section>
    </>
  );
}
