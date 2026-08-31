export const OLD_LOCALES = ["nl", "en", "fr", "pt"] as const;

export const GONE_PATHS = ["/gent", "/merelbeke", "/oudenaarde"] as const;

/** Old paths → one-hop Dutch destination (no locale prefix). */
export const PATH_ALIASES: Record<string, string> = {
  "/booking": "/afspraak",
  "/appointment": "/afspraak",
  "/services": "/diensten",
  "/services/keratine": "/diensten/keratine-behandeling",
  "/services/botox": "/diensten/haarbotox",
  "/services/haarbotox": "/diensten/haarbotox",
  "/services/ritual-led": "/diensten/ritual-nutrition",
  "/services/ritual": "/diensten/ritual-nutrition",
  "/services/kleuren": "/diensten/kleuren",
  "/services/balayage": "/diensten/balayage",
  "/services/knippen": "/diensten/knippen",
  "/services/brushing": "/diensten/brushing",
  "/services/extensions": "/diensten/extensions",
  "/services/opsteekkapsel": "/diensten/opsteekkapsel",
  "/about": "/over-ons",
  "/wie-is-wie": "/over-ons",
  "/privacy-policy": "/privacy",
  "/privacybeleid": "/privacy",
  "/cookie-policy": "/cookiebeleid",
  "/terms": "/voorwaarden",
  "/terms-of-service": "/voorwaarden",
};

export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const noHash = pathname.split("#")[0] || "/";
  if (noHash.length > 1 && noHash.endsWith("/")) {
    return noHash.slice(0, -1);
  }
  return noHash || "/";
}

function isOldLocale(segment: string): boolean {
  return (OLD_LOCALES as readonly string[]).includes(segment);
}

function stripLocale(pathname: string): { locale: string | null; rest: string } {
  const path = normalizePath(pathname);
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) {
    return { locale: null, rest: "/" };
  }
  if (isOldLocale(segments[0])) {
    const rest = segments.length === 1 ? "/" : `/${segments.slice(1).join("/")}`;
    return { locale: segments[0], rest };
  }
  return { locale: null, rest: path };
}

function isGonePath(path: string): boolean {
  const normalized = normalizePath(path);
  return GONE_PATHS.some(
    (gone) => normalized === gone || normalized.startsWith(`${gone}/`),
  );
}

export type RedirectDecision =
  | { type: "gone" }
  | { type: "redirect"; destination: string }
  | { type: "next" };

/**
 * Resolve an incoming pathname to 410, a 301 destination, or pass-through.
 * Locale prefixes are stripped in one hop onto the Dutch URL.
 */
export function resolvePath(pathname: string): RedirectDecision {
  const { locale, rest } = stripLocale(pathname);

  if (isGonePath(rest)) {
    return { type: "gone" };
  }

  const aliased = PATH_ALIASES[rest];
  const destination = aliased ?? rest;

  if (locale) {
    return { type: "redirect", destination };
  }

  if (aliased && aliased !== rest) {
    return { type: "redirect", destination: aliased };
  }

  return { type: "next" };
}

export function nextConfigRedirects(): Array<{
  source: string;
  destination: string;
  permanent: boolean;
}> {
  const redirects: Array<{
    source: string;
    destination: string;
    permanent: boolean;
  }> = [];

  for (const [from, to] of Object.entries(PATH_ALIASES)) {
    redirects.push({ source: from, destination: to, permanent: true });
    for (const lng of OLD_LOCALES) {
      redirects.push({
        source: `/${lng}${from}`,
        destination: to,
        permanent: true,
      });
    }
  }

  for (const lng of OLD_LOCALES) {
    redirects.push({
      source: `/${lng}`,
      destination: "/",
      permanent: true,
    });
  }

  return redirects;
}
