import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { languages } from "../../i18n/settings";
import { getT } from "../../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getImageUrl } from "../../../lib/imageUrl";

interface PageProps {
  params: Promise<{ lng: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: `${t("ourPremiumServices")} - ${t("siteName")}`,
    description: t("ourServicesDesc"),
    keywords: t("seoKeywords"),
    openGraph: {
      title: `${t("ourPremiumServices")} - ${t("siteName")}`,
      description: t("ourServicesDesc"),
      siteName: t("siteName"),
      locale: lng,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function ServicesPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const services = [
    {
      id: "keratine",
      title: t("serviceKeratinTitle"),
      description: t("serviceKeratinDescription"),
      price: "€150-€250",
      duration: t("durationKeratin"),
      image: getImageUrl("/keratine.webp"),
      features: [
        t("featureHairAnalysis"),
        t("featureKeratinApplication"),
        t("featureSmoothingTechnology"),
        t("featureLongLasting"),
        t("featureAftercare"),
      ],
    },
    {
      id: "botox",
      title: t("serviceBotoxTitle"),
      description: t("serviceBotoxDescription"),
      price: "€150-€250",
      duration: t("durationBotox"),
      image: getImageUrl("/botox.mp4"),
      features: [
        t("featureHealthAssessment"),
        t("featureBotoxApplication"),
        t("featureDeepConditioning"),
        t("featureStrengthening"),
        t("featureProfessionalStyling"),
      ],
    },
    {
      id: "ritual",
      title: t("serviceRitualTitle"),
      description: t("serviceRitualDescription"),
      price: "€60",
      duration: t("durationRitual"),
      image: getImageUrl("/led.jpg"),
      features: [
        t("featureBrazilianNutrition"),
        t("featureLEDTherapy"),
        t("featureDeepNourishment"),
        t("featureScalpStimulation"),
        t("featureConsultationAftercare"),
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar currentLng={lng} />

        {/* Hero Section */}
        <section className="md:pt-32 pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Content Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("ourPremiumServices")}
              </h1>

              <p className="text-lg text-salon-text-medium leading-relaxed max-w-3xl mx-auto">
                {t("ourServicesDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-soft hover:shadow-glow-pink transition-all duration-300 overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    {service.image.endsWith('.mp4') ? (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-salon-text-dark mb-3 group-hover:text-salon-pink transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-salon-text-medium text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Price and Duration */}
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div>
                        <div className="font-semibold text-salon-pink">
                          {service.price}
                        </div>
                        <div className="text-salon-text-light text-xs">
                          {t("startingPrice")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-salon-pink">
                          {service.duration}
                        </div>
                        <div className="text-salon-text-light text-xs">
                          {t("duration")}
                        </div>
                      </div>
                    </div>

                    {/* Features Preview (first 3) */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-salon-text-medium">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-salon-text-light">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={`/${lng}/services/${service.id}`}
                      className="w-full btn-outline text-sm py-2 px-4 rounded-full inline-flex items-center justify-center group-hover:btn- transition-all duration-300"
                    >
                      {t("learnMore")}
                      <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Link
              href={`/${lng}/contact`}
              className="btn-primary px-8 py-3 inline-flex items-center"
            >
              {t("bookAppointment")}
              <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}