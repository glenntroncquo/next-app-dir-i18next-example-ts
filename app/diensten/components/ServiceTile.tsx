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
      className={`group relative isolate block overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-glow-pink ${
        featured
          ? "min-h-[28rem] md:col-span-2 md:min-h-[36rem] lg:col-span-2 lg:row-span-2 lg:min-h-[40rem]"
          : "min-h-[22rem] md:min-h-[24rem]"
      }`}
    >
      <ServiceMedia
        src={service.image}
        alt={service.imageAlt}
        kind={service.media}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-105"
        priority={featured}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-salon-text-dark/80 via-salon-text-dark/25 to-transparent" />
      <div
        className={`absolute inset-x-0 bottom-0 z-10 ${
          featured ? "p-8 md:p-10" : "p-6 md:p-7"
        }`}
      >
        <p className="mb-2 text-sm font-medium text-salon-light-pink">
          {service.eyebrow}
        </p>
        <h2
          className={`font-display font-bold leading-tight text-white ${
            featured ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"
          }`}
        >
          {service.hubTitle}
        </h2>
        <p
          className={`mt-3 max-w-md text-white/90 ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {service.hubBlurb}
        </p>
        <p className="mt-4 font-semibold text-salon-pink">{service.priceLabel}</p>
      </div>
    </Link>
  );
}
