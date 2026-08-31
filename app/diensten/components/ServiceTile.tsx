import Link from "next/link";
import type { ServiceContent } from "@/lib/content/types";
import { ServiceMedia } from "./ServiceMedia";

export function ServiceTile({
  service,
  featured = false,
}: {
  service: ServiceContent;
  featured?: boolean;
}) {
  return (
    <Link
      href={service.path}
      className={`group relative isolate block overflow-hidden bg-atelier-ink ${
        featured
          ? "min-h-[28rem] md:col-span-2 md:min-h-[36rem] lg:col-span-2 lg:row-span-2 lg:min-h-[40rem]"
          : "min-h-[22rem] md:min-h-[24rem]"
      }`}
    >
      <ServiceMedia
        src={service.image}
        alt={service.imageAlt}
        kind={service.media}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        priority={featured}
      />
      <div className="atelier-photo-veil pointer-events-none absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-atelier-ink/80 via-atelier-ink/25 to-transparent" />
      <div
        className={`absolute inset-x-0 bottom-0 z-10 ${
          featured ? "p-8 md:p-10" : "p-6 md:p-7"
        }`}
      >
        <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-atelier-brass-light">
          {service.eyebrow}
        </p>
        <h2
          className={`font-editorial font-medium leading-tight text-atelier-cream ${
            featured ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {service.hubTitle}
        </h2>
        <p
          className={`mt-3 max-w-md text-atelier-cream/80 ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {service.hubBlurb}
        </p>
        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-atelier-brass">
          {service.priceLabel}
        </p>
      </div>
    </Link>
  );
}
