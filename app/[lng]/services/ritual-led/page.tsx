import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Check,
  Star,
  Clock,
  Shield,
  Sparkles,
  AlertTriangle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { languages } from "../../../i18n/settings";
import { getT } from "../../../i18n";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getImageUrl } from "../../../../lib/imageUrl";

interface PageProps {
  params: Promise<{ lng: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://danahair.be";
  const currentUrl = `${baseUrl}/${lng}/services/ritual-led`;

  return {
    title: t("ritualSeoTitle"),
    description: t("ritualSeoDescription"),
    keywords: `ritual nutrition, LED therapy, hair nutrition, Brazilian nutrition, ritual treatment Merelbeke, ritual treatment Ghent, ${t(
      "seoKeywords"
    )}`,
    alternates: {
      canonical: currentUrl,
      languages: {
        nl: `${baseUrl}/nl/services/ritual-led`,
        en: `${baseUrl}/en/services/ritual-led`,
        fr: `${baseUrl}/fr/services/ritual-led`,
        pt: `${baseUrl}/pt/services/ritual-led`,
      },
    },
    openGraph: {
      title: t("ritualSeoTitle"),
      description: t("ritualSeoDescription"),
      url: currentUrl,
      siteName: t("siteName"),
      locale: lng,
      type: "website",
      images: [
        {
          url: getImageUrl("/led.jpg"),
          width: 1200,
          height: 630,
          alt: `${t(
            "ritualHeroTitle"
          )} - Brazilian nutrition and LED therapy at D'Ana Hair Merelbeke`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ritualSeoTitle"),
      description: t("ritualSeoDescription"),
      images: [getImageUrl("/led.jpg")],
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RitualPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-salon-pink" />,
      title: t("ritualBenefit1"),
      desc: t("ritualBenefit1Desc"),
    },
    {
      icon: <Clock className="w-8 h-8 text-salon-pink" />,
      title: t("ritualBenefit2"),
      desc: t("ritualBenefit2Desc"),
    },
    {
      icon: <Shield className="w-8 h-8 text-salon-pink" />,
      title: t("ritualBenefit3"),
      desc: t("ritualBenefit3Desc"),
    },
    {
      icon: <Star className="w-8 h-8 text-salon-pink" />,
      title: t("ritualBenefit4"),
      desc: t("ritualBenefit4Desc"),
    },
  ];

  const processSteps = [
    { step: t("ritualProcessStep1"), desc: t("ritualProcessStep1Desc") },
    { step: t("ritualProcessStep2"), desc: t("ritualProcessStep2Desc") },
    { step: t("ritualProcessStep3"), desc: t("ritualProcessStep3Desc") },
    { step: t("ritualProcessStep4"), desc: t("ritualProcessStep4Desc") },
    { step: t("ritualProcessStep5"), desc: t("ritualProcessStep5Desc") },
  ];

  const faqs = [
    { question: "Is ritual treatment safe?", answer: t("ritualFaq4Answer") },
    { question: t("ritualFaq1"), answer: t("ritualFaq1Answer") },
    { question: t("ritualFaq7"), answer: t("ritualFaq7Answer") },
    { question: t("ritualFaq2"), answer: t("ritualFaq2Answer") },
    { question: t("ritualFaq3"), answer: t("ritualFaq3Answer") },
    { question: t("ritualFaq5"), answer: t("ritualFaq5Answer") },
    { question: t("ritualFaq6"), answer: t("ritualFaq6Answer") },
  ];

  const perfectFor = [
    t("ritualPerfectFor1"),
    t("ritualPerfectFor2"),
    t("ritualPerfectFor3"),
    t("ritualPerfectFor4"),
  ];
  const notFor = [t("ritualNotFor1"), t("ritualNotFor2"), t("ritualNotFor3")];
  const costFactors = [
    t("ritualCostFactor1"),
    t("ritualCostFactor2"),
    t("ritualCostFactor3"),
    t("ritualCostFactor4"),
  ];
  const afterCare = [
    t("ritualAfterCare1"),
    t("ritualAfterCare2"),
    t("ritualAfterCare3"),
    t("ritualAfterCare4"),
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("ritualHeroTitle"),
    description: t("ritualSeoDescription"),
    provider: {
      "@type": "HairSalon",
      name: "D'Ana Hair",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hundelgemsesteenweg 1A",
        addressLocality: "Merelbeke",
        postalCode: "9820",
        addressCountry: "BE",
      },
      telephone: "+32 9 222 00 00",
    },
    areaServed: ["Merelbeke", "Ghent", "Oudenaarde", "Belgium"],
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "60",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar currentLng={lng} />

        {/* Hero Section - More Dramatic */}
        <section className="relative md:pt-32 pt-24 pb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-salon-pink/5 via-salon-rose/5 to-salon-lavender/5"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-salon-light-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-salon-lavender/15 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
                    {t("ritualHeroTitle")}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-salon-pink mb-8 font-medium leading-relaxed">
                    {t("ritualHeroSubtitle")}
                  </h2>
                </div>

                <p className="text-xl text-salon-text-dark leading-relaxed max-w-2xl">
                  {t("ritualIntroText")}
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      €60
                    </div>
                    <div className="text-sm text-salon-text-medium">
                      {t("startingPrice")}
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      {t("durationTime")}
                    </div>
                    <div className="text-sm text-salon-text-medium">
                      {t("duration")}
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50 col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-salon-pink mb-1">
                      {t("durationMonths")}
                    </div>
                    <div className="text-sm text-salon-text-medium">
                      {t("lastsUpTo")}
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={getImageUrl("/led.jpg")}
                alt="Ritual nutrition and LED therapy treatment at D'Ana Hair showing hair nourishment process"
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </section>

        {/* What It Is + How It Works - Combined */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-16 items-center">
              <div>
                <h2 className="text-4xl text-center md:text-5xl font-display font-bold text-salon-text-dark mb-8">
                  {t("whatIsRitual")}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-salon-text-dark leading-relaxed text-center">
                    {t("whatIsRitualText")}
                  </p>
                  <div className="bg-salon-off-white rounded-2xl p-8">
                    <h3 className="text-2xl font-display font-semibold text-salon-pink mb-4">
                      {t("howItWorks")}
                    </h3>
                    <p className="text-salon-text-dark leading-relaxed">
                      {t("howItWorksRitualText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Information */}
        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("pricingTitle")}
              </h2>
              <div className="text-6xl font-bold text-salon-pink mb-4">€60</div>
              <p className="text-xl text-salon-text-dark">
                {t("ritualPricingSubtitle")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-6 text-center">
                {t("costFactors")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-salon-pink rounded-full"></div>
                    <span className="text-salon-text-dark">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Redesigned Grid */}
        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("ritualBenefits")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
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

        {/* Process - Step by Step */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("ourRitualProcess")}
              </h2>
              <p className="text-xl text-salon-text-dark">
                {t("processDescription")}
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="group flex gap-8 items-start p-8 rounded-3xl bg-gradient-to-r from-white to-salon-off-white shadow-soft hover:shadow-glow-pink transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-salon-pink to-salon-rose rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-3 group-hover:text-salon-pink transition-colors duration-300">
                      {step.step}
                    </h3>
                    <p className="text-salon-text-dark leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Before & After Gallery - Masonry Layout */}
        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("beforeAfterTitle")}
              </h2>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {/* Full Height Image - spans full height of the grid */}
              <div className="break-inside-avoid mb-6">
                <img
                  src={getImageUrl("/led.jpg")}
                  alt="Ritual nutrition before after - dramatic hair nourishment transformation"
                  className="w-full object-cover shadow-soft"
                  style={{ aspectRatio: "1/2" }}
                />
              </div>

              {/* Square Image */}
              <div className="break-inside-avoid mb-6">
                <img
                  src={getImageUrl("/led.jpg")}
                  alt="LED therapy results - nourished hair transformation"
                  className="w-full object-cover shadow-soft aspect-square"
                />
              </div>

              {/* Landscape Image */}
              <div className="break-inside-avoid mb-6">
                <img
                  src={getImageUrl("/led.jpg")}
                  alt="Hair nutrition results - healthy hair restoration"
                  className="w-full object-cover shadow-soft"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>

              {/* Portrait Image */}
              <div className="break-inside-avoid mb-6">
                <img
                  src={getImageUrl("/led.jpg")}
                  alt="Professional ritual treatment results"
                  className="w-full object-cover shadow-soft"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>

              {/* Medium Landscape */}
              <div className="break-inside-avoid mb-6">
                <img
                  src={getImageUrl("/led.jpg")}
                  alt="Nourished healthy hair after ritual treatment"
                  className="w-full object-cover shadow-soft"
                  style={{ aspectRatio: "3/2" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Aftercare */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("afterCare")}
              </h2>
              <p className="text-xl text-salon-text-dark">
                {t("afterCareDescription")}
              </p>
            </div>

            <div className="bg-gradient-to-br from-salon-off-white to-salon-cream rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {afterCare.map((instruction, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-salon-pink rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-salon-text-dark font-medium">
                        {instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risks & Safety */}
        <section className="py-20 bg-salon-off-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("risksAndSafety")}
              </h2>
              <p className="text-xl text-salon-text-dark max-w-3xl mx-auto">
                {t("safetyText")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Perfect For */}
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-display font-bold text-salon-text-dark">
                    {t("whoItsFor")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {perfectFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-salon-pink rounded-full"></div>
                      <span className="text-salon-text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Recommended For */}
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  <h3 className="text-2xl font-display font-bold text-salon-text-dark">
                    {t("whoItsNotFor")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-salon-text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-salon-off-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("ritualFAQ")}
              </h2>
              <p className="text-xl text-salon-text-dark">
                {t("faqDescription")}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-glow-pink transition-shadow duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-salon-off-white transition-colors duration-200">
                    <h3 className="text-lg font-display font-semibold text-salon-text-dark pr-4">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-6 h-6 text-salon-pink transform group-open:rotate-90 transition-transform duration-200 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-salon-text-medium leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-8">
                  {t("localSeoTitle")}
                </h2>
                <p className="text-lg text-salon-text-dark leading-relaxed mb-8">
                  {t("localSeoText")}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-salon-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-salon-pink mb-1">
                        {t("visitUs")}
                      </h3>
                      <p className="text-salon-text-dark">
                        {t("salonAddress")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-salon-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-salon-pink mb-1">
                        {t("callUs")}
                      </h3>
                      <p className="text-salon-text-dark">+32 9 222 00 00</p>
                    </div>
                  </div>
                  <p className="text-sm text-salon-text-dark italic">
                    {t("servingAreas")}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-salon-pink to-salon-rose rounded-3xl p-8 text-white shadow-glow-pink">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    {t("whyChooseUs")}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>{t("expertise")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>{t("premiumProducts")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>{t("personalizedConsultation")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>{t("satisfiedClients")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-salon-pink via-salon-rose to-salon-lavender text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t("bookingCTA")}
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              {t("bookingSubtext")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={`/${lng}#contact`}
                className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
              >
                {t("bookAppointment")}
                <ChevronRight size={24} className="ml-2" />
              </Link>
              <Link
                href={`/${lng}/services`}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
              >
                {t("viewAllServices")}
              </Link>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}
