"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceLabel?: string;
  imageSrc: string;
  videoSrc?: string;
  iconSrc?: React.ReactNode;
  delay?: number;
  href: string;
  learnMoreText?: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  priceLabel,
  imageSrc,
  videoSrc,
  delay = 0,
  href,
  learnMoreText = "Zie meer",
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getFileExtension = (src: string) => {
    return src.split(".").pop()?.toLowerCase();
  };

  const isVideo = (src: string) => {
    const videoExtensions = ["mp4", "webm", "ogg", "mov"];
    return videoExtensions.includes(getFileExtension(src) || "");
  };

  const shouldShowVideo = videoSrc && isVideo(videoSrc);
  const mediaSrc = shouldShowVideo ? videoSrc : imageSrc;

  return (
    <div
      className="overflow-hidden border border-stone/40 bg-cream"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <div className="h-52 overflow-hidden bg-ink">
          {shouldShowVideo ? (
            <video
              src={videoSrc!}
              poster={imageSrc}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              loop
              autoPlay
              playsInline
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const img = target.nextElementSibling as HTMLImageElement;
                if (img) img.style.display = "block";
              }}
            />
          ) : null}

          <Image
            src={mediaSrc || "/placeholder-service.jpg"}
            alt={title}
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              shouldShowVideo ? "hidden" : ""
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            width={378}
            height={252}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <div className="absolute top-4 right-4 border border-ink bg-cream px-3 py-1">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink">
            {priceLabel ?? `Vanaf ${price}`}
          </span>
        </div>
      </div>

      <div className="p-6 pt-8">
        <h3 className="mb-3 font-display text-2xl text-ink">{title}</h3>
        <p className="mb-4 text-salon-text-medium">{description}</p>

        <Link
          href={href}
          className="flex items-center text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink"
        >
          {learnMoreText}
          <ChevronRight
            size={16}
            className={`ml-1 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
