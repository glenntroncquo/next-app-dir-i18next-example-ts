import { Metadata } from "next";
import { notFound } from "next/navigation";
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://danahair.be";
  const currentUrl = `${baseUrl}/${lng}/about`;

  return {
    title: `${t("meetTeamDana")} - ${t("siteName")}`,
    description: t("teamDescription"),
    keywords: t("seoKeywords"),
    alternates: {
      canonical: currentUrl,
      languages: {
        nl: `${baseUrl}/nl/about`,
        en: `${baseUrl}/en/about`,
        fr: `${baseUrl}/fr/about`,
        pt: `${baseUrl}/pt/about`,
      },
    },
    openGraph: {
      title: `${t("meetTeamDana")} - ${t("siteName")}`,
      description: t("teamDescription"),
      url: currentUrl,
      siteName: t("siteName"),
      locale: lng,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("meetTeamDana")} - ${t("siteName")}`,
      description: t("teamDescription"),
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function AboutPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const teamMembers = [
    {
      name: "Daniela",
      role: t("founderKeratineExpert"),
      imageSrc: getImageUrl("/daniela.jpg"),
      experience: `10+ ${t("years")}`,
    },
    {
      name: "Ana Paula",
      role: t("coFounderKeratineExpert"),
      imageSrc: getImageUrl("/anapaula.jpg"),
      experience: `4+ ${t("years")}`,
    },
  ];

  return (
    <>
      <div className="">
        <Navbar currentLng={lng} />

        {/* Magazine Cover Hero */}
        <section className="relative min-h- flex items-center justify-center overflow-hidden mt-28">
          {/* Background Pattern */}

          {/* Main Content */}
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              <span className="text-salon-text-dark">
                {t("meetTeamDana").split(" ")[0]}
              </span>
              <br />
              <span className="text-salon-pink bg-gradient-to-r from-salon-pink via-salon-rose to-salon-pink bg-clip-text text-transparent">
                {t("meetTeamDana").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Subtitle */}

            {/* Team Hero Image */}
            <div className="mb-8 max-w-3xl mx-auto">
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-salon-pink via-salon-rose to-salon-lavender rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>

                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-white/50">
                  <div className="aspect-[16/10]">
                    <img
                      src={getImageUrl("/team.jpg")}
                      alt="Daniela & Ana Paula - Team D'Ana Hair"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Hearts */}
                  <div className="absolute top-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    💕
                  </div>
                  <div
                    className="absolute bottom-6 left-6 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                    style={{ animationDelay: "200ms" }}
                  >
                    ❤️
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-salon-light-pink rounded-full opacity-15 animate-pulse-soft"></div>
          <div
            className="absolute top-2/3 right-1/4 w-32 h-32 bg-salon-lavender rounded-full opacity-20 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-salon-rose rounded-full opacity-25 animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          ></div>
        </section>

        {/* Team Showcase */}
        <section className="py- relative bg-white/50">
          <div className="section-container">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-salon-pink to-salon-rose text-white px-8 py-3 rounded-full mb-6 font-medium tracking-wide uppercase text-sm shadow-soft">
                ★ {t("ourTeam")} ★
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-salon-text-dark mb-6">
                {t("teamBehindDanaHair")}
              </h2>
              <p className="text-lg text-salon-text-medium max-w-2xl mx-auto">
                {t("teamDescription")}
              </p>
            </div>

            {/* Team Grid - 2 Members Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      {/* Card Background */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-salon-pink/20 via-salon-rose/20 to-salon-lavender/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                      {/* Image Container */}
                      <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden shadow-soft bg-salon-cream/20 group-hover:shadow-glow-pink transition-all duration-300">
                        <img
                          src={member.imageSrc}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-salon-pink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Experience Badge */}
                      <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-salon-pink to-salon-rose text-white rounded-full w-16 h-16 flex items-center justify-center shadow-glow-pink group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                        <div className="text-center">
                          <div className="text-sm font-bold leading-tight">
                            {member.experience.split(" ")[0]}
                          </div>
                          <div className="text-[9px] uppercase tracking-wide">
                            {t("years")}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-display font-bold text-salon-text-dark group-hover:text-salon-pink transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm text-salon-text-medium leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}