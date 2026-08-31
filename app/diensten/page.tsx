import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { getImageUrl } from "../../lib/imageUrl";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd } from "../../lib/schema";
import { ROUTES } from "../../lib/site";
import { EXTRA_SERVICES } from "../../lib/extra-services";

export const metadata = pageMetadata({
  title: "Diensten",
  description:
    "Keratine, haarbotox, Ritual Nutrition, kleuren, knippen en meer bij D'Ana Hair in Merelbeke-Melle.",
  path: ROUTES.diensten,
  keywords: "haarsalon diensten Merelbeke, keratine, haarbotox, knippen, kleuren",
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Diensten", href: ROUTES.diensten },
];

const featured = [
  {
    href: ROUTES.keratine,
    title: "Keratinebehandeling",
    description:
      "Braziliaanse keratine voor glad, pluisvrij haar. Vanaf €150.",
    image: getImageUrl("/keratine.webp"),
    price: "€150",
  },
  {
    href: ROUTES.haarbotox,
    title: "Haarbotox",
    description: "Herstel voor beschadigd haar. Vanaf €150.",
    image: getImageUrl("/botox.mp4"),
    price: "€150",
  },
  {
    href: ROUTES.ritual,
    title: "Ritual Nutrition + LED",
    description: "Braziliaanse voeding en LED-therapie. Vanaf €60.",
    image: getImageUrl("/led.jpg"),
    price: "€60",
  },
];

export default function DienstenPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="min-h-screen">
        <Navbar />
        <section className="md:pt-32 pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                Onze <span className="text-salon-pink">diensten</span>
              </h1>
              <p className="text-lg text-salon-text-medium leading-relaxed max-w-3xl mx-auto">
                Gezond en glanzend haar is onze passie. Keratine is onze
                specialiteit; daarnaast knippen, kleuren en verzorgen we in
                dezelfde salon in Merelbeke-Melle.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((service) => (
                <div
                  key={service.href}
                  className="group bg-white rounded-2xl shadow-soft hover:shadow-glow-pink transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    {service.image.endsWith(".mp4") ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      >
                        <source src={service.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-display font-bold text-salon-text-dark mb-3 group-hover:text-salon-pink transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-salon-text-medium text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="font-semibold text-salon-pink mb-4">
                      Vanaf {service.price}
                    </div>
                    <Link
                      href={service.href}
                      className="w-full btn-outline text-sm py-2 px-4 rounded-full inline-flex items-center justify-center"
                    >
                      Zie meer
                      <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-display font-bold text-salon-text-dark mb-8 text-center">
              Meer diensten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXTRA_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={s.path}
                  className="glass-card-hover p-6 block"
                >
                  <h3 className="text-lg font-display font-semibold text-salon-text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-salon-text-medium mb-3">
                    {s.heroSubtitle}
                  </p>
                  <span className="text-salon-pink text-sm font-medium">
                    Prijs op aanvraag →
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-center text-salon-text-medium mt-10">
              Keratine zoek je in{" "}
              <Link
                href={ROUTES.keratineMerelbeke}
                className="text-salon-pink underline"
              >
                Merelbeke
              </Link>{" "}
              of{" "}
              <Link
                href={ROUTES.keratineGent}
                className="text-salon-pink underline"
              >
                nabij Gent
              </Link>
              .
            </p>
            <div className="text-center mt-8">
              <Link href={ROUTES.afspraak} className="btn-primary inline-flex">
                Afspraak maken
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
