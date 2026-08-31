import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { ServiceTile } from "./components/ServiceTile";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { ROUTES } from "@/lib/site";
import { HUB_COPY, SERVICES } from "@/lib/content/services";
import { getImageUrl } from "@/lib/imageUrl";

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

const featured = SERVICES.find((service) => service.hubLayout === "featured");
const rest = SERVICES.filter((service) => service.hubLayout !== "featured");

export default function DienstenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="relative isolate min-h-[88vh] overflow-hidden bg-atelier-ink">
        <img
          src={getImageUrl("/keratine.webp")}
          alt=""
          className="atelier-photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="atelier-photo-veil pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-atelier-cream/85 via-atelier-cream/15 to-atelier-ink/80" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-end px-6 pb-16 pt-36 md:pb-24">
          <p className="mb-4 text-[0.7rem] uppercase tracking-[0.32em] text-atelier-brass-light">
            {HUB_COPY.eyebrow}
          </p>
          <h1 className="font-editorial text-5xl font-medium leading-[0.92] text-atelier-cream md:text-7xl lg:text-8xl">
            {HUB_COPY.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-atelier-cream/85 md:text-xl">
            {HUB_COPY.intro}
          </p>
          {featured ? (
            <Link
              href={featured.path}
              className="mt-8 inline-flex text-[0.7rem] uppercase tracking-[0.26em] text-atelier-brass-light underline decoration-atelier-brass/60 underline-offset-8 hover:text-atelier-cream"
            >
              Begin bij keratine
            </Link>
          ) : null}
        </div>
      </div>

      <div className="bg-atelier-cream">
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Breadcrumbs items={crumbs} variant="editorial" />
        </div>
        <section className="px-0 pb-0 pt-4 md:px-6 md:pb-6 md:pt-6">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featured ? <ServiceTile service={featured} featured /> : null}
            {rest.map((service) => (
              <ServiceTile key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
            Locatie
          </p>
          <p className="mt-4 leading-relaxed text-atelier-muted">
            Keratine zoek je in{" "}
            <Link
              href={ROUTES.keratineMerelbeke}
              className="text-atelier-ink underline decoration-atelier-brass/50 underline-offset-4 hover:decoration-atelier-brass"
            >
              Merelbeke
            </Link>{" "}
            of{" "}
            <Link
              href={ROUTES.keratineGent}
              className="text-atelier-ink underline decoration-atelier-brass/50 underline-offset-4 hover:decoration-atelier-brass"
            >
              nabij Gent
            </Link>
            . De salon zelf is één adres.
          </p>
          <Link href={ROUTES.afspraak} className="btn-atelier btn-atelier-solid mt-8 inline-flex">
            Afspraak maken
          </Link>
        </section>
      </div>
    </>
  );
}
