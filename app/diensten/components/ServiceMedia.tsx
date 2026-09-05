import { getImageUrl } from "@/lib/imageUrl";
import type { ServiceMediaKind } from "@/lib/content/types";

export function ServiceMedia({
  src,
  alt,
  kind,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  kind: ServiceMediaKind;
  className?: string;
  priority?: boolean;
}) {
  const url = getImageUrl(src);

  if (kind === "video") {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className={className}
        aria-label={alt}
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
