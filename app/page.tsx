import Link from "next/link";
import { getImageUrl } from "../lib/imageUrl";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import {
  ChevronRight,
  Scissors,
  Paintbrush,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
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

      <div className="min-h-screen overflow-hidden">
        <Image
          src={getImageUrl("/hero2.jpg")}
          alt="Twee stylisten van D'Ana Hair in roze blazers"
          className="hidden"
          width={509}
          height={592}
          priority
          quality={90}
        />

        <Navbar />

        <main id="home" className="min-h-[85vh] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-salon-softer-pink via-white to-salon-lavender/30 opacity-70 z-0"></div>
          <div className="absolute top-1/4 -left-10 w-56 h-56 bg-salon-light-pink rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
          <div
            className="absolute bottom-1/3 right-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-30 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className="absolute top-1/4 left-1/4 animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
            aria-hidden="true"
          >
            <Star size={24} className="text-salon-pink opacity-30" />
          </div>
          <div
            className="absolute top-1/3 right-1/3 animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
            aria-hidden="true"
          >
            <Star size={16} className="text-salon-pink opacity-20" />
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 animate-pulse-soft"
            style={{ animationDelay: "2s" }}
            aria-hidden="true"
          >
            <Star size={20} className="text-salon-pink opacity-25" />
          </div>

          <div className="section-container relative z-10 pt-24 md:pt-32 flex flex-col md:flex-row items-stretch md:items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 min-w-0">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-soft">
                <div className="flex items-center">
                  <div
                    className="flex"
                    aria-label={`${rating} op 5 sterren`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="#FF8FB2"
                        className="text-salon-pink mr-0.5"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-salon-text-dark">
                    {rating.toFixed(1)} • Meer dan {reviewCount} tevreden
                    klanten
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 tracking-tight">
                <span className="text-salon-text-dark">D&apos;Ana Hair,</span>
                <br />
                <span className="text-salon-pink">
                  Stralend haar begint hier
                </span>
              </h1>

              <p className="text-salon-text-medium text-md md:text-xl mb-8 md:max-w-md">
                Bij ons draait het om jouw haar en jouw verhaal. Onze
                Braziliaanse keratine- en botoxbehandelingen geven je haar de
                verzorging die het nodig heeft om weer echt te stralen. Salon in
                Merelbeke-Melle, ongeveer 15 minuten van Gent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href={ROUTES.afspraak} className="btn-primary">
                  Afspraak maken <ChevronRight size={18} aria-hidden="true" />
                </Link>
                <Link href={ROUTES.diensten} className="btn-outline">
                  Bekijk diensten
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative min-w-0">
              <div className="relative z-10 w-full">
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-soft-lg bg-white h-[600px] w-full min-w-0">
                  <Image
                    src={getImageUrl("/hero2.jpg")}
                    alt="Twee stylisten van D'Ana Hair in roze blazers"
                    className="w-full h-full object-cover min-w-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width={509}
                    height={592}
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>

                <div className="absolute -top-5 -left-5 glass-card p-4 shadow-soft">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-salon-pink flex items-center justify-center text-white">
                      <Heart size={16} fill="white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-salon-text-dark text-sm">
                        Geliefd door onze klanten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-10 -right-10 w-32 h-32 bg-salon-lavender rounded-full filter blur-2xl opacity-30 z-0"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-salon-light-pink rounded-full filter blur-2xl opacity-40 z-0"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </main>

        <section
          className="relative"
          id="about"
          aria-labelledby="about-heading"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-20 z-0"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-salon-light-pink rounded-full filter blur-3xl opacity-20 z-0"
            aria-hidden="true"
          ></div>

          <div className="section-container relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-stretch md:items-center gap-12">
              <div className="w-full md:w-1/2 relative min-w-0">
                <div className="relative z-10 w-full">
                  <div className="rounded-2xl overflow-hidden border-4 border-white shadow-soft-lg w-full">
                    <Image
                      src={getImageUrl("/placeholdertest.jpg")}
                      alt="Stylisten van D'Ana Hair aan het werk"
                      className="w-full max-h-[550px] h-auto object-cover min-w-0"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      width={600}
                      height={550}
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  Ons verhaal
                </div>

                <h2
                  id="about-heading"
                  className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight"
                >
                  Onze roots{" "}
                  <span className="text-salon-pink">Ons verhaal</span>
                </h2>

                <p className="text-salon-text-medium mb-6">
                  Ons verhaal begint in Brazilië, waar ik, Daniela, mijn passie
                  voor haarverzorging ontdekte. Wat startte als een persoonlijke
                  zoektocht naar gezond haar, groeide uit tot een professionele
                  carrière. In België richtte ik mijn eigen salon op, in
                  samenwerking met het Braziliaanse merk Nuance. Al van jongs af
                  aan deelde mijn dochter, Ana Paula, dezelfde passie.
                </p>

                <p className="text-salon-text-medium mb-8">
                  Vandaag werken we samen – moeder en dochter – met een unieke
                  combinatie van ervaring en frisse ideeën. Onze focus ligt op
                  kwalitatieve producten, persoonlijke service en oplossingen
                  die haargezondheid én stijl verbeteren. Welkom in ons salon,
                  waar haarverzorging met passie wordt gedaan.
                </p>

                <p className="text-3xl md:text-2xl font-handwritten font-bold mb-6 leading-tight text-salon-pink">
                  Liefs, Daniela & Ana Paula
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={ROUTES.overOns} className="btn-primary inline-flex">
              Over ons <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section
          id="services"
          className="bg-salon-softer-pink py-20 mt-20 relative"
          aria-labelledby="services-heading"
        >
          <div
            className="absolute top-0 left-1/4 w-64 h-64 bg-salon-light-pink rounded-full filter blur-3xl opacity-30 z-0"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-30 z-0"
            aria-hidden="true"
          ></div>

          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                Onze diensten
              </div>

              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                <span className="text-salon-text-dark">Jouw look</span>{" "}
                <span className="text-salon-pink">Onze passie</span>
              </h2>

              <p className="text-salon-text-medium max-w-2xl mx-auto">
                Gezond en glanzend haar is onze passie. Met persoonlijke
                aandacht en kwaliteitsproducten zorgen we dat jouw haar er
                terug verzorgd en stralend uitziet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Keratinebehandeling"
                description="Transformeer je haar met onze Braziliaanse keratinebehandeling voor glad, pluisvrij en handelbaar haar. Deze behandeling dringt diep door in de haarschacht."
                price="€150"
                priceLabel="Vanaf €150"
                imageSrc={getImageUrl("/keratine.webp")}
                iconSrc={
                  <Scissors
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                }
                delay={0}
                href={ROUTES.keratine}
              />

              <ServiceCard
                title="Haarbotox"
                description="Herstel en versterk je haar met onze botoxbehandeling voor beschadigd en zwak haar. Intensieve voeding voor gezonder, sterker haar."
                price="€150"
                priceLabel="Vanaf €150"
                imageSrc=""
                videoSrc={getImageUrl("/botox.mp4")}
                iconSrc={
                  <Paintbrush
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                }
                delay={100}
                href={ROUTES.haarbotox}
              />

              <ServiceCard
                title="Ritual Nutrition + LED"
                description="Voed je haar met ons Braziliaanse voedingsritueel gecombineerd met LED-lichttherapie. Diepe voeding en stimulatie van haargroei en herstel."
                price="€60"
                priceLabel="Vanaf €60"
                imageSrc={getImageUrl("/led.jpg")}
                iconSrc={
                  <Sparkles
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                }
                delay={200}
                href={ROUTES.ritual}
              />
            </div>

            <div className="text-center mt-12">
              <Link href={ROUTES.diensten} className="btn-outline inline-flex">
                Alle diensten{" "}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className=" relative py-20"
          aria-labelledby="testimonials-heading"
        >
          <div
            className="absolute top-0 left-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-20 z-0"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-salon-light-pink rounded-full filter blur-3xl opacity-20 z-0"
            aria-hidden="true"
          ></div>

          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                Klantgetuigenissen
              </div>

              <h2
                id="testimonials-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                <span className="text-salon-text-dark">Wat onze klanten</span>{" "}
                <span className="text-salon-pink">zeggen</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          className="bg-salon-softer-pink py-20 relative"
          aria-labelledby="contact-heading"
        >
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                Vragen?
              </div>
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-display font-bold leading-tight"
              >
                <span className="text-salon-text-dark">
                  Klaar om je look te transformeren?{" "}
                </span>
                <span className="text-salon-pink">Maar heb je nog vragen?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      Contactgegevens
                    </h3>
                    <address className="space-y-4 not-italic">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-salon-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            Adres
                          </p>
                          <a
                            href={NAP.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-salon-text-medium hover:text-salon-pink transition-colors duration-200 cursor-pointer"
                          >
                            {fullAddress()}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-salon-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            Telefoon
                          </p>
                          <a
                            href={`tel:${NAP.telephoneHref}`}
                            className="text-salon-text-medium hover:text-salon-pink transition-colors duration-200 cursor-pointer"
                          >
                            {NAP.telephone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-salon-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            E-mail
                          </p>
                          <a
                            href={`mailto:${NAP.email}`}
                            className="text-salon-text-medium hover:text-salon-pink transition-colors duration-200 cursor-pointer"
                          >
                            {NAP.email}
                          </a>
                        </div>
                      </div>
                    </address>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      Openingsuren
                    </h3>
                    <dl className="space-y-3">
                      {WEEKDAY_HOURS.map((row) => (
                        <div
                          key={row.labelNl}
                          className="flex justify-between items-center py-2 border-b border-salon-pink/20 last:border-b-0"
                        >
                          <dt className="text-salon-text-medium">
                            {row.labelNl}
                          </dt>
                          <dd className="font-medium text-salon-text-dark">
                            {row.display}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                  Vind ons
                </h3>
                <div className="rounded-lg overflow-hidden h-80 bg-salon-cream/20">
                  <iframe
                    src={NAP.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="D'Ana Hair salon — Hundelgemsesteenweg 73, 9820 Merelbeke-Melle"
                    aria-label="Kaart van D'Ana Hair in Merelbeke-Melle"
                  ></iframe>
                </div>
                <p className="text-sm text-salon-text-medium mt-3 text-center">
                  Gelegen in Merelbeke-Melle, ongeveer 15 minuten van Gent.
                  Geen vestiging in Gent zelf.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className=" relative py-20"
          aria-labelledby="instagram-heading"
        >
          <div className="section-container">
            <div className="text-center mb-16">
              <h2
                id="instagram-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                <span className="text-salon-text-dark">Volg ons</span>{" "}
                <span className="text-salon-pink">verhaal</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-2">
                {["#IAmBeautiful", "#IAmWorthy", "#IAmAbundant", "#IAmEnough"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4"
                    >
                      {tag}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
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
                  instagram:
                    "https://www.instagram.com/p/DNC_qWpMS9b/?img_index=1",
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
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg aspect-square shadow-soft"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={image.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram-bericht ${index + 1} van D'Ana Hair`}
                    >
                      {isVideoFile ? (
                        <video
                          src={image.url}
                          poster={image.url.replace(
                            /\.(mp4|webm|ogg|mov)$/i,
                            ".jpg",
                          )}
                          className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
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
                          className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
                          width={300}
                          height={300}
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                          quality={80}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <div className="flex items-center text-xs">
                            <Heart
                              size={12}
                              fill="white"
                              className="mr-1"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a
                href={NAP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
                aria-label="Volg D'Ana Hair op Instagram"
              >
                Volg ons op Instagram
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
