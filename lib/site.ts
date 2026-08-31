export const SITE_URL = "https://danahair.be";
export const SITE_NAME = "D'Ana Hair";
export const HTML_LANG = "nl-BE";
export const OG_LOCALE = "nl_BE";

export const NAP = {
  name: SITE_NAME,
  streetAddress: "Hundelgemsesteenweg 73",
  addressLocality: "Merelbeke-Melle",
  postalCode: "9820",
  addressCountry: "BE",
  telephone: "+32 477 37 10 71",
  telephoneHref: "+32477371071",
  email: "info.danahair@gmail.com",
  vat: "BE1021.422.173",
  geo: {
    latitude: 51.01490464198777,
    longitude: 3.7532758684587,
  },
  mapsUrl: "https://maps.google.com/maps?q=51.01490464198777,3.7532758684587",
  mapsEmbed:
    "https://maps.google.com/maps?q=51.01490464198777,3.7532758684587&hl=nl&z=15&output=embed",
  instagram: "https://www.instagram.com/dana.hair.official/",
  facebook: "https://www.facebook.com/profile.php?id=61573622190842",
} as const;

/** Opening hours as shown on the homepage contact UI. Closed days are omitted from JSON-LD. */
export const OPENING_HOURS = [
  { dayOfWeek: "Wednesday", opens: "13:30", closes: "21:00", labelNl: "Woensdag" },
  { dayOfWeek: "Thursday", opens: "17:00", closes: "21:00", labelNl: "Donderdag" },
  { dayOfWeek: "Friday", opens: "09:00", closes: "18:00", labelNl: "Vrijdag" },
  { dayOfWeek: "Saturday", opens: "09:00", closes: "16:00", labelNl: "Zaterdag" },
] as const;

export const CLOSED_DAYS = [
  { labelNl: "Maandag" },
  { labelNl: "Dinsdag" },
  { labelNl: "Zondag" },
] as const;

export const WEEKDAY_HOURS = [
  { labelNl: "Maandag", display: "Gesloten" },
  { labelNl: "Dinsdag", display: "Gesloten" },
  { labelNl: "Woensdag", display: "13:30 - 21:00" },
  { labelNl: "Donderdag", display: "17:00 - 21:00" },
  { labelNl: "Vrijdag", display: "09:00 - 18:00" },
  { labelNl: "Zaterdag", display: "09:00 - 16:00" },
  { labelNl: "Zondag", display: "Gesloten" },
] as const;

export const ROUTES = {
  home: "/",
  diensten: "/diensten",
  keratine: "/diensten/keratine-behandeling",
  haarbotox: "/diensten/haarbotox",
  ritual: "/diensten/ritual-nutrition",
  kleuren: "/diensten/kleuren",
  balayage: "/diensten/balayage",
  knippen: "/diensten/knippen",
  brushing: "/diensten/brushing",
  extensions: "/diensten/extensions",
  opsteekkapsel: "/diensten/opsteekkapsel",
  overOns: "/over-ons",
  contact: "/contact",
  afspraak: "/afspraak",
  keratineMerelbeke: "/keratine-behandeling-merelbeke",
  keratineGent: "/keratine-behandeling-gent",
  privacy: "/privacy",
  cookies: "/cookiebeleid",
  voorwaarden: "/voorwaarden",
} as const;

export const INDEXABLE_PATHS = [
  ROUTES.home,
  ROUTES.diensten,
  ROUTES.keratine,
  ROUTES.haarbotox,
  ROUTES.ritual,
  ROUTES.kleuren,
  ROUTES.balayage,
  ROUTES.knippen,
  ROUTES.brushing,
  ROUTES.extensions,
  ROUTES.opsteekkapsel,
  ROUTES.overOns,
  ROUTES.contact,
  ROUTES.afspraak,
  ROUTES.keratineMerelbeke,
  ROUTES.keratineGent,
  ROUTES.privacy,
  ROUTES.cookies,
  ROUTES.voorwaarden,
] as const;

export function absoluteUrl(path: string = "/"): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function fullAddress(): string {
  return `${NAP.streetAddress}, ${NAP.postalCode} ${NAP.addressLocality}`;
}
