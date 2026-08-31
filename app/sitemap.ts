import type { MetadataRoute } from "next";
import { servicePaths } from "../lib/content/services";
import { ROUTES, absoluteUrl } from "../lib/site";

const OTHER_PATHS = [
  ROUTES.home,
  ROUTES.diensten,
  ROUTES.overOns,
  ROUTES.contact,
  ROUTES.afspraak,
  ROUTES.keratineMerelbeke,
  ROUTES.keratineGent,
  ROUTES.privacy,
  ROUTES.cookies,
  ROUTES.voorwaarden,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...OTHER_PATHS, ...servicePaths()];
  const unique = Array.from(new Set(paths));

  return unique.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.includes("keratine")
          ? 0.9
          : path === "/diensten" || path === "/afspraak"
            ? 0.85
            : 0.7,
  }));
}
