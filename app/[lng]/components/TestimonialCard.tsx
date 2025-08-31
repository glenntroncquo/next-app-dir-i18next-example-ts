import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  imageSrc: string;
  delay?: number;
  height?: string | number;
}

const TestimonialCard = ({
  name,
  text,
  rating,
  imageSrc,
  delay = 0,
  height,
}: TestimonialCardProps) => {
  return (
    <div
      className="glass-card-hover p-6"
      style={{
        animationDelay: `${delay}ms`,
        height: height,
      }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-soft">
          <Image
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
            width={64}
            height={64}
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div>
          <h4 className="font-display font-semibold text-salon-text-dark">
            {name}
          </h4>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                fill={index < rating ? "#FF8FB2" : "transparent"}
                className={
                  index < rating ? "text-salon-pink" : "text-salon-text-light"
                }
              />
            ))}
          </div>
        </div>
      </div>

      <blockquote className="relative">
        <p className="text-salon-text-medium relative z-10">{text}</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
