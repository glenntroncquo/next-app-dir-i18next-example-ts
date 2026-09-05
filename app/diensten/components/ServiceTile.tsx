import Link from "next/link";
import { getImageUrl } from "@/lib/imageUrl";
import type { ServiceContent } from "@/lib/content/types";

export function ServiceTile({
  service,
  index = 0,
}: {
  service: ServiceContent;
  index?: number;
}) {
  const imageUrl = getImageUrl(service.image);
  const isVideo = service.media === "video" || service.image.endsWith(".mp4");
  const imageRight = index % 2 === 1;

  return (
    <article className="grid border-b border-stone/40 md:grid-cols-2">
      <div
        className={`relative min-h-[280px] bg-ink md:min-h-[360px] ${
          imageRight ? "md:order-2" : ""
        }`}
      >
        {isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={imageUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={service.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col justify-center bg-cream px-8 py-12 md:px-14">
        <p className="eyebrow mb-3">{service.eyebrow}</p>
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          {service.hubTitle}
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-salon-text-medium">
          {service.hubBlurb}
        </p>
        <p className="mt-6 text-sm text-ink">
          {service.priceLabel}
          {service.duration ? ` · ${service.duration}` : ""}
        </p>
        <Link href={service.path} className="btn-outline mt-8 w-fit">
          Meer over {service.hubTitle.toLowerCase()}
        </Link>
      </div>
    </article>
  );
}
