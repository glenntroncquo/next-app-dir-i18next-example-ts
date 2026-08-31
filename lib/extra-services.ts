import { ROUTES } from "./site";

export type ExtraService = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroSubtitle: string;
  intro: string;
  whatIs: string;
  howItWorks: string;
  priceNote: string;
  duration?: string;
  image: string;
  benefits: Array<{ title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const EXTRA_SERVICES: ExtraService[] = [
  {
    slug: "kleuren",
    path: ROUTES.kleuren,
    title: "Haarkleuren",
    seoTitle: "Haarkleuren Merelbeke",
    seoDescription:
      "Haarkleuren bij D'Ana Hair in Merelbeke-Melle. Persoonlijk advies, ook in combinatie met keratine. Prijs op aanvraag.",
    heroSubtitle: "Kleur die bij jouw haar en huid past",
    intro:
      "Kleuren doen we met aandacht voor de gezondheid van je haar. Daniela en Ana Paula kijken naar je huidige kleur, gewenste resultaat en of je recent een keratine- of botoxbehandeling had — timing is belangrijk.",
    whatIs:
      "Een kleurbehandeling verandert of verfrist de pigmenten in je haar: van een zachte glans tot een volledige kleurverandering. Wij werken met professionele producten en een consultatie vooraf.",
    howItWorks:
      "Na een haaranalyse kiezen we formule en techniek. We beschermen de haarvezel waar nodig en sluiten af met verzorging. Combineer je kleur met keratine? Dan plannen we de volgorde zodat beide behandelingen elkaar niet tegenwerken.",
    priceNote: "Prijs op aanvraag, na een korte consultatie.",
    duration: "Afhankelijk van techniek",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Persoonlijk advies",
        desc: "Geen standaardformule: we kijken naar jouw haar, huid en onderhoud.",
      },
      {
        title: "Haargezondheid eerst",
        desc: "We forceren geen bleek of kleur als je haar dat nu niet aankan.",
      },
      {
        title: "Combineerbaar",
        desc: "We plannen kleur en keratine zo dat het resultaat standhoudt.",
      },
      {
        title: "In Merelbeke",
        desc: "Zelfde salon, zelfde team. Geen aparte kleurstudio.",
      },
    ],
    faqs: [
      {
        question: "Wat kost haarkleuren bij D'Ana Hair?",
        answer:
          "De prijs hangt af van lengte, huidige kleur en techniek. We geven geen vaste prijslijst online: vraag het tijdens je afspraak of via contact. Prijs op aanvraag.",
      },
      {
        question: "Kan ik kleuren combineren met een keratinebehandeling?",
        answer:
          "Ja, maar niet altijd op dezelfde dag. We bekijken de staat van je haar en plannen de volgorde. Vertel het ons bij het boeken.",
      },
    ],
  },
  {
    slug: "balayage",
    path: ROUTES.balayage,
    title: "Balayage",
    seoTitle: "Balayage Merelbeke",
    seoDescription:
      "Balayage bij D'Ana Hair in Merelbeke-Melle. Natuurlijke highlights, op aanvraag. Salon op 15 minuten van Gent.",
    heroSubtitle: "Zachte, natuurlijke lichtpunten",
    intro:
      "Balayage is een vrije, met de hand geplaatste highlighttechniek. Het resultaat groeit zachter uit dan klassieke highlights. Bij D'Ana Hair bekijken we of jouw haar klaar is voor lichting.",
    whatIs:
      "Balayage betekent letterlijk 'vegen': kleur of lichting wordt met de hand aangebracht voor een zongezoet effect, zonder harde lijnen.",
    howItWorks:
      "We bepalen hoeveel contrast je wilt, beschermen de lengtes en werken sectie per sectie. Nazorg: kleurveilige shampoo en UV-bescherming in de zomer.",
    priceNote: "Prijs op aanvraag, na consultatie.",
    duration: "Meestal een langere afspraak",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Zachte uitgroei",
        desc: "Minder zichtbare scheiding dan bij folie-highlights.",
      },
      {
        title: "Op maat",
        desc: "Van subtiel tot duidelijk contrast — jij bepaalt samen met ons.",
      },
      {
        title: "Haarconditie",
        desc: "We licht niet op als de vezel te zwak is; dan eerst herstel.",
      },
      {
        title: "Lokaal",
        desc: "In Merelbeke-Melle, bereikbaar vanuit Gent.",
      },
    ],
    faqs: [
      {
        question: "Wat is het verschil tussen balayage en highlights?",
        answer:
          "Balayage wordt vrijer met de hand geplaatst en groeit zachter uit. Klassieke highlights in folie geven vaak een strakker, gelijkmatiger patroon.",
      },
      {
        question: "Wat kost balayage?",
        answer:
          "Prijs op aanvraag. Lengte, hoeveelheid lichting en of er een toner bijkomt, bepalen de duur en kost.",
      },
    ],
  },
  {
    slug: "knippen",
    path: ROUTES.knippen,
    title: "Knippen",
    seoTitle: "Knippen Merelbeke",
    seoDescription:
      "Knipbeurt bij D'Ana Hair in Merelbeke-Melle. Vorm die bij jouw haar past, ook na keratine. Prijs op aanvraag.",
    heroSubtitle: "Een knip die je haar laat bewegen",
    intro:
      "Een goede knip is de basis. Of je nu keratine hebt of je natuurlijke textuur draagt: we knippen in functie van hoe je haar valt, niet van een trendplaatje alleen.",
    whatIs:
      "Een knipbeurt bij D'Ana Hair start met kijken hoe je haar droog en nat beweegt. Daarna volgen lagen, lengte en contour die bij jouw gezicht en onderhoud passen.",
    howItWorks:
      "Consultatie, wassen indien nodig, knippen en afwerken met föhn of air-dry advies. Na keratine knippen we liever als het haar droog is, zodat de nieuwe val klopt.",
    priceNote: "Prijs op aanvraag.",
    duration: "Afhankelijk van lengte",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Op jouw textuur",
        desc: "Steil na keratine of krullend: de knip volgt het haar.",
      },
      {
        title: "Weinig gedoe",
        desc: "We mikken op een vorm die je thuis kunt herhalen.",
      },
      {
        title: "Team dat je kent",
        desc: "Daniela en Ana Paula, dezelfde salon als je keratine.",
      },
      {
        title: "Merelbeke",
        desc: "Hundelgemsesteenweg 73, 9820 Merelbeke-Melle.",
      },
    ],
    faqs: [
      {
        question: "Moet ik knippen vóór of ná keratine?",
        answer:
          "Vaak knippen we na de behandeling, als het haar zijn nieuwe val heeft. Soms is een lichte puntjesknip ervoor beter. We zeggen het eerlijk tijdens de consultatie.",
      },
      {
        question: "Wat kost een knipbeurt?",
        answer: "Prijs op aanvraag. Vraag het bij het boeken of in de salon.",
      },
    ],
  },
  {
    slug: "brushing",
    path: ROUTES.brushing,
    title: "Brushing",
    seoTitle: "Brushing Merelbeke",
    seoDescription:
      "Föhnen en brushing bij D'Ana Hair in Merelbeke. Glad of met volume, prijs op aanvraag.",
    heroSubtitle: "Föhnen tot het haar ligt zoals jij wilt",
    intro:
      "Een brushing is meer dan snel droog föhnen. We werken met spanning, richting en hittebescherming — handig voor een gelegenheid of als onderhoud tussen keratinebeurten.",
    whatIs:
      "Brushing is professioneel föhnen met borstel: glad, met slag, of extra volume aan de wortels. Het resultaat houdt meestal tot de volgende wasbeurt.",
    howItWorks:
      "Wassen, conditioneren, hittebescherming, föhnen in secties. Heb je keratine? Dan respecteren we de nazorg (geen te heet water, juiste producten).",
    priceNote: "Prijs op aanvraag.",
    duration: "Meestal 45–90 minuten",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Direct resultaat",
        desc: "Je gaat de salon uit met haar dat klaar is voor de dag of avond.",
      },
      {
        title: "Techniek",
        desc: "Spanning en richting bepalen of het glad of vol wordt.",
      },
      {
        title: "Na keratine",
        desc: "We föhnen zonder de behandeling te forceren met te hoge hitte.",
      },
      {
        title: "Gelegenheid",
        desc: "Combineerbaar met een opsteekkapsel of knip.",
      },
    ],
    faqs: [
      {
        question: "Hoe lang houdt een brushing?",
        answer:
          "Tot je haar opnieuw wast, of eerder bij vochtig weer als je geen keratine hebt. Met keratine blijft föhnen meestal langer 'liggen'.",
      },
      {
        question: "Wat kost een brushing?",
        answer: "Prijs op aanvraag, afhankelijk van lengte en dikte.",
      },
    ],
  },
  {
    slug: "extensions",
    path: ROUTES.extensions,
    title: "Extensions",
    seoTitle: "Haar extensions Merelbeke",
    seoDescription:
      "Haarverlenging bij D'Ana Hair in Merelbeke-Melle. Consultatie verplicht. Prijs op aanvraag.",
    heroSubtitle: "Lengte of volume, alleen als je haar het aankan",
    intro:
      "Extensions zijn geen impulsproduct. We bekijken eerst of jouw haar en hoofdhuid een plaatsing aankunnen, welke methode past, en hoe je ze onderhoudt. Geen oneerlijke 'voor altijd'-beloftes.",
    whatIs:
      "Extensions zijn extra haarstrengen die lengte of volume toevoegen. Methode (tape, keratin bond, weft, …) hangt af van jouw haar. Wij starten altijd met een consultatie.",
    howItWorks:
      "Consultatie, keuze van methode en kleur, plaatsing, en duidelijke onderhoudsafspraken. Niet elke haarstructuur is geschikt; we zeggen nee als het risico op breuk te hoog is.",
    priceNote: "Prijs op aanvraag na consultatie. Geen vaste online prijs.",
    duration: "Consultatie + plaatsing op aparte momenten",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Eerlijk advies",
        desc: "Als extensions jouw haar zouden beschadigen, raden we het af.",
      },
      {
        title: "Onderhoud telt",
        desc: "Zonder regelmatige verplaatsing en milde verzorging houden ze niet.",
      },
      {
        title: "Kleurmatch",
        desc: "We matchen aan jouw huidige kleur, eventueel na een kleurafsprak.",
      },
      {
        title: "In de salon",
        desc: "Plaatsing in Merelbeke-Melle, niet via een webshop.",
      },
    ],
    faqs: [
      {
        question: "Kan iedereen extensions dragen?",
        answer:
          "Nee. Fijn, breekbaar of sterk uitvallend haar is vaak geen kandidaat. Dat zeggen we liever vooraf dan na schade.",
      },
      {
        question: "Wat kosten extensions?",
        answer:
          "Prijs op aanvraag: methode, gram haar en onderhoud bepalen de kost. We geven geen bedrag zonder consultatie.",
      },
    ],
  },
  {
    slug: "opsteekkapsel",
    path: ROUTES.opsteekkapsel,
    title: "Opsteekkapsel",
    seoTitle: "Opsteekkapsel Merelbeke",
    seoDescription:
      "Opsteekkapsel voor bruiloft of feest bij D'Ana Hair in Merelbeke. Probeersessie mogelijk. Prijs op aanvraag.",
    heroSubtitle: "Voor een bruiloft, feest of fotoshoot",
    intro:
      "Een opsteekkapsel moet blijven zitten en bij jouw gezicht passen. We werken met jouw textuur — ook als je keratine hebt en het haar gladder valt dan vroeger.",
    whatIs:
      "Een opsteekkapsel is een geplaatste, vastgezette stijl: laag, hoog, half-opgestoken of met losse slagen. Bruiloften, gala's en communies horen daarbij.",
    howItWorks:
      "Bij voorkeur een probeersessie. Op de dag zelf: wassen of droge basis, zetten, spelden, finishing. Neem referentiefoto's mee, maar reken op een vertaling naar jóuw haar.",
    priceNote: "Prijs op aanvraag. Probeersessie apart te boeken.",
    duration: "Probeersessie + dag zelf",
    image: "/hero2.jpg",
    benefits: [
      {
        title: "Probeersessie",
        desc: "Liever testen dan improviseren op de grote dag.",
      },
      {
        title: "Jouw haar",
        desc: "We forceren geen Pinterest-kapsel dat jouw lengte niet aankan.",
      },
      {
        title: "Make-up niet inbegrepen",
        desc: "We focussen op haar. Vraag ons wat wel en niet kan.",
      },
      {
        title: "Locatie",
        desc: "In de salon in Merelbeke-Melle, op afspraak.",
      },
    ],
    faqs: [
      {
        question: "Moet ik een probeersessie doen?",
        answer:
          "Voor een bruiloft raden we het sterk aan. Zo weten we timing, product en of er extra lengte of volume nodig is.",
      },
      {
        question: "Wat kost een opsteekkapsel?",
        answer:
          "Prijs op aanvraag, afhankelijk van complexiteit en of er een probeersessie bijhoort.",
      },
    ],
  },
];

export function extraServiceBySlug(slug: string): ExtraService | undefined {
  return EXTRA_SERVICES.find((s) => s.slug === slug);
}
