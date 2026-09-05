import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { getImageUrl } from "../../lib/imageUrl";
import { pageMetadata } from "../../lib/metadata";
import { breadcrumbJsonLd } from "../../lib/schema";
import { ROUTES } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Over ons",
  description:
    "Daniela en Ana Paula, moeder en dochter achter D'Ana Hair in Merelbeke-Melle. Keratinespecialisten met Braziliaanse roots.",
  path: ROUTES.overOns,
});

const crumbs = [
  { name: "Home", href: ROUTES.home },
  { name: "Over ons", href: ROUTES.overOns },
];

const teamMembers = [
  {
    name: "Daniela",
    role: "Oprichtster & keratine-expert",
    imageSrc: getImageUrl("/daniela.jpg"),
    experience: "10+",
  },
  {
    name: "Ana Paula",
    role: "Medezaakvoerder & keratine-expert",
    imageSrc: getImageUrl("/anapaula.jpg"),
    experience: "4+",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div>
        <Navbar />
        <section className="relative flex items-center justify-center overflow-hidden mt-28">
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <div className="mb-6 max-w-4xl mx-auto text-left">
              <Breadcrumbs items={crumbs} />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              <span className="text-salon-text-dark">Maak kennis met</span>
              <br />
              <span className="text-salon-pink bg-gradient-to-r from-salon-pink via-salon-rose to-salon-pink bg-clip-text text-transparent">
                team D&apos;Ana
              </span>
            </h1>

            <div className="mb-8 max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-salon-pink via-salon-rose to-salon-lavender rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft-lg border border-white/50">
                  <div className="aspect-[16/10]">
                    <img
                      src={getImageUrl("/team.jpg")}
                      alt="Daniela en Ana Paula — team D'Ana Hair"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white/50 py-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-salon-pink to-salon-rose text-white px-8 py-3 rounded-full mb-6 font-medium tracking-wide uppercase text-sm shadow-soft">
                ★ Ons team ★
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                Het team achter D&apos;Ana Hair
              </h2>
              <p className="text-lg text-salon-text-medium max-w-2xl mx-auto">
                Wij zijn Daniela & Ana Paula, het hart van D&apos;Ana Hair.
                Daniela — oprichtster en keratinespecialiste met meer dan 10
                jaar ervaring. Ana Paula — medezaakvoerder, gedreven door
                selfcare & positiviteit. Samen delen we onze passie voor
                natuurlijk, gezond en stralend haar. Welkom in onze wereld vol
                good vibes, glow-ups & groei.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-center group">
                    <div className="relative mb-6">
                      <div className="relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden shadow-soft bg-salon-cream/20 group-hover:shadow-glow-pink transition-all duration-300">
                        <img
                          src={member.imageSrc}
                          alt={`${member.name} — ${member.role}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-salon-pink to-salon-rose text-white rounded-full w-16 h-16 flex items-center justify-center shadow-glow-pink border-2 border-white">
                        <div className="text-center">
                          <div className="text-sm font-bold leading-tight">
                            {member.experience}
                          </div>
                          <div className="text-[9px] uppercase tracking-wide">
                            jaar
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-salon-text-dark group-hover:text-salon-pink">
                      {member.name}
                    </h3>
                    <p className="text-sm text-salon-text-medium">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
