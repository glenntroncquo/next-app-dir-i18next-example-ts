import { ROUTES } from "../site";
import type { ServiceContent, ServiceFaq } from "./types";

export const KERATIN_FAQS: ServiceFaq[] = [
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
];

const SERVICES_DATA: ServiceContent[] = [
  {
    slug: "keratine-behandeling",
    path: ROUTES.keratine,
    title: "Braziliaanse keratinebehandeling",
    hubTitle: "Keratine",
    hubBlurb: "Glad, pluisvrij haar dat maanden meegaat. Onze specialiteit.",
    eyebrow: "Specialiteit van het huis",
    seoTitle: "Keratinebehandeling Merelbeke",
    seoDescription:
      "Braziliaanse keratinebehandeling bij D'Ana Hair in Merelbeke-Melle. Glad, pluisvrij haar dat 3–6 maanden houdt. Salon op 15 minuten van Gent. Vanaf €150.",
    keywords:
      "keratinebehandeling Merelbeke, Braziliaanse keratine, keratine Gent, pluisvrij haar, D'Ana Hair",
    intro:
      "Daniela en Ana Paula werken met Nuance Brazil: een keratineformule die pluis dempt en de vezel sluit, zonder het haar tot een rechte plank te forceren. In Merelbeke-Melle, niet in een ketenstoel in de stad.",
    whatIs:
      "Keratine is het eiwit waaruit je haar grotendeels bestaat. Bij een behandeling vullen we poreuze, beschadigde schubben aan en sluiten we de haarschacht af. Het resultaat is minder pluis, meer glans en een kortere ochtendroutine — geen permanente relaxer.",
    howItWorks:
      "De formule trekt in de vezel. Onder gecontroleerde hitte ontstaat een beschermende laag die krul verzacht en pluis tot rust brengt. Hoe grof of krullend het haar, hoe zichtbaarder het verschil; fijn haar krijgt vooral soepelheid en glans.",
    process: [
      {
        title: "Analyse",
        body: "We kijken naar textuur, porositeit, recente kleur of bleek, en wat jij thuis nog wilt kunnen doen.",
      },
      {
        title: "Wassen en applicatie",
        body: "Grondig reinigen, daarna de formule sectie per sectie. Geen haastwerk: de inwerktijd volgt jouw haar, niet de klok alleen.",
      },
      {
        title: "Hitte en afwerking",
        body: "Afsluiten met de stijltang op een temperatuur die bij de formule past, daarna föhnen tot het haar ligt.",
      },
    ],
    priceLabel: "Vanaf €150",
    priceFrom: "150",
    duration: "2–3 uur",
    holds: "3–6 maanden",
    image: "/keratine.webp",
    imageAlt:
      "Keratinebehandeling bij D'Ana Hair in Merelbeke: van pluis naar glad",
    media: "image",
    hubLayout: "featured",
    benefits: [
      {
        title: "Pluis dat blijft liggen",
        desc: "Niet omdat we het haar doodstrijken, maar omdat de schubben sluiten.",
      },
      {
        title: "Kortere styling",
        desc: "Föhnen gaat sneller. De stijltang wordt een afronding, geen gevecht.",
      },
      {
        title: "Houdt maanden",
        desc: "Drie tot zes maanden, afhankelijk van textuur, wasfrequentie en producten.",
      },
      {
        title: "Gekleurd en krullend haar",
        desc: "Geschikt voor kleur, highlights en afro-textuur — mits de vezel het aankan.",
      },
    ],
    aftercare: [
      "De eerste 72 uur niet wassen, geen strakke elastiekjes, geen intensief zweten.",
      "Daarna sulfaatvrije shampoo en lauw of koud water.",
      "Regelmatig een voedend masker; föhnen op middelhoge stand met hittebescherming.",
    ],
    faqs: [...KERATIN_FAQS],
    includeFaqSchema: true,
    showLocalLinks: true,
  },
  {
    slug: "haarbotox",
    path: ROUTES.haarbotox,
    title: "Haarbotox",
    hubTitle: "Haarbotox",
    hubBlurb: "Diepe conditionering voor vezel die glans en soepelheid mist.",
    eyebrow: "Herstel",
    seoTitle: "Haarbotox Merelbeke",
    seoDescription:
      "Haarbotox bij D'Ana Hair in Merelbeke-Melle. Herstel beschadigd haar, minder pluis, meer glans. Vanaf €150. Salon op 15 minuten van Gent.",
    intro:
      "Haarbotox is geen injectie en bevat geen botulinumtoxine. Het is een eiwitkuur: we vullen de vezel, dempen pluis licht en brengen beweging terug — met meer textuurbehoud dan bij keratine.",
    whatIs:
      "Een mix van eiwitten, vitamines en oliën trekt in beschadigde, poreuze delen van de haarschub. Het haar voelt voller, glanst meer en breekt minder snel, zonder de val van een keratinebehandeling.",
    howItWorks:
      "Na analyse wassen we, brengen we de kuur aan en werken we af met hitte die de voeding sluit. Wie twijfelt tussen botox en keratine: botox is herstel; keratine is langere pluiscontrole. We zeggen het eerlijk als één van beide niet past.",
    process: [
      {
        title: "Conditie lezen",
        body: "Bleek, zon, chloor, te veel hitte: we kijken wat de vezel nog verdraagt.",
      },
      {
        title: "Infusie",
        body: "De kuur blijft inwerken tot de schubben verzadigd zijn, niet tot de timer piept.",
      },
      {
        title: "Sluiten",
        body: "Lichte hitte en föhnen. Je gaat weg met haar dat beweegt, niet met een helm.",
      },
    ],
    priceLabel: "Vanaf €150",
    priceFrom: "150",
    duration: "2–3 uur",
    holds: "2–4 maanden",
    image: "/botox.mp4",
    imageAlt: "Haarbotoxbehandeling bij D'Ana Hair in Merelbeke",
    media: "video",
    hubLayout: "standard",
    benefits: [
      {
        title: "Vezel vullen",
        desc: "Poreuze lengtes krijgen massa terug in plaats van alleen een coating.",
      },
      {
        title: "Minder pluis, meer beweging",
        desc: "Gladder dan onbehandeld haar, soepeler dan na keratine.",
      },
      {
        title: "Glans",
        desc: "De schub sluit; licht kaatst weer in plaats van te diffunderen.",
      },
      {
        title: "Gekleurd haar",
        desc: "Veilig op kleur. Recent gebleekt haar wachten we twee weken af.",
      },
    ],
    aftercare: [
      "Wacht 24–48 uur voor de eerste wasbeurt.",
      "Sulfaatvrije shampoo en conditioner.",
      "Wekelijks een diepe conditioner.",
      "Hittebescherming bij föhnen.",
    ],
    faqs: [
      {
        question: "Hoe lang houdt haarbotox?",
        answer:
          "Meestal 2 tot 4 maanden, afhankelijk van haartype en nazorg. Het is geen permanente steiling.",
      },
      {
        question: "Is haarbotox hetzelfde als keratine?",
        answer:
          "Nee. Keratine gladstrijkt en dempt pluis langer. Botox is een diepe conditionering: herstel, glans en soepelheid, met behoud van meer beweging.",
      },
      {
        question: "Wat kost haarbotox?",
        answer:
          "Vanaf €150, afhankelijk van lengte en conditie. Exacte prijs tijdens de consultatie.",
      },
      {
        question: "Is het veilig voor gekleurd haar?",
        answer:
          "Ja. Haarbotox bevat geen botulinumtoxine. Het is een mix van eiwitten, vitamines en oliën. Recent gebleekt haar wachten we twee weken af.",
      },
    ],
    includeFaqSchema: false,
  },
  {
    slug: "ritual-nutrition",
    path: ROUTES.ritual,
    title: "Ritual Nutrition + LED",
    hubTitle: "Ritual Nutrition",
    hubBlurb: "Braziliaanse voeding en LED voor haar dat moe is, niet pluizig.",
    eyebrow: "Voeding",
    seoTitle: "Ritual Nutrition + LED Merelbeke",
    seoDescription:
      "Ritual Nutrition met Nuance Brazil en LED-lichttherapie bij D'Ana Hair in Merelbeke. Diepe voeding, vanaf €60.",
    intro:
      "Soms heeft haar geen steiling nodig, maar voeding. Ritual Nutrition van Nuance Brazil infuseert de vezel; LED ondersteunt de hoofdhuid. Dezelfde salon als je keratine, een ander ritueel.",
    whatIs:
      "Een nutritionbehandeling brengt voedingsstoffen in haar dat droog, dof of overbelast is. LED is niet-invasief licht op de hoofdhuid: circulatie en opname, geen medische belofte tegen haaruitval.",
    howItWorks:
      "We wassen, brengen de ritual aan en sluiten af onder LED. Geen permanente verandering van de val. Onderhoud om de vier tot zes weken houdt de conditie bij, vooral tussen keratinebeurten.",
    priceLabel: "Vanaf €60",
    priceFrom: "60",
    duration: "2–2,5 uur",
    holds: "4–6 weken",
    image: "/led.jpg",
    imageAlt: "Ritual Nutrition en LED-therapie bij D'Ana Hair",
    media: "image",
    hubLayout: "standard",
    benefits: [
      {
        title: "Diepe voeding",
        desc: "Voor haar dat bros aanvoelt na zon, chloor of te veel styling.",
      },
      {
        title: "LED als steun",
        desc: "Lichttherapie ter ondersteuning van de hoofdhuid, niet als kuur tegen alopecia.",
      },
      {
        title: "Tussen keratine",
        desc: "Houdt de vezel soepel zonder een nieuwe steiling te zetten.",
      },
      {
        title: "Alle texturen",
        desc: "Geschikt ongeacht kleur; open wonden op de hoofdhuid zijn een reden om te wachten.",
      },
    ],
    aftercare: [
      "Wacht 24 uur voor de eerste wasbeurt.",
      "Gebruik de aangeraden producten.",
      "Bescherm tegen overmatige hitte.",
      "Plan onderhoud om de 4–6 weken.",
    ],
    faqs: [
      {
        question: "Hoe vaak Ritual Nutrition?",
        answer:
          "Meestal elke 4 tot 6 weken, afhankelijk van haar- en hoofdhuidconditie.",
      },
      {
        question: "Is LED-therapie veilig?",
        answer:
          "Ja. LED is niet-invasief en geschikt voor alle haarkleuren. Open wonden op de hoofdhuid zijn een reden om te wachten.",
      },
      {
        question: "Wat kost Ritual Nutrition?",
        answer:
          "Vanaf €60, afhankelijk van lengte en of we extra tijd nemen voor LED.",
      },
      {
        question: "Helpt dit bij haaruitval?",
        answer:
          "LED kan circulatie en follikelconditie ondersteunen. Het is geen medische behandeling tegen alopecia; we beloven geen genezing.",
      },
    ],
    includeFaqSchema: false,
  },
  {
    slug: "kleuren",
    path: ROUTES.kleuren,
    title: "Haarkleuren",
    hubTitle: "Kleuren",
    hubBlurb: "Kleur die de vezel respecteert, ook naast keratine.",
    eyebrow: "Kleur",
    seoTitle: "Haarkleuren Merelbeke",
    seoDescription:
      "Haarkleuren bij D'Ana Hair in Merelbeke-Melle. Persoonlijk advies, ook in combinatie met keratine. Prijs op aanvraag.",
    intro:
      "Kleuren doen we met dezelfde aandacht als keratine: eerst de vezel, dan de formule. Daniela en Ana Paula kijken naar huid, huidige pigment en of er recent een behandeling zat — de volgorde is geen detail.",
    whatIs:
      "Van een glansspoeling tot een volledige kleurverandering. We werken met professionele producten en een consultatie vooraf. Geen standaardformule van de kaart.",
    howItWorks:
      "Haaranalyse, formule, applicatie, verzorgende afsluiter. Combineer je kleur met keratine, dan plannen we de dagen zo dat beide standhouden in plaats van elkaar uit te wassen.",
    priceLabel: "Op aanvraag",
    duration: "Afhankelijk van techniek",
    image: "/story1.jpg",
    imageAlt: "Haarkleuren bij D'Ana Hair in Merelbeke",
    media: "image",
    hubLayout: "standard",
    benefits: [
      {
        title: "Advies op jouw haar",
        desc: "Huidondertoon, uitgroei en onderhoud bepalen de formule, niet een trendkleur alleen.",
      },
      {
        title: "Vezel eerst",
        desc: "We forceren geen bleek of modekleur als het haar dat nu niet aankan.",
      },
      {
        title: "Naast keratine",
        desc: "Timing van kleur en keratine spreken we af, zodat geen van beide verliest.",
      },
      {
        title: "Zelfde salon",
        desc: "Geen aparte kleurstudio. Hundelgemsesteenweg 73, Merelbeke-Melle.",
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
    includeFaqSchema: false,
  },
  {
    slug: "balayage",
    path: ROUTES.balayage,
    title: "Balayage",
    hubTitle: "Balayage",
    hubBlurb: "Handgeplaatste lichtpunten die zacht uitgroeien.",
    eyebrow: "Lichting",
    seoTitle: "Balayage Merelbeke",
    seoDescription:
      "Balayage bij D'Ana Hair in Merelbeke-Melle. Natuurlijke highlights, op aanvraag. Salon op 15 minuten van Gent.",
    intro:
      "Balayage is vegen, geen folieraster. We plaatsen lichting met de hand zodat de uitgroei zachter is. Alleen als de vezel lichting verdraagt — anders eerst herstel.",
    whatIs:
      "Een vrije highlighttechniek voor een zongezoet effect, zonder harde lijnen. Contrast kies je zelf: van een sluier tot duidelijk dimensie.",
    howItWorks:
      "Consultatie, bescherming van de lengtes, sectie per sectie vegen, toner indien nodig. Nazorg: kleurveilige shampoo en UV-bescherming in de zomer.",
    priceLabel: "Op aanvraag",
    duration: "Langere afspraak",
    image: "/story5.jpg",
    imageAlt: "Balayage bij D'Ana Hair in Merelbeke",
    media: "image",
    hubLayout: "standard",
    benefits: [
      {
        title: "Zachte uitgroei",
        desc: "Minder zichtbare scheiding dan bij klassieke folie-highlights.",
      },
      {
        title: "Met de hand",
        desc: "Plaatsing volgt jouw haarlijn en scheiding, geen mal.",
      },
      {
        title: "Conditie als grens",
        desc: "Te zwakke vezel? Dan geen lichting. Eerst voeden of wachten.",
      },
      {
        title: "Nabij Gent",
        desc: "In Merelbeke-Melle, bereikbaar zonder een salon in de stad te claimen.",
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
    includeFaqSchema: false,
  },
  {
    slug: "knippen",
    path: ROUTES.knippen,
    title: "Knippen",
    hubTitle: "Knippen",
    hubBlurb: "Een vorm die volgt hoe jouw haar valt — ook na keratine.",
    eyebrow: "Vorm",
    seoTitle: "Knippen Merelbeke",
    seoDescription:
      "Knipbeurt bij D'Ana Hair in Merelbeke-Melle. Vorm die bij jouw haar past, ook na keratine. Prijs op aanvraag.",
    intro:
      "Een knip is geen bijzaak na de behandeling. We kijken hoe het haar droog en nat beweegt, en knippen in functie van die val — steil na keratine of met je eigen textuur.",
    whatIs:
      "Lengte, lagen en contour die bij gezicht en onderhoud passen. Geen trendplaatje dat jouw densiteit niet draagt.",
    howItWorks:
      "Consultatie, wassen indien nodig, knippen, afwerken. Na keratine knippen we liever droog, zodat de nieuwe val klopt. Soms is een lichte puntjesknip vóór de behandeling slimmer; dat zeggen we ter plaatse.",
    priceLabel: "Op aanvraag",
    duration: "Afhankelijk van lengte",
    image: "/story3.jpg",
    imageAlt: "Knipbeurt bij D'Ana Hair in Merelbeke",
    media: "image",
    hubLayout: "standard",
    benefits: [
      {
        title: "Op jouw textuur",
        desc: "Steil, golvend of krullend: de schaar volgt het haar, niet andersom.",
      },
      {
        title: "Thuis herhaalbaar",
        desc: "We mikken op een vorm die je met weinig product overeind houdt.",
      },
      {
        title: "Zelfde team",
        desc: "Wie je keratine zet, knipt ook. Geen wisselende stoel.",
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
    includeFaqSchema: false,
  },
  {
    slug: "brushing",
    path: ROUTES.brushing,
    title: "Brushing",
    hubTitle: "Brushing",
    hubBlurb: "Föhnen met spanning en richting, niet alleen droog.",
    eyebrow: "Afwerking",
    seoTitle: "Brushing Merelbeke",
    seoDescription:
      "Föhnen en brushing bij D'Ana Hair in Merelbeke. Glad of met volume, prijs op aanvraag.",
    intro:
      "Een brushing is spanning, richting en hittebescherming. Voor een gelegenheid, of als onderhoud tussen keratinebeurten wanneer het haar opnieuw moet liggen.",
    whatIs:
      "Professioneel föhnen met borstel: glad, met slag, of extra wortelvolume. Het resultaat houdt tot de volgende wasbeurt — langer als je keratine hebt.",
    howItWorks:
      "Wassen, conditioneren, beschermen, föhnen in secties. Met keratine blijven we van te hoge hitte af, zodat we de behandeling niet opentrekken.",
    priceLabel: "Op aanvraag",
    duration: "45–90 minuten",
    image: "/story2.mp4",
    imageAlt: "Brushing bij D'Ana Hair in Merelbeke",
    media: "video",
    hubLayout: "standard",
    benefits: [
      {
        title: "Klaar de deur uit",
        desc: "Haar dat ligt voor werk, feest of foto — zonder thuis nog te vechten.",
      },
      {
        title: "Techniek",
        desc: "Spanning en richting bepalen of het glad of vol wordt.",
      },
      {
        title: "Na keratine",
        desc: "We föhnen binnen de nazorg, niet ertegenin.",
      },
      {
        title: "Combineerbaar",
        desc: "Met een knip of opsteekkapsel op dezelfde dag, als de timing klopt.",
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
    includeFaqSchema: false,
  },
  {
    slug: "extensions",
    path: ROUTES.extensions,
    title: "Extensions",
    hubTitle: "Extensions",
    hubBlurb: "Lengte of volume, alleen als jouw haar de plaatsing aankan.",
    eyebrow: "Verlenging",
    seoTitle: "Haar extensions Merelbeke",
    seoDescription:
      "Haarverlenging bij D'Ana Hair in Merelbeke-Melle. Consultatie verplicht. Prijs op aanvraag.",
    intro:
      "Extensions zijn geen impuls. We kijken eerst naar densiteit, hoofdhuid en onderhoud — en zeggen nee als breuk het waarschijnlijke einde is. Geen webshopbelofte, wel een consultatie in de salon.",
    whatIs:
      "Extra haar voor lengte of volume. Methode (tape, keratin bond, weft) hangt af van jouw haar. Zonder consultatie plaatsen we niets.",
    howItWorks:
      "Eerst een aparte consultatie: methode, kleurmatch, gram haar, onderhoudskalender. Plaatsing op een tweede moment. Verplaatsing is geen optie; zonder onderhoud houden ze niet.",
    priceLabel: "Op aanvraag",
    duration: "Consultatie + plaatsing",
    image: "/hero2.jpg",
    imageAlt: "Haarconsultatie voor extensions bij D'Ana Hair",
    media: "image",
    hubLayout: "standard",
    benefits: [
      {
        title: "Eerlijk advies",
        desc: "Fijn, breekbaar of sterk uitvallend haar is vaak geen kandidaat. Dat horen we liever vooraf.",
      },
      {
        title: "Onderhoud telt",
        desc: "Zonder verplaatsing en milde verzorging beschadigt plaatsing je eigen haar.",
      },
      {
        title: "Kleurmatch",
        desc: "We matchen aan jouw huidige kleur, eventueel na een kleurafsprak.",
      },
      {
        title: "In de salon",
        desc: "Plaatsing in Merelbeke-Melle. Geen kit via de post.",
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
    includeFaqSchema: false,
  },
  {
    slug: "opsteekkapsel",
    path: ROUTES.opsteekkapsel,
    title: "Opsteekkapsel",
    hubTitle: "Opsteekkapsel",
    hubBlurb: "Geplaatst haar voor een dag die moet blijven zitten.",
    eyebrow: "Gelegenheid",
    seoTitle: "Opsteekkapsel Merelbeke",
    seoDescription:
      "Opsteekkapsel voor bruiloft of feest bij D'Ana Hair in Merelbeke. Probeersessie mogelijk. Prijs op aanvraag.",
    intro:
      "Een opsteekkapsel moet blijven zitten en bij jouw gezicht passen. We werken met jouw textuur — ook als keratine het haar gladder laat vallen dan op de Pinterestfoto.",
    whatIs:
      "Laag, hoog, half-opgestoken of met losse slagen. Bruiloft, gala, communie. Make-up zit er niet bij; haar wel, tot in de speld.",
    howItWorks:
      "Voor een bruiloft een probeersessie. Op de dag: droge of gewassen basis, zetten, spelden, finishing. Referentiefoto's helpen, maar we vertalen naar jóuw lengte en densiteit.",
    priceLabel: "Op aanvraag",
    duration: "Probeersessie + dag zelf",
    image: "/story6.mp4",
    imageAlt: "Opsteekkapsel bij D'Ana Hair in Merelbeke",
    media: "video",
    hubLayout: "standard",
    benefits: [
      {
        title: "Probeersessie",
        desc: "Timing, product en eventuele extra lengte testen we liever vooraf.",
      },
      {
        title: "Jouw haar",
        desc: "Geen kapsel forceren dat jouw lengte of keratineval niet draagt.",
      },
      {
        title: "Haar, geen make-up",
        desc: "We zeggen duidelijk wat wel en niet in de afspraak zit.",
      },
      {
        title: "Op afspraak",
        desc: "In de salon in Merelbeke-Melle. Geen last-minute stoel op de grote dag zonder overleg.",
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
    includeFaqSchema: false,
  },
];

export const SERVICES: readonly ServiceContent[] = SERVICES_DATA;

export const HUB_COPY = {
  eyebrow: "Behandelingen · Merelbeke-Melle",
  title: "Haarwerk, geen menukaart",
  intro:
    "Daniela en Ana Paula lezen eerst de vezel, daarna de wens. Keratine is onze specialiteit; herstel, kleur en vorm zitten in dezelfde salon aan de Hundelgemsesteenweg — niet als aparte beloftes op stadspagina's.",
  seoTitle: "Diensten",
  seoDescription:
    "Keratine, haarbotox, Ritual Nutrition, kleuren, knippen en meer bij D'Ana Hair in Merelbeke-Melle. Specialistisch werk, geen generieke salonkaart.",
} as const;

export function serviceBySlug(slug: string): ServiceContent | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function serviceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

export function servicePaths(): string[] {
  return SERVICES.map((service) => service.path);
}

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
