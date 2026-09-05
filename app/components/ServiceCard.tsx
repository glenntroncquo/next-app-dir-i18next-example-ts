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
      className="glass-card-hover overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <div className="h-52 overflow-hidden">
          {shouldShowVideo ? (
            <video
              src={videoSrc!}
              poster={imageSrc}
              className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
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
            className={`w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110 ${
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

        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-soft">
          <span className="font-medium text-salon-pink">
            {priceLabel ?? `Vanaf ${price}`}
          </span>
        </div>
      </div>

      <div className="p-6 pt-8">
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-salon-text-medium mb-4">{description}</p>

        <Link
          href={href}
          className="flex items-center font-medium text-salon-pink transition-all duration-300 ease-bounce-soft"
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
