import { ROUTES } from "./site";

export const KERATIN_FAQS = [
  {
    question: "Waar kan ik een keratinebehandeling laten doen in Merelbeke?",
    answer:
      "Bij D'Ana Hair, Hundelgemsesteenweg 73 in 9820 Merelbeke-Melle. Daniela en Ana Paula zijn keratinespecialisten. Je maakt een afspraak online of telefonisch op +32 477 37 10 71.",
  },
  {
    question:
      "Kan ik vanuit Gent bij jullie terecht voor een keratinebehandeling?",
    answer:
      "Ja. De salon ligt in Merelbeke-Melle, ongeveer 15 minuten van Gent. We hebben geen vestiging in Gent zelf: je komt naar Hundelgemsesteenweg 73. Parkeren kan voor de deur.",
  },
  {
    question: "Waar in België doen jullie keratinebehandelingen?",
    answer:
      "Alleen in onze salon in Merelbeke-Melle (Oost-Vlaanderen). Klanten komen uit Gent, Melle, Merelbeke en omgeving. We openen geen extra adressen om lokaal te scoren.",
  },
  {
    question: "Hoe lang duurt een keratinebehandeling?",
    answer:
      "Reken op 2 tot 3 uur, afhankelijk van lengte en dikte. Na een korte analyse volgt wassen, applicatie, hitte-afsluiting en föhnen.",
  },
  {
    question: "Hoe lang houdt een keratinebehandeling?",
    answer:
      "Typisch 3 tot 6 maanden, afhankelijk van haartype, levensstijl en nazorg. Fijn haar houdt vaak 3–4 maanden; grover of krullend haar vaak 5–6 maanden.",
  },
  {
    question: "Hoe verzorg ik mijn haar na een keratinebehandeling?",
    answer:
      "Was de eerste 72 uur niet. Daarna: sulfaatvrije shampoo, lauw of koud water, regelmatig een voedend masker, föhnen op middelhoge stand en hittebescherming. Vermijd de eerste drie dagen ook intensief zweten.",
  },
  {
    question: "Is keratine veilig voor gekleurd haar?",
    answer:
      "Ja. Onze Braziliaanse keratine is geschikt voor gekleurd, gehighlight en chemisch behandeld haar. Het kan kleur helpen afsluiten en glans behouden. Recent gebleekt haar (binnen twee weken) wachten we liever even af.",
  },
  {
    question: "Werkt keratine op krullend of afro haar?",
    answer:
      "Ja. Keratine werkt op krullend, golvend en afro-textuur. Het is geen permanente relaxer: de schubben worden gladgestreken, pluis vermindert en het haar wordt beter handelbaar, met behoud van beweging. Tijdens de consultatie bekijken we jouw textuur.",
  },
] as const;

export const KERATIN_COPY = {
  seoTitle: "Keratinebehandeling Merelbeke",
  seoDescription:
    "Braziliaanse keratinebehandeling bij D'Ana Hair in Merelbeke-Melle. Glad, pluisvrij haar dat 3–6 maanden houdt. Salon op 15 minuten van Gent. Vanaf €150.",
  heroTitle: "Braziliaanse keratinebehandeling",
  heroSubtitle: "Glad, pluisvrij haar bij D'Ana Hair in Merelbeke",
  intro:
    "Bij D'Ana Hair in Merelbeke-Melle doen Daniela en Ana Paula Braziliaanse keratinebehandelingen met Nuance Brazil. Minder pluis, kortere stijltijd, zijdezacht haar dat maanden meegaat.",
  whatIs:
    "Keratine is een eiwit dat het grootste deel van je haarstructuur vormt. Onze behandeling vult beschadigde schubben aan, sluit de haarschacht af en vermindert pluis, met extra glans.",
  howItWorks:
    "De formule vult poreuze delen van de haarstreng. Er ontstaat een beschermende laag die pluis dempt, krullen verzacht en een gladde, glanzende afwerking geeft — zonder permanente relaxer.",
  localNote: `De salon ligt aan de Hundelgemsesteenweg 73 in Merelbeke-Melle, niet in Gent. Vanuit Gent is het ongeveer 15 minuten. Meer over de locatie: ${ROUTES.keratineMerelbeke} en ${ROUTES.keratineGent}.`,
} as const;
