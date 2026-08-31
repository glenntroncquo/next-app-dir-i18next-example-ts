import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS, absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PATHS.map((path) => ({
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
