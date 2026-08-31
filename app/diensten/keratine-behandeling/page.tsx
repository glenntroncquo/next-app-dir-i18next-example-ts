import Link from "next/link";
import {
  ChevronRight,
  Check,
  Star,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqList } from "../../components/FaqList";
import { JsonLd } from "../../components/JsonLd";
import { getImageUrl } from "../../../lib/imageUrl";
import { pageMetadata } from "../../../lib/metadata";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "../../../lib/schema";
import { ROUTES, absoluteUrl } from "../../../lib/site";
import { KERATIN_COPY, KERATIN_FAQS } from "../../../lib/keratin";

export const metadata = pageMetadata({
  title: KERATIN_COPY.seoTitle,
  description: KERATIN_COPY.seoDescription,
  path: ROUTES.keratine,
  keywords:
    "keratinebehandeling Merelbeke, Braziliaanse keratine, keratine Gent, pluisvrij haar, D'Ana Hair",
  image: "/keratine.webp",
  imageAlt: "Keratinebehandeling bij D'Ana Hair in Merelbeke",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Diensten", href: ROUTES.diensten },
  { name: "Keratinebehandeling", href: ROUTES.keratine },
];

const faqs = KERATIN_FAQS.map((f) => ({
  question: f.question,
  answer: f.answer,
}));

export default function KeratinePage() {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Elimineert pluis",
      desc: "Zeg vaarwel tegen pluizend, krullend of golvend haar dat niet wilt liggen.",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Kortere stijltijd",
      desc: "Halveer je dagelijkse stylingroutine met gladder, handelbaar haar.",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Langdurig resultaat",
      desc: "Glad, zijdezacht haar voor 3–6 maanden, afhankelijk van je haartype.",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Natuurlijke glans",
      desc: "Onthult de glans van gezond haar, ook op gekleurd of krullend haar.",
    },
  ];

  const afterCare = [
    "Vermijd te heet water — gebruik lauw of koud water 🚿",
    "Gebruik sulfaatvrije shampoo en conditioner 💆‍♀️",
    "Hydrateer regelmatig met voedende maskers 🗓️",
    "Föhn op middelhoge stand en gebruik hittebescherming 🔥",
  ];

  const costFactors = [
    "Haarlengte en dikte",
    "Haarconditie en beschadigingsniveau",
    "Type keratinebehandeling",
    "Extra diensten inbegrepen",
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Braziliaanse keratinebehandeling",
          description: KERATIN_COPY.seoDescription,
          url: absoluteUrl(ROUTES.keratine),
          price: "150",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar />

        <section className="relative md:pt-32 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-salon-pink/5 via-salon-rose/5 to-salon-lavender/5"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-salon-light-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-salon-lavender/15 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
                    {KERATIN_COPY.heroTitle}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-salon-pink mb-8 font-medium leading-relaxed">
                    {KERATIN_COPY.heroSubtitle}
                  </h2>
                </div>

                <p className="text-xl text-salon-text-dark leading-relaxed max-w-2xl">
                  {KERATIN_COPY.intro}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      €150
                    </div>
                    <div className="text-sm text-salon-text-medium">Vanaf</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      2–3 uur
                    </div>
                    <div className="text-sm text-salon-text-medium">Duur</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50 col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      3–6 mnd
                    </div>
                    <div className="text-sm text-salon-text-medium">
                      Houdt tot
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={getImageUrl("/keratine.webp")}
                alt="Keratinebehandeling bij D'Ana Hair in Merelbeke: van pluis naar glad"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl text-center md:text-5xl font-display font-bold text-salon-text-dark mb-8">
              Wat is een keratinebehandeling?
            </h2>
            <p className="text-lg text-salon-text-dark leading-relaxed text-center max-w-3xl mx-auto mb-8">
              {KERATIN_COPY.whatIs}
            </p>
            <div className="bg-salon-off-white rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold text-salon-pink mb-4">
                Hoe het werkt
              </h3>
              <p className="text-salon-text-dark leading-relaxed">
                {KERATIN_COPY.howItWorks}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                Prijzen
              </h2>
              <div className="text-6xl font-bold text-salon-pink mb-4">
                €150 - €300
              </div>
              <p className="text-xl text-salon-text-dark">
                Vanaf €150 tot €300, afhankelijk van lengte, dikte en conditie.
                Kort maar heel dik haar kan duurder zijn dan lang maar dun haar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-6 text-center">
                Wat beïnvloedt de kosten?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((factor) => (
                  <div key={factor} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-salon-pink rounded-full"></div>
                    <span className="text-salon-text-dark">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-16 text-center">
              Voordelen van keratine
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow-pink transition-all duration-500 hover:-translate-y-2 border border-white/50"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-salon-pink to-salon-rose rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-salon-text-dark mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-salon-text-dark leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                Nazorg
              </h2>
              <p className="text-xl text-salon-text-dark">
                Volg deze stappen om je resultaat te maximaliseren. De eerste 72
                uur niet wassen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-salon-off-white to-salon-cream rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {afterCare.map((instruction) => (
                  <div key={instruction} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-salon-pink rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-salon-text-dark font-medium">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-16 text-center">
              Resultaten van D&apos;Ana Hair
            </h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                { ratio: "1/2", label: "Transformatie na keratine" },
                { ratio: "1/1", label: "Glad haar na Braziliaanse keratine" },
                { ratio: "4/3", label: "Pluiscontrole na behandeling" },
                { ratio: "3/4", label: "Professionele keratine in Merelbeke" },
                { ratio: "3/2", label: "Zijdezacht haar na keratine" },
              ].map((img) => (
                <div key={img.label} className="break-inside-avoid mb-6">
                  <img
                    src={getImageUrl("/keratine.webp")}
                    alt={img.label}
                    className="w-full object-cover shadow-soft"
                    style={{ aspectRatio: img.ratio }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-salon-text-dark mb-6 text-center">
              Keratine in Merelbeke, nabij Gent
            </h2>
            <p className="text-salon-text-dark leading-relaxed text-center mb-8">
              D&apos;Ana Hair zit in Merelbeke-Melle, Hundelgemsesteenweg 73 —
              niet in Gent. Vanuit Gent is het ongeveer 15 minuten. We hebben
              geen tweede adres.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={ROUTES.keratineMerelbeke}
                className="btn-outline text-sm"
              >
                Keratine in Merelbeke
              </Link>
              <Link href={ROUTES.keratineGent} className="btn-outline text-sm">
                Keratine nabij Gent
              </Link>
              <Link href={ROUTES.diensten} className="btn-outline text-sm">
                Alle diensten
              </Link>
            </div>
          </div>
        </section>

        <FaqList
          faqs={faqs}
          title="Veelgestelde vragen"
          description="Antwoorden over keratine in Merelbeke, Gent, duur, nazorg en gekleurd of afro haar."
        />

        <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-rose text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Klaar voor glad, pluisvrij haar?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Boek een afspraak bij D&apos;Ana Hair in Merelbeke-Melle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={ROUTES.afspraak}
                className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
              >
                Afspraak maken
                <ChevronRight size={24} className="ml-2" />
              </Link>
              <Link
                href={ROUTES.diensten}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
              >
                Bekijk alle diensten
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
