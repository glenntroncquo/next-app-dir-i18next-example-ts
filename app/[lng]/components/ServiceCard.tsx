"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  videoSrc?: string;
  iconSrc?: React.ReactNode;
  delay?: number;
  link: string;
  lng: string;
  learnMoreText: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  imageSrc,
  videoSrc,
  iconSrc,
  delay = 0,
  link,
  lng,
  learnMoreText,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper function to get file extension
  const getFileExtension = (src: string) => {
    return src.split(".").pop()?.toLowerCase();
  };

  // Check if source is a video
  const isVideo = (src: string) => {
    const videoExtensions = ["mp4", "webm", "ogg", "mov"];
    return videoExtensions.includes(getFileExtension(src) || "");
  };

  // Determine if we should show video or image
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
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                // Fallback to image if video fails
                const img = target.nextElementSibling as HTMLImageElement;
                if (img) img.style.display = "block";
              }}
            />
          ) : null}

          <img
            src={mediaSrc || "/placeholder-service.jpg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110 ${
              shouldShowVideo ? "hidden" : ""
            }`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            width="378"
            height="252"
          />
        </div>

        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 shadow-soft">
          <span className="font-medium text-salon-pink">
            From {price}
          </span>
        </div>
      </div>

      <div className="p-6 pt-8">
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-salon-text-medium mb-4">{description}</p>

        <a
          href={`/${lng}${link}`}
          className="flex items-center font-medium text-salon-pink transition-all duration-300 ease-bounce-soft"
        >
          {learnMoreText}
          <ChevronRight
            size={16}
            className={`ml-1 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;