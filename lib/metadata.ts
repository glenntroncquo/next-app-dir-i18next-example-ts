import type { Metadata } from "next";
import { OG_LOCALE, SITE_NAME, SITE_URL, absoluteUrl } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/hero2.jpg",
  imageAlt = "D'Ana Hair salon in Merelbeke",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const fullTitle = title.includes("D'Ana Hair")
    ? title
    : `${title} | D'Ana Hair`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
