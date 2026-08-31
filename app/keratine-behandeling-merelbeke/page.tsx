import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FaqList } from "../components/FaqList";
import { JsonLd } from "../components/JsonLd";
import { pageMetadata } from "../../lib/metadata";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  hairSalonJsonLd,
} from "../../lib/schema";
import {
  NAP,
  ROUTES,
  absoluteUrl,
  fullAddress,
} from "../../lib/site";
import { KERATIN_FAQS } from "../../lib/keratin";

export const metadata = pageMetadata({
  title: "Keratinebehandeling in Merelbeke",
  description:
    "Keratinebehandeling bij D'Ana Hair, Hundelgemsesteenweg 73 in 9820 Merelbeke-Melle. Braziliaanse expertise, geen deuropeningsspam. Boek een afspraak.",
  path: ROUTES.keratineMerelbeke,
  keywords:
    "keratinebehandeling Merelbeke, keratine Merelbeke-Melle, D'Ana Hair, Hundelgemsesteenweg 73",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Keratine in Merelbeke", href: ROUTES.keratineMerelbeke },
];

const faqs = KERATIN_FAQS.filter((f) =>
  /Merelbeke|duur|nazorg|gekleurd|afro|België/i.test(f.question),
).map((f) => ({ question: f.question, answer: f.answer }));

export default function KeratineMerelbekePage() {
  return (
    <>
      <JsonLd data={hairSalonJsonLd(absoluteUrl(ROUTES.keratineMerelbeke))} />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <article className="md:pt-32 pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
              Keratinebehandeling in Merelbeke
            </h1>
            <p className="text-lg text-salon-text-medium mb-6">
              D&apos;Ana Hair is een echte salon in Merelbeke-Melle, niet een
              netwerk van stadspagina&apos;s. Het adres is {fullAddress()}.
              Daniela en Ana Paula doen hier Braziliaanse keratinebehandelingen
              met Nuance Brazil.
            </p>
            <p className="text-salon-text-dark mb-6">
              Wie in Merelbeke, Melle of de zuidrand van Gent woont, hoeft niet
              naar een ketensalon in het centrum. Je komt naar de
              Hundelgemsesteenweg, belt {NAP.telephone} of boekt online.
            </p>
            <p className="text-salon-text-dark mb-8">
              Meer over de behandeling zelf — duur, nazorg, gekleurd en afro
              haar — staat op de{" "}
              <Link href={ROUTES.keratine} className="text-salon-pink underline">
                keratinepagina
              </Link>
              . Kom je uit Gent? Lees{" "}
              <Link
                href={ROUTES.keratineGent}
                className="text-salon-pink underline"
              >
                keratine nabij Gent
              </Link>
              : we zitten niet in Gent, wel op een kwartier rijden.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href={ROUTES.afspraak} className="btn-primary">
                Afspraak maken
              </Link>
              <Link href={ROUTES.keratine} className="btn-outline">
                Over de behandeling
              </Link>
            </div>
          </div>
        </article>
        <FaqList faqs={faqs} />
        <Footer />
      </div>
    </>
  );
}
