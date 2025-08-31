import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Check, Star, Clock, Shield, Sparkles, AlertTriangle, MapPin, Phone, Mail } from "lucide-react";
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

  return {
    title: t("keratinSeoTitle"),
    description: t("keratinSeoDescription"),
    keywords: `keratin treatment, Brazilian keratin, hair smoothing, frizz treatment, keratin treatment Merelbeke, keratin treatment Ghent, ${t("seoKeywords")}`,
    openGraph: {
      title: t("keratinSeoTitle"),
      description: t("keratinSeoDescription"),
      siteName: t("siteName"),
      locale: lng,
      type: "website",
      images: [
        {
          url: getImageUrl("/keratine.webp"),
          width: 1200,
          height: 630,
          alt: `${t("keratinHeroTitle")} - Before and after results at D'Ana Hair Merelbeke`,
        },
      ],
    },
    alternates: {
      canonical: `https://danahair.be/${lng}/services/keratine`,
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function KeratinePage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const benefits = [
    { 
      icon: <Sparkles className="w-8 h-8 text-salon-pink" />,
      title: t("benefit1"), 
      desc: t("benefit1Desc") 
    },
    { 
      icon: <Clock className="w-8 h-8 text-salon-pink" />,
      title: t("benefit2"), 
      desc: t("benefit2Desc") 
    },
    { 
      icon: <Shield className="w-8 h-8 text-salon-pink" />,
      title: t("benefit3"), 
      desc: t("benefit3Desc") 
    },
    { 
      icon: <Star className="w-8 h-8 text-salon-pink" />,
      title: t("benefit5"), 
      desc: t("benefit5Desc") 
    },
  ];

  const processSteps = [
    { step: t("processStep1"), desc: t("processStep1Desc") },
    { step: t("processStep2"), desc: t("processStep2Desc") },
    { step: t("processStep3"), desc: t("processStep3Desc") },
    { step: t("processStep4"), desc: t("processStep4Desc") },
    { step: t("processStep5"), desc: t("processStep5Desc") },
  ];

  const faqs = [
    { question: "Is keratin treatment safe?", answer: t("faq4Answer") },
    { question: t("faq1"), answer: t("faq1Answer") },
    { question: t("faq7"), answer: t("faq7Answer") },
    { question: t("faq2"), answer: t("faq2Answer") },
    { question: t("faq3"), answer: t("faq3Answer") },
    { question: t("faq5"), answer: t("faq5Answer") },
    { question: t("faq6"), answer: t("faq6Answer") },
  ];

  const perfectFor = [t("perfectFor1"), t("perfectFor2"), t("perfectFor3"), t("perfectFor4")];
  const notFor = [t("notFor1"), t("notFor2"), t("notFor3")];
  const costFactors = [t("costFactor1"), t("costFactor2"), t("costFactor3"), t("costFactor4")];
  const afterCare = [t("afterCare1"), t("afterCare2"), t("afterCare3"), t("afterCare4")];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t("keratinHeroTitle"),
    "description": t("keratinSeoDescription"),
    "provider": {
      "@type": "HairSalon",
      "name": "D'Ana Hair",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hundelgemsesteenweg 1A",
        "addressLocality": "Merelbeke",
        "postalCode": "9820",
        "addressCountry": "BE"
      },
      "telephone": "+32 9 222 00 00"
    },
    "areaServed": ["Merelbeke", "Ghent", "Oudenaarde", "Belgium"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "150-250"
    }
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
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-salon-pink to-salon-rose text-white px-6 py-3 rounded-full shadow-glow-pink">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Premium Brazilian Treatment</span>
                </div>

                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
                    {t("keratinHeroTitle")}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-salon-pink mb-8 font-medium leading-relaxed">
                    {t("keratinHeroSubtitle")}
                  </h2>
                </div>
                
                <p className="text-xl text-salon-text-medium leading-relaxed max-w-2xl">
                  {t("keratinIntroText")}
                </p>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">€150-€250</div>
                    <div className="text-sm text-salon-text-medium">{t("startingPrice")}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-3xl font-bold text-salon-pink mb-1">2-3h</div>
                    <div className="text-sm text-salon-text-medium">{t("duration")}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50 col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-salon-pink mb-1">3-6m</div>
                    <div className="text-sm text-salon-text-medium">Lasts up to</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/${lng}/contact`}
                    className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    {t("bookAppointment")}
                    <ChevronRight size={24} className="ml-2" />
                  </Link>
                  <a
                    href="#how-it-works"
                    className="btn-outline inline-flex items-center justify-center px-8 py-4 text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={getImageUrl("/keratine.webp")}
                    alt="Brazilian keratin treatment before and after results at D'Ana Hair Merelbeke - smooth frizz-free hair transformation"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-glow-pink">
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <div className="text-salon-text-dark font-semibold">4.9/5</div>
                  </div>
                  <div className="text-sm text-salon-text-medium mt-1">200+ Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Is + How It Works - Combined */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-8">
                  {t("whatIsKeratin")}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-salon-text-medium leading-relaxed">
                    {t("whatIsKeratinText")}
                  </p>
                  <div className="bg-salon-off-white rounded-2xl p-8">
                    <h3 className="text-2xl font-display font-semibold text-salon-pink mb-4">
                      {t("howItWorks")}
                    </h3>
                    <p className="text-salon-text-medium leading-relaxed">
                      {t("howItWorksText")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={getImageUrl("/hero.webp")}
                  alt="Keratin treatment process at D'Ana Hair showing hair transformation from frizzy to smooth"
                  className="w-full h-96 object-cover rounded-2xl shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Redesigned Grid */}
        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("keratinBenefits")}
              </h2>
              <p className="text-xl text-salon-text-medium max-w-3xl mx-auto">
                Transform your daily hair routine with these incredible benefits
              </p>
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
                    <p className="text-salon-text-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - Step by Step */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("ourKeratinProcess")}
              </h2>
              <p className="text-xl text-salon-text-medium">
                Our professional 5-step process ensures perfect results every time
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
                    <p className="text-salon-text-medium leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("beforeAfterTitle")}
              </h2>
              <p className="text-xl text-salon-text-medium">
                {t("beforeAfterSubtitle")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Before/After Cards */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft">
                <div className="relative">
                  <img
                    src={getImageUrl("/keratine.webp")}
                    alt="Keratin treatment before after results Merelbeke - frizzy curly hair to smooth straight hair transformation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t("beforeText")} / {t("afterText")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-salon-text-dark mb-2">Curly to Smooth</h3>
                  <p className="text-salon-text-medium text-sm">Dramatic frizz reduction and smoothing</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-soft">
                <div className="relative">
                  <img
                    src={getImageUrl("/botox.mp4")}
                    alt="Brazilian keratin treatment results Ghent - damaged hair restoration before after D'Ana Hair salon"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t("beforeText")} / {t("afterText")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-salon-text-dark mb-2">Damage Repair</h3>
                  <p className="text-salon-text-medium text-sm">Restored health and shine</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-soft md:col-span-2 lg:col-span-1">
                <div className="relative">
                  <img
                    src={getImageUrl("/led.jpg")}
                    alt="Keratin hair smoothing treatment Oudenaarde - professional Brazilian keratin application results"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-salon-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t("beforeText")} / {t("afterText")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-salon-text-dark mb-2">Frizz Control</h3>
                  <p className="text-salon-text-medium text-sm">Humidity-proof smoothness</p>
                </div>
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
              <p className="text-xl text-salon-text-medium">
                Follow these simple steps to maximize your keratin treatment results
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
                      <p className="text-salon-text-dark font-medium">{instruction}</p>
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
              <p className="text-xl text-salon-text-medium max-w-3xl mx-auto">
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
                      <span className="text-salon-text-medium">{item}</span>
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
                      <span className="text-salon-text-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Information */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                Investment & Pricing
              </h2>
              <div className="text-6xl font-bold text-salon-pink mb-4">€150 - €250</div>
              <p className="text-xl text-salon-text-medium">
                Professional keratin treatment with premium Brazilian products
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-salon-off-white to-salon-cream rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-6 text-center">
                {t("costFactors")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-salon-pink rounded-full"></div>
                    <span className="text-salon-text-medium">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-salon-off-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("keratinFAQ")}
              </h2>
              <p className="text-xl text-salon-text-medium">
                Get answers to the most common questions about keratin treatments
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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-8">
                  Keratin Treatment in Merelbeke
                </h2>
                <p className="text-lg text-salon-text-medium leading-relaxed mb-8">
                  {t("localSeoText")}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-salon-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-salon-text-dark mb-1">{t("visitUs")}</h3>
                      <p className="text-salon-text-medium">{t("salonAddress")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-salon-pink flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-salon-text-dark mb-1">Call Us</h3>
                      <p className="text-salon-text-medium">+32 9 222 00 00</p>
                    </div>
                  </div>
                  <p className="text-sm text-salon-text-light italic">
                    {t("servingAreas")}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-salon-pink to-salon-rose rounded-3xl p-8 text-white shadow-glow-pink">
                  <h3 className="text-2xl font-display font-bold mb-6">Why Choose D&apos;Ana Hair?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>10+ years Brazilian keratin expertise</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>Formaldehyde-free premium products</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>Personalized consultation included</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <span>200+ satisfied clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                href={`/${lng}/contact`}
                className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
              >
                {t("bookAppointment")}
                <ChevronRight size={24} className="ml-2" />
              </Link>
              <Link
                href={`/${lng}/services`}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}