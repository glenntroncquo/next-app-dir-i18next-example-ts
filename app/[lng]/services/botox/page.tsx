import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    title: `${t("serviceBotoxTitle")} - ${t("siteName")}`,
    description: t("serviceBotoxDescription"),
    keywords: `${t("serviceBotoxTitle")}, ${t("seoKeywords")}`,
    openGraph: {
      title: `${t("serviceBotoxTitle")} - ${t("siteName")}`,
      description: t("serviceBotoxDescription"),
      siteName: t("siteName"),
      locale: lng,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function BotoxPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const service = {
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
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar currentLng={lng} />

        <section className="md:pt-32 pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            {/* Service Video */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-96 object-cover"
                >
                  <source src={service.image} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Service Content */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {service.title}
              </h1>

              <p className="text-lg text-salon-text-medium leading-relaxed max-w-3xl mx-auto mb-8">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-salon-pink">
                    {service.price}
                  </div>
                  <div className="text-salon-text-medium">
                    {t("startingPrice")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-salon-pink">
                    {service.duration}
                  </div>
                  <div className="text-salon-text-medium">
                    {t("duration")}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-left">
                    <div className="w-2 h-2 bg-salon-pink rounded-full mr-3"></div>
                    <span className="text-salon-text-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="text-center">
              <Link
                href={`/${lng}/contact`}
                className="btn-primary px-8 py-3 inline-flex items-center"
              >
                {t("bookAppointment")}
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}