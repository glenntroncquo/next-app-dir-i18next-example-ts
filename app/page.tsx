import Link from "next/link";
import { getImageUrl } from "../lib/imageUrl";
import Navbar from "./components/Navbar";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import Image from "next/image";
import { pageMetadata } from "../lib/metadata";
import { hairSalonJsonLd } from "../lib/schema";
import {
  NAP,
  ROUTES,
  SITE_URL,
  WEEKDAY_HOURS,
  absoluteUrl,
  fullAddress,
} from "../lib/site";
import { GOOGLE_REVIEWS, REVIEW_SUMMARY } from "../lib/reviews";

export const metadata = pageMetadata({
  title: "D'Ana Hair Merelbeke | Keratinebehandeling & haarsalon",
  description:
    "Haarsalon in Merelbeke-Melle voor Braziliaanse keratine en haarbotox. Hundelgemsesteenweg 73, ongeveer 15 minuten van Gent. Boek je afspraak.",
  path: "/",
  keywords:
    "keratinebehandeling Merelbeke, haarsalon Merelbeke, Braziliaanse keratine, haarbotox, D'Ana Hair, keratine Gent",
  imageAlt: "Daniela en Ana Paula van D'Ana Hair in Merelbeke",
});

const HOME_SERVICES = [
  {
    title: "Keratinebehandeling",
    text: "Braziliaanse keratine voor glad, pluisvrij haar. Onze specialiteit, vanaf €150.",
    href: ROUTES.keratine,
    image: "/keratine.webp",
    video: false,
  },
  {
    title: "Haarbotox",
    text: "Diepe conditionering voor vezel die glans en soepelheid mist. Vanaf €150.",
    href: ROUTES.haarbotox,
    image: "/botox.mp4",
    video: true,
  },
  {
    title: "Ritual Nutrition + LED",
    text: "Braziliaanse voeding en lichttherapie. Geen steiling, wel conditie. Vanaf €60.",
    href: ROUTES.ritual,
    image: "/led.jpg",
    video: false,
  },
];

export default function Page() {
  const { rating, reviewCount } = REVIEW_SUMMARY;

  const structuredData = {
    ...hairSalonJsonLd(SITE_URL),
    description:
      "Bij ons draait het om jouw haar en jouw verhaal. Onze Braziliaanse keratine- en botoxbehandelingen geven je haar de verzorging die het nodig heeft om weer te stralen.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: GOOGLE_REVIEWS.slice(0, 3).map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author_name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      datePublished: new Date(review.time * 1000).toISOString(),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Keratinebehandeling",
            url: absoluteUrl(ROUTES.keratine),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Haarbotox",
            url: absoluteUrl(ROUTES.haarbotox),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ritual Nutrition + LED",
            url: absoluteUrl(ROUTES.ritual),
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar />

      <main>
        <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink">
          <Image
            src={getImageUrl("/placeholdertest.jpg")}
            alt="Salon D'Ana Hair in Merelbeke"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-36">
            <p className="eyebrow mb-5 text-stone">
              Merelbeke-Melle · {rating.toFixed(1)} / 5 · {reviewCount}+ reviews
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Haarwerk met Braziliaanse precisie
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
              Keratine, herstel en kleur in één salon. Hundelgemsesteenweg 73,
              ongeveer 15 minuten van Gent.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={ROUTES.afspraak} className="btn-ghost-light">
                Afspraak maken
              </Link>
              <Link href={ROUTES.diensten} className="btn-ghost-light">
                Bekijk diensten
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="bg-cream" aria-labelledby="about-heading">
          <div className="section-container grid items-center gap-16 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={getImageUrl("/team.jpg")}
                alt="Daniela en Ana Paula van D'Ana Hair"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">Moeder en dochter</p>
              <h2
                id="about-heading"
                className="font-display text-4xl text-ink md:text-5xl"
              >
                Onze roots, ons atelier
              </h2>
              <p className="mt-6 leading-relaxed text-salon-text-medium">
                Ons verhaal begint in Brazilië, waar Daniela haar passie voor
                haarverzorging ontdekte. In België richtte ze de salon op met
                Nuance Brazil. Ana Paula deelde die passie van jongs af.
              </p>
              <p className="mt-4 leading-relaxed text-salon-text-medium">
                Vandaag werken we samen — ervaring en frisse blik — met focus op
                haargezondheid, geen menukaart van beloftes.
              </p>
              <p className="mt-8 font-display text-2xl italic text-ink">
                Liefs, Daniela & Ana Paula
              </p>
              <Link href={ROUTES.overOns} className="btn-outline mt-8 inline-flex">
                Over ons
              </Link>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-y border-stone/40 bg-paper"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="eyebrow mb-4">Behandelingen</p>
            <h2
              id="services-heading"
              className="font-display text-4xl text-ink md:text-5xl"
            >
              Keratine eerst, de rest in hetzelfde atelier
            </h2>
            <p className="mt-5 max-w-2xl text-salon-text-medium">
              Gezond haar, persoonlijke aandacht, geen aparte kleurstudio.
            </p>
          </div>
          <div className="mx-auto max-w-6xl border-t border-stone/40">
            {HOME_SERVICES.map((service, index) => (
              <article
                key={service.href}
                className="grid border-b border-stone/40 md:grid-cols-2"
              >
                <div
                  className={`relative min-h-[280px] bg-ink ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {service.video ? (
                    <video
                      src={getImageUrl(service.image)}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={getImageUrl(service.image)}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center bg-cream px-8 py-12 md:px-14">
                  <p className="eyebrow mb-3">0{index + 1}</p>
                  <h3 className="font-display text-3xl text-ink md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-salon-text-medium">
                    {service.text}
                  </p>
                  <Link href={service.href} className="btn-outline mt-8 w-fit">
                    Meer over {service.title.toLowerCase()}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="py-16 text-center">
            <Link href={ROUTES.diensten} className="btn-outline">
              Alle diensten
            </Link>
          </div>
        </section>

        <section className="bg-cream py-20" aria-labelledby="testimonials-heading">
          <div className="section-container">
            <p className="eyebrow mb-4 text-center">Stemmen uit de salon</p>
            <h2
              id="testimonials-heading"
              className="mb-12 text-center font-display text-4xl text-ink md:text-5xl"
            >
              Wat klanten zeggen
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {GOOGLE_REVIEWS.slice(0, 3).map((review, index) => (
                <TestimonialCard
                  key={review.author_name}
                  name={review.author_name}
                  text={review.text}
                  rating={review.rating}
                  imageSrc={review.profile_photo_url || "/default-avatar.jpg"}
                  delay={index * 100}
                  height={"height" in review ? review.height : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-stone/40 bg-paper py-20"
          aria-labelledby="contact-heading"
        >
          <div className="section-container">
            <p className="eyebrow mb-4">Bezoek</p>
            <h2
              id="contact-heading"
              className="font-display text-4xl text-ink md:text-5xl"
            >
              Merelbeke-Melle, niet Gent
            </h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="eyebrow mb-6">Contact</h3>
                <address className="not-italic space-y-4 text-salon-text-medium">
                  <p>
                    <span className="block text-ink">Adres</span>
                    <a href={NAP.mapsUrl} className="underline decoration-stone underline-offset-4 hover:text-ink">
                      {fullAddress()}
                    </a>
                  </p>
                  <p>
                    <span className="block text-ink">Telefoon</span>
                    <a href={`tel:${NAP.telephoneHref}`} className="hover:text-ink">
                      {NAP.telephone}
                    </a>
                  </p>
                  <p>
                    <span className="block text-ink">E-mail</span>
                    <a href={`mailto:${NAP.email}`} className="hover:text-ink">
                      {NAP.email}
                    </a>
                  </p>
                </address>
                <h3 className="eyebrow mb-4 mt-10">Openingsuren</h3>
                <dl className="max-w-sm space-y-2">
                  {WEEKDAY_HOURS.map((row) => (
                    <div
                      key={row.labelNl}
                      className="flex justify-between border-b border-stone/40 py-2 text-sm"
                    >
                      <dt className="text-salon-text-medium">{row.labelNl}</dt>
                      <dd className="text-ink">{row.display}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <div className="h-80 overflow-hidden border border-stone/40">
                  <iframe
                    src={NAP.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="D'Ana Hair salon — Hundelgemsesteenweg 73, 9820 Merelbeke-Melle"
                    aria-label="Kaart van D'Ana Hair in Merelbeke-Melle"
                  />
                </div>
                <p className="mt-3 text-sm text-salon-text-medium">
                  Geen vestiging in Gent zelf.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-20" aria-labelledby="instagram-heading">
          <div className="section-container">
            <p className="eyebrow mb-4 text-center">Atelier op beeld</p>
            <h2
              id="instagram-heading"
              className="mb-12 text-center font-display text-4xl text-ink"
            >
              Volg het werk
            </h2>
            <div className="grid grid-cols-2 gap-px bg-stone/40 md:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  url: getImageUrl("/story5.jpg"),
                  instagram:
                    "https://www.instagram.com/p/DGIe1VPNJns/?igsh=MTI2cXo5bGE3aGp5dw%3D%3D",
                },
                {
                  url: getImageUrl("/story4.mp4"),
                  instagram:
                    "https://www.instagram.com/p/DLPhNfLtSWC/?igsh=bXlxZWpjOHNyc29r&img_index=1",
                },
                {
                  url: getImageUrl("/story1.jpg"),
                  instagram: "https://www.instagram.com/p/DNC_qWpMS9b/?img_index=1",
                },
                {
                  url: getImageUrl("/story2.mp4"),
                  instagram:
                    "https://www.instagram.com/reel/DNQO2eXsVUL/?igsh=MTdybjFjbzA3aWlndg%3D%3D",
                },
                {
                  url: getImageUrl("/story3.jpg"),
                  instagram:
                    "https://www.instagram.com/p/DMqQLpJMxmS/?igsh=MTFsZGw0cWw5a2VrbA%3D%3D",
                },
                {
                  url: getImageUrl("/story6.mp4"),
                  instagram: "https://www.instagram.com/p/DK_tGQ4s8Pm/",
                },
              ].map((image, index) => {
                const isVideoFile = ["mp4", "webm", "ogg", "mov"].includes(
                  image.url.split(".").pop()?.toLowerCase() || "",
                );
                return (
                  <a
                    key={index}
                    href={image.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden bg-ink"
                    aria-label={`Instagram-bericht ${index + 1} van D'Ana Hair`}
                  >
                    {isVideoFile ? (
                      <video
                        src={image.url}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        muted
                        loop
                        autoPlay
                        playsInline
                        aria-hidden="true"
                      />
                    ) : (
                      <Image
                        src={image.url}
                        alt={`Instagram-bericht ${index + 1} van D'Ana Hair`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 50vw, 16vw"
                      />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <a
                href={NAP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Volg D'Ana Hair op Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
