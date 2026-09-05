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
      className="border border-stone/50 bg-paper p-6"
      style={{ animationDelay: `${delay}ms`, height }}
    >
      <div className="mb-4 flex items-center space-x-4">
        <div className="h-14 w-14 overflow-hidden border border-stone/40">
          <Image
            src={imageSrc}
            alt={name}
            className="h-full w-full object-cover"
            width={56}
            height={56}
            quality={80}
          />
        </div>
        <div>
          <h4 className="font-display text-xl text-ink">{name}</h4>
          <div className="mt-1 flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={12}
                fill={index < rating ? "#1A1A1A" : "transparent"}
                className={index < rating ? "text-ink" : "text-stone"}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote>
        <p className="text-sm leading-relaxed text-salon-text-medium">{text}</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
