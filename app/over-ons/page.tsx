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
      <div className="bg-cream">
        <Navbar />
        <section className="px-6 pb-12 pt-28 md:pt-36">
          <div className="mx-auto max-w-5xl">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-4">Moeder en dochter</p>
            <h1 className="font-display text-5xl text-ink md:text-7xl">
              Team D&apos;Ana
            </h1>
            <div className="mt-10 overflow-hidden">
              <img
                src={getImageUrl("/team.jpg")}
                alt="Daniela en Ana Paula — team D'Ana Hair"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-stone/40 py-16">
          <div className="section-container">
            <p className="eyebrow mb-4">Het atelier</p>
            <h2 className="max-w-3xl font-display text-4xl text-ink md:text-5xl">
              Daniela en Ana Paula
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-salon-text-medium">
              Daniela — oprichtster en keratinespecialiste met meer dan 10 jaar
              ervaring. Ana Paula — medezaakvoerder, gedreven door selfcare.
              Samen: natuurlijk, gezond haar in Merelbeke-Melle.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {teamMembers.map((member) => (
                <div key={member.name}>
                  <div className="relative aspect-[3/4] max-h-[560px] overflow-hidden bg-ink">
                    <img
                      src={member.imageSrc}
                      alt={`${member.name} — ${member.role}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-5">{member.experience} jaar</p>
                  <h3 className="mt-2 font-display text-3xl text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-salon-text-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
