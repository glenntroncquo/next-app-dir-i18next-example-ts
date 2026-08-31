import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
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

const HAARBOT_DESC =
  "Haarbotox bij D'Ana Hair in Merelbeke-Melle. Herstel beschadigd haar, minder pluis, meer glans. Vanaf €150. Salon op 15 minuten van Gent.";

export const metadata = pageMetadata({
  title: "Haarbotox Merelbeke",
  description: HAARBOT_DESC,
  path: ROUTES.haarbotox,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Diensten", href: ROUTES.diensten },
  { name: "Haarbotox", href: ROUTES.haarbotox },
];

const faqs = [
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
];

export default function HaarbotoxPage() {
  const benefits = [
    { title: "Herstelt beschadigd haar", desc: "Vult poreuze schubben en versterkt verzwakte strengen." },
    { title: "Minder pluis", desc: "Gladstrijkt de schubben zonder permanente relaxer." },
    { title: "Meer glans", desc: "Brengt een gezonde, levendige uitstraling terug." },
    { title: "Betere elasticiteit", desc: "Minder breuk en gespleten punten bij juist onderhoud." },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Haarbotox",
          description: HAARBOT_DESC,
          url: absoluteUrl(ROUTES.haarbotox),
          price: "150",
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar />
        <section className="relative md:pt-32 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-salon-text-dark">
                  Haarbotox
                </h1>
                <p className="text-xl text-salon-pink font-medium">
                  Herstel en verjong je haar in Merelbeke
                </p>
                <p className="text-lg text-salon-text-dark">
                  Hair botox is een diepe conditionering, geen injectie. We
                  herstellen beschadigde vezels, verminderen pluis en brengen
                  glans terug — bij D&apos;Ana Hair in Merelbeke-Melle.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">€150</div>
                    <div className="text-sm">Vanaf</div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">2–3 u</div>
                    <div className="text-sm">Duur</div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">2–4 mnd</div>
                    <div className="text-sm">Houdt tot</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-2xl shadow-soft"
                >
                  <source src={getImageUrl("/botox.mp4")} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4">Wat is haarbotox?</h2>
            <p className="text-salon-text-dark mb-4">
              In tegenstelling tot medische Botox bevat het geen botulinumtoxine.
              Eiwitten, vitamines en oliën vullen beschadigde delen van de
              haarschubben. Resultaat: soepeler, glanzender haar met behoud van
              textuur.
            </p>
            <p className="text-salon-text-medium">
              Prijzen vanaf €150 tot €250, afhankelijk van lengte en conditie.
            </p>
          </div>
        </section>

        <section className="py-16 bg-salon-off-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-3xl p-6 shadow-soft">
                <h3 className="font-display font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-salon-text-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-6">Nazorg</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Wacht 24–48 uur voor de eerste wasbeurt",
                "Sulfaatvrije shampoo en conditioner",
                "Wekelijks een diepe conditioner",
                "Hittebescherming bij föhnen",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-salon-pink shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqList faqs={faqs} />

        <section className="py-16 text-center">
          <p className="mb-6 text-salon-text-medium">
            Twijfel je tussen botox en{" "}
            <Link href={ROUTES.keratine} className="text-salon-pink underline">
              keratine
            </Link>
            ? We bekijken het samen.
          </p>
          <Link href={ROUTES.afspraak} className="btn-primary inline-flex">
            Afspraak maken <ChevronRight className="ml-2" />
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
