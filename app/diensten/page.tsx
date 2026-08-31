import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
      <div className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src={getImageUrl("/keratine.webp")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-salon-softer-pink/85 via-white/20 to-salon-text-dark/75" />
        <div className="pointer-events-none absolute top-1/4 -left-10 h-56 w-56 rounded-full bg-salon-light-pink opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-salon-lavender opacity-30 blur-3xl" />
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-end px-6 pb-16 pt-36 md:pb-24">
          <p className="mb-4 inline-flex w-fit rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-salon-pink shadow-soft backdrop-blur-md">
            {HUB_COPY.eyebrow}
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Haarwerk,{" "}
            <span className="text-salon-pink">geen menukaart</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            {HUB_COPY.intro}
          </p>
          {featured ? (
            <Link href={featured.path} className="btn-outline mt-8 inline-flex w-fit bg-white/80">
              Begin bij keratine
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Breadcrumbs items={crumbs} />
        </div>
        <section className="px-6 pb-8 pt-2">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured ? <ServiceTile service={featured} featured /> : null}
            {rest.map((service) => (
              <ServiceTile key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-salon-pink">
            Locatie
          </div>
          <p className="mt-4 leading-relaxed text-salon-text-medium">
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
          <Link href={ROUTES.afspraak} className="btn-primary mt-8 inline-flex">
            Afspraak maken
            <ChevronRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </>
  );
}
