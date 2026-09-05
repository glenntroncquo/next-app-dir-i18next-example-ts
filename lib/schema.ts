import {
  NAP,
  OPENING_HOURS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./site";

export type BreadcrumbItem = { name: string; href: string };

export function hairSalonJsonLd(pageUrl: string = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: SITE_NAME,
    url: pageUrl,
    telephone: NAP.telephone,
    email: NAP.email,
    image: `${SITE_URL}/hero2.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [NAP.instagram, NAP.facebook],
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "HairSalon",
      name: SITE_NAME,
      telephone: NAP.telephone,
      email: NAP.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.streetAddress,
        addressLocality: NAP.addressLocality,
        postalCode: NAP.postalCode,
        addressCountry: NAP.addressCountry,
      },
    },
    areaServed: [
      { "@type": "City", name: "Merelbeke" },
      { "@type": "City", name: "Gent" },
      { "@type": "Country", name: "België" },
    ],
    ...(opts.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: opts.price,
            url: opts.url,
          },
        }
      : {}),
  };
}

export function faqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}
