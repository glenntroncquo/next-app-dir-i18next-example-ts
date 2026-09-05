import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getImageUrl } from "@/lib/imageUrl";
import type { ServiceContent } from "@/lib/content/types";

export function ServiceTile({ service }: { service: ServiceContent }) {
  const imageUrl = getImageUrl(service.image);
  const isVideo = service.media === "video" || service.image.endsWith(".mp4");
  const features = service.benefits.map((b) => b.title);

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-glow-pink">
      <div className="relative h-48 overflow-hidden">
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
            <source src={imageUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={service.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h2 className="mb-3 font-display text-xl font-bold text-salon-text-dark transition-colors duration-300 group-hover:text-salon-pink">
          {service.hubTitle}
        </h2>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-salon-text-medium">
          {service.hubBlurb}
        </p>

        <div className="mb-4 flex items-center justify-between text-sm">
          <div>
            <div className="font-semibold text-salon-pink">{service.priceLabel}</div>
            <div className="text-xs text-salon-text-light">Prijs</div>
          </div>
          {service.duration ? (
            <div className="text-right">
              <div className="font-semibold text-salon-pink">{service.duration}</div>
              <div className="text-xs text-salon-text-light">Duur</div>
            </div>
          ) : null}
        </div>

        <div className="mb-6 space-y-2">
          {features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center text-xs">
              <div className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-salon-pink" />
              <span className="text-salon-text-medium">{feature}</span>
            </div>
          ))}
          {features.length > 3 ? (
            <div className="text-xs text-salon-text-light">
              +{features.length - 3} meer
            </div>
          ) : null}
        </div>

        <Link
          href={service.path}
          className="btn-outline inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm"
        >
          Zie meer
          <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
