import { Link } from "./components/Link";
import { getImageUrl } from "../../lib/imageUrl";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import { getT } from "../i18n";
import {
  ChevronRight,
  Scissors,
  Paintbrush,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://danahair.be";
  const currentUrl = `${baseUrl}/${lng}`;

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: t("seoKeywords"),
    authors: [{ name: "D'Ana Hair" }],
    creator: "D'Ana Hair",
    publisher: "D'Ana Hair",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        nl: `${baseUrl}/nl`,
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        pt: `${baseUrl}/pt`,
      },
    },
    openGraph: {
      title: t("seoTitle"),
      description: t("heroDesc"),
      url: currentUrl,
      siteName: t("siteName") || "D'Ana Hair",
      locale: lng,
      type: "website",
      images: [
        {
          url: `${baseUrl}/hero2.jpg`,
          width: 1200,
          height: 630,
          alt: "Two stylists in pink blazers with affirmations in the background",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("seoTitle"),
      description: t("heroDesc"),
      images: [`${baseUrl}/hero2.jpg`],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    other: {
      "theme-color": "#FF8FB2",
      "color-scheme": "light",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "D'Ana Hair",
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "msapplication-TileColor": "#FF8FB2",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const { t } = await getT();

  // Sample reviews data (this was hardcoded in the React app)
  const reviews = [
    {
      author_name: "Silke De Groote",
      author_url:
        "https://www.google.com/maps/contrib/118165338519284547002/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocLYph1TZT2igLTPkjXNl7X0kilUywkbBWxr4z_OITQG8ugHyw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "een week geleden",
      text: "Zeer tevreden met mijn keratinebehandeling! Zowel moeder als dochter zijn enorm vriendelijk en professioneel. Mijn droge haar voelt gevoed en gezond aan. Het resultaat is prachtig: geen gedoe meer met de stijltang, enkel föhnen en mijn haar is perfect stijl. Zeker een aanrader!",
      time: 1743608320,
      height: "320px",
    },
    {
      author_name: "stefanie mussche",
      author_url:
        "https://www.google.com/maps/contrib/109242799356134697352/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXZEwBmGukXCljizvrTkxn3lzPP24gy30TqcB2wvSoPlsh93R4=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "8 maanden geleden",
      text: "Was al heel lang aan het twijfelen om een keratine behandeling te laten doen maar was nooit helemaal overtuigd of dit wel goed zou zijn voor mijn haar en het wel iets voor mij zou zijn. Toen ik resultaten zag van andere mensen heb ik toch een afspraak gemaakt. Wist nog altijd niet goed wat ik er van moest verwachten maar wauwwww!!!\nIk heb mijn haar 2 dagen nadien gewassen en gewoon los gedroogd met de haardroger en heb er niets van werk aan gehad. Voelde super zacht en glad aan. Alle krul eruit zonder moeite te moeten doen! Geweldig!\n\nBen echt meeega content! Super bedankt. Ik kom sowieso terug! 🤩",
      time: 1736457445,
    },
    {
      author_name: "Allisen Hoste",
      author_url:
        "https://www.google.com/maps/contrib/103706470601092772607/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjU1ydb-HZW6xo1nH816_cbPUvszLEY4diwE1cUxaoLjxf4tyH4n=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "3 maanden geleden",
      text: "Vorige week keratine behandeling laten doen. Super vriendelijk onthaald! Super lieve vrouw en doet haar werk met heel veel liefde, voel je ook aan mijn haar! Heb de shampoo + maskertje's + olie erbij gekocht (op aanraden van haar) en tot nu toe super content ermee, mij zie je zeker terug!! 🤍",
      time: 1736457445,
      height: "320px",
    },
  ];

  const rating = 5;
  const reviewCount = 37;

  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "D'Ana Hair",
    description: t("heroDesc"),
    url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://danahair.be"}/${lng}`,
    telephone: "+32 477 37 10 71",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hundelgemsesteenweg 73",
      addressLocality: "Merelbeke-Melle",
      postalCode: "9820",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.01490464198777,
      longitude: 3.7532758684587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "13:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.slice(0, 3).map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author_name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      datePublished: new Date(review.time * 1000).toISOString(),
    })),
    service: [
      {
        "@type": "Service",
        name: t("serviceKeratinTitle"),
        description: t("serviceKeratinDescription"),
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Service",
        name: t("serviceBotoxTitle"),
        description: t("serviceBotoxDescription"),
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Service",
        name: t("serviceRitualTitle"),
        description: t("serviceRitualDescription"),
        offers: {
          "@type": "Offer",
          price: "60",
          priceCurrency: "EUR",
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Preload critical resources */}
      <link
        rel="preload"
        href={getImageUrl("/hero2.jpg")}
        as="image"
        type="image/jpeg"
      />
      <link
        rel="preload"
        href={getImageUrl("/logo.svg")}
        as="image"
        type="image/svg+xml"
      />

      {/* Additional meta tags for better SEO */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#FF8FB2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="D'Ana Hair" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#FF8FB2" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//maps.google.com" />
      <link rel="dns-prefetch" href="//www.instagram.com" />
      <link rel="dns-prefetch" href="//www.facebook.com" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://maps.google.com" />
      <link rel="preconnect" href="https://www.instagram.com" />
      <link rel="preconnect" href="https://www.facebook.com" />

      <div className="min-h-screen overflow-hidden">
        {/* Critical LCP Image - Load immediately */}
        <Image
          src={getImageUrl("/hero2.jpg")}
          alt="Two professional hair stylists in pink blazers with positive affirmations in the background - D'Ana Hair Salon"
          className="hidden"
          width={509}
          height={592}
          priority
          quality={90}
        />

        <Navbar currentLng={lng} />

        {/* Hero Section */}
        <main id="home" className="min-h-[85vh] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-salon-softer-pink via-white to-salon-lavender/30 opacity-70 z-0"></div>
          <div className="absolute top-1/4 -left-10 w-56 h-56 bg-salon-light-pink rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
          <div
            className="absolute bottom-1/3 right-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-30 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Decorative Star Elements */}
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

          {/* Main Content */}
          <div className="section-container relative z-10 pt-24 md:pt-32 flex flex-col md:flex-row items-stretch md:items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 min-w-0">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-soft">
                <div className="flex items-center">
                  <div
                    className="flex"
                    aria-label={`${rating} out of 5 stars rating`}
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
                    {t("ourRating", {
                      rating: rating.toFixed(1),
                      count: reviewCount,
                    })}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 tracking-tight">
                <span className="text-salon-text-dark">{t("heroTitle1")}</span>
                <br />
                <span className="text-salon-pink">{t("heroTitle2")}</span>
              </h1>

              <p className="text-salon-text-medium text-md md:text-xl mb-8 md:max-w-md">
                {t("heroDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href={`/booking`} className="btn-primary">
                  {t("bookAppointment")}{" "}
                  <ChevronRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/#services" className="btn-outline">
                  {t("exploreServices")}
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative min-w-0">
              <div className="relative z-10 w-full">
                {/* Main image with shadow and border */}
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-soft-lg bg-white h-[600px] w-full min-w-0">
                  <Image
                    src={getImageUrl("/hero2.jpg")}
                    alt="Two professional hair stylists in pink blazers with positive affirmations in the background - D'Ana Hair Salon"
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

                {/* Floating card elements */}
                <div className="absolute -top-5 -left-5 glass-card p-4 shadow-soft">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-salon-pink flex items-center justify-center text-white">
                      <Heart size={16} fill="white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-salon-text-dark text-sm">
                        {t("topRated")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
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

        {/* About Section */}
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
                      alt="Professional hair salon stylists at D'Ana Hair Salon working with clients"
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
                  {t("aboutOurSalon")}
                </div>

                <h2
                  id="about-heading"
                  className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight"
                >
                  {t("ourRoots")}{" "}
                  <span className="text-salon-pink">{t("ourStory")}</span>
                </h2>

                <p className="text-salon-text-medium mb-6">
                  {t("ourStoryDesc")}
                </p>

                <p className="text-salon-text-medium mb-8">{t("aboutDesc3")}</p>

                <p className="text-3xl md:text-2xl font-handwritten font-bold mb-6 leading-tight text-salon-pink">
                  {t("aboutDesc4")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={`/about`} className="btn-primary inline-flex">
              {t("aboutUs")} <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Services Section */}
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
                {t("ourPremiumServices")}
              </div>

              <h2
                id="services-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                <span className="text-salon-text-dark">{t("yourLook")}</span>{" "}
                <span className="text-salon-pink">{t("ourPassion")}</span>
              </h2>

              <p className="text-salon-text-medium max-w-2xl mx-auto">
                {t("ourServicesDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title={t("serviceKeratinTitle")}
                description={t("serviceKeratinDescription")}
                price="€150"
                imageSrc={getImageUrl("/keratine.webp")}
                iconSrc={
                  <Scissors
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                }
                delay={0}
                link="/services/keratine"
                lng={lng}
                learnMoreText={t("learnMore")}
              />

              <ServiceCard
                title={t("serviceBotoxTitle")}
                description={t("serviceBotoxDescription")}
                price="€150"
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
                link="/services/botox"
                lng={lng}
                learnMoreText={t("learnMore")}
              />

              <ServiceCard
                title={t("serviceRitualTitle")}
                description={t("serviceRitualDescription")}
                price="€60"
                imageSrc={getImageUrl("/led.jpg")}
                iconSrc={
                  <Sparkles
                    size={16}
                    className="text-white"
                    aria-hidden="true"
                  />
                }
                delay={200}
                link="/services/ritual"
                lng={lng}
                learnMoreText={t("learnMore")}
              />
            </div>

            <div className="text-center mt-12">
              <Link
                href={`/${lng}/booking`}
                className="btn-primary inline-flex"
              >
                {t("bookAppointment")}{" "}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                {t("clientTestimonials")}
              </div>

              <h2
                id="testimonials-heading"
                className="text-3xl md:text-4xl font-display font-bold mb-6"
              >
                <span className="text-salon-text-dark">
                  {t("whatOurClients")}
                </span>{" "}
                <span className="text-salon-pink">{t("clientsSay")}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.slice(0, 3).map((review, index) => (
                <TestimonialCard
                  key={index}
                  name={review.author_name}
                  text={review.text}
                  rating={review.rating}
                  imageSrc={review.profile_photo_url || "/default-avatar.jpg"}
                  delay={index * 100}
                  height={review.height}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-salon-softer-pink py-20 relative"
          aria-labelledby="contact-heading"
        >
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                {t("questions")}
              </div>
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-display font-bold leading-tight"
              >
                <span className="text-salon-text-dark">
                  {t("readyToTransformYourLook")}{" "}
                </span>
                <span className="text-salon-pink">{t("butQuestions")}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information & Opening Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      {t("contactInformation")}
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
                            {t("address")}
                          </p>
                          <p className="text-salon-text-medium">
                            Hundelgemsesteenweg 73, 9820 Merelbeke-Melle
                          </p>
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
                            {t("phone")}
                          </p>
                          <p className="text-salon-text-medium">
                            <a
                              href="tel:+32477371071"
                              className="hover:text-salon-pink transition-colors"
                            >
                              +32 477 37 10 71
                            </a>
                          </p>
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
                            {t("email")}
                          </p>
                          <p className="text-salon-text-medium">
                            <a
                              href="mailto:info.danahair@gmail.com"
                              className="hover:text-salon-pink transition-colors"
                            >
                              info.danahair@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </address>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      {t("openingHours")}
                    </h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <dt className="text-salon-text-medium">
                          {t("monday")}
                        </dt>
                        <dd className="font-medium text-salon-text-dark">
                          {t("closed")}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <dt className="text-salon-text-medium">
                          {t("tuesday")}
                        </dt>
                        <dd className="font-medium text-salon-text-dark">
                          {t("closed")}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <dt className="text-salon-text-medium">
                          {t("wednesday")}
                        </dt>
                        <dd className="font-medium text-salon-text-dark">
                          13:30 - 21:00
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <dt className="text-salon-text-medium">
                          {t("friday")}
                        </dt>
                        <dd className="font-medium text-salon-text-dark">
                          9:00 - 18:00
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <dt className="text-salon-text-medium">
                          {t("saturday")}
                        </dt>
                        <dd className="font-medium text-salon-text-dark">
                          9:00 - 16:00
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                  {t("findUs")}
                </h3>
                <div className="rounded-lg overflow-hidden h-80 bg-salon-cream/20">
                  <iframe
                    src="https://maps.google.com/maps?q=51.01490464198777,3.7532758684587&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="D'Ana Hair Salon Location - Hundelgemsesteenweg 73, 9820 Merelbeke-Melle"
                    aria-label="Interactive map showing D'Ana Hair Salon location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
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
                <span className="text-salon-text-dark">{t("followOur")}</span>{" "}
                <span className="text-salon-pink">{t("creativeJourney")}</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-2">
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmBeautiful
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmWorthy
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmAbundant
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmEnough
                </div>
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
                const isVideo = (url: string) => {
                  const videoExtensions = ["mp4", "webm", "ogg", "mov"];
                  const extension = url.split(".").pop()?.toLowerCase();
                  return videoExtensions.includes(extension || "");
                };
                const isVideoFile = isVideo(image.url);

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
                      aria-label={`View Instagram post ${
                        index + 1
                      } on Instagram`}
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
                          alt={`Instagram post ${
                            index + 1
                          } from D'Ana Hair Salon`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
                          width={300}
                          height={300}
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                          quality={80}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      )}

                      {/* Heart icon overlay */}
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
                href="https://www.instagram.com/dana.hair.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
                aria-label="Follow D'Ana Hair Salon on Instagram"
              >
                {t("followOnInstagram")}
              </a>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}
