import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "../../lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Broodkruimelnavigatie" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-salon-text-medium">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  className="text-salon-pink/70"
                  aria-hidden="true"
                />
              )}
              {last ? (
                <span className="text-salon-text-dark font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-salon-pink transition-colors"
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
