import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "../../lib/schema";

export function Breadcrumbs({
  items,
  variant = "salon",
}: {
  items: BreadcrumbItem[];
  variant?: "salon" | "editorial";
}) {
  const editorial = variant === "editorial";
  return (
    <nav aria-label="Broodkruimelnavigatie" className="mb-8">
      <ol
        className={`flex flex-wrap items-center gap-1 text-sm ${
          editorial ? "text-atelier-muted" : "text-salon-text-medium"
        }`}
      >
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  className={
                    editorial ? "text-atelier-brass/70" : "text-salon-pink/70"
                  }
                  aria-hidden="true"
                />
              )}
              {last ? (
                <span
                  className={
                    editorial
                      ? "font-medium text-atelier-ink"
                      : "text-salon-text-dark font-medium"
                  }
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={
                    editorial
                      ? "transition-colors hover:text-atelier-rose"
                      : "hover:text-salon-pink transition-colors"
                  }
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
