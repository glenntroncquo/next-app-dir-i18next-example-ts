import { Metadata } from "next";
import { notFound } from "next/navigation";
import { languages } from "../../i18n/settings";
import { getT } from "../../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { companyId } from "../../../lib/company_id";
import { supabase } from "../../../lib/supabase";
import BookingClient from "./BookingClient";

interface PageProps {
  params: Promise<{ lng: string }>;
}
const salonTheme = {
  primary: "#FF8FB2",
  primaryHover: "#FFBDD4",
  primaryLight: "#FFF0F7",
  secondary: "#FFBDD4",
  text: "#4A3F45",
  background: "#FF8FB2",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: `${t("bookAppointment")} - D'Ana Hair Merelbeke`,
    description: `Book your appointment at D'Ana Hair Merelbeke. Professional Brazilian keratin and botox treatments. Easy online booking system. Call +32 9 222 00 00 or book online.`,
    keywords: `book appointment hair salon Merelbeke, D'Ana Hair booking, keratin treatment appointment, hair salon online booking, Brazilian keratin booking Ghent, ${t(
      "seoKeywords"
    )}`,
    openGraph: {
      title: `Book Your Appointment - D'Ana Hair Merelbeke`,
      description: `Schedule your Brazilian keratin or botox treatment at D'Ana Hair. Professional hair care in Merelbeke, Ghent & Oudenaarde.`,
      siteName: t("siteName"),
      locale: lng,
      type: "website",
    },
    alternates: {
      canonical: `https://danahair.be/${lng}/booking`,
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function BookingPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  // Structured Data for Local Business Booking
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${t("bookAppointment")} - D'Ana Hair`,
    description:
      "Book your appointment at D'Ana Hair for professional Brazilian keratin and botox treatments",
    url: `https://danahair.be/${lng}/booking`,
    mainEntity: {
      "@type": "HairSalon",
      name: "D'Ana Hair",
      telephone: "+32 9 222 00 00",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hundelgemsesteenweg 1A",
        addressLocality: "Merelbeke",
        postalCode: "9820",
        addressCountry: "BE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-salon-softer-pink">
        {/* <Navbar currentLng={lng} /> */}

        {/* Hero Section */}
        <section className="relative md:pt-32 pt-24 pb-16">
          <BookingClient
          />
        </section>

        {/* <Footer lng={lng} /> */}
      </div>
    </>
  );
}
