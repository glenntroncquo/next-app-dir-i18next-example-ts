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

const RITUAL_DESC =
  "Ritual Nutrition met Nuance Brazil en LED-lichttherapie bij D'Ana Hair in Merelbeke. Diepe voeding, vanaf €60.";

export const metadata = pageMetadata({
  title: "Ritual Nutrition + LED Merelbeke",
  description: RITUAL_DESC,
  path: ROUTES.ritual,
  image: "/led.jpg",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Diensten", href: ROUTES.diensten },
  { name: "Ritual Nutrition", href: ROUTES.ritual },
];

const faqs = [
  {
    question: "Hoe vaak Ritual Nutrition?",
    answer: "Meestal elke 4 tot 6 weken, afhankelijk van haar- en hoofdhuidconditie.",
  },
  {
    question: "Is LED-therapie veilig?",
    answer:
      "Ja. LED is niet-invasief en geschikt voor alle haarkleuren. Open wonden op de hoofdhuid zijn een reden om te wachten.",
  },
  {
    question: "Wat kost Ritual Nutrition?",
    answer: "Vanaf €60, afhankelijk van lengte en of we extra tijd nemen voor LED.",
  },
  {
    question: "Helpt dit bij haaruitval?",
    answer:
      "LED kan circulatie en follikelconditie ondersteunen. Het is geen medische behandeling tegen alopecia; we beloven geen genezing.",
  },
];

export default function RitualPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Ritual Nutrition + LED-lichttherapie",
          description: RITUAL_DESC,
          url: absoluteUrl(ROUTES.ritual),
          price: "60",
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
                  Ritual Nutrition + LED
                </h1>
                <p className="text-xl text-salon-pink font-medium">
                  Braziliaanse voeding en lichttherapie
                </p>
                <p className="text-lg text-salon-text-dark">
                  Premium nutrition van Nuance Brazil, gevolgd door LED om
                  circulatie en opname te ondersteunen. In Merelbeke-Melle,
                  dezelfde salon als je keratine.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">€60</div>
                    <div className="text-sm">Vanaf</div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">2–2,5 u</div>
                    <div className="text-sm">Duur</div>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-4 shadow-soft">
                    <div className="text-2xl font-bold text-salon-pink">4–6 w</div>
                    <div className="text-sm">Onderhoud</div>
                  </div>
                </div>
              </div>
              <img
                src={getImageUrl("/led.jpg")}
                alt="Ritual Nutrition en LED-therapie bij D'Ana Hair"
                className="w-full object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-4">Wat is het?</h2>
          <p className="text-salon-text-dark mb-4">
            Ritual Nutrition infuseert haar met voedingsstoffen; LED ondersteunt
            de hoofdhuid. Samen: zachter haar, betere textuur, geen permanente
            steiling.
          </p>
          <ul className="space-y-3">
            {[
              "Wacht 24 uur voor de eerste wasbeurt",
              "Gebruik de aangeraden producten",
              "Bescherm tegen overmatige hitte",
              "Plan onderhoud om de 4–6 weken",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <Check className="text-salon-pink shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </section>

        <FaqList faqs={faqs} />
        <section className="py-16 text-center">
          <Link href={ROUTES.afspraak} className="btn-primary inline-flex">
            Afspraak maken <ChevronRight className="ml-2" />
          </Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
