import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PageShell } from "./PageShell";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";
import { getImageUrl } from "../../lib/imageUrl";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  type BreadcrumbItem,
} from "../../lib/schema";
import { ROUTES, absoluteUrl } from "../../lib/site";
import type { ExtraService } from "../../lib/extra-services";

export function ExtraServiceView({ service }: { service: ExtraService }) {
  const crumbs: BreadcrumbItem[] = [
    { name: "Home", href: ROUTES.home },
    { name: "Diensten", href: ROUTES.diensten },
    { name: service.title, href: service.path },
  ];
  const faqs = service.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <PageShell>
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.seoDescription,
          url: absoluteUrl(service.path),
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <section className="relative md:pt-32 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-salon-pink/5 via-salon-rose/5 to-salon-lavender/5"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <Breadcrumbs items={crumbs} />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-salon-pink mb-6 font-medium">
                    {service.heroSubtitle}
                  </p>
                </div>
                <p className="text-xl text-salon-text-dark leading-relaxed">
                  {service.intro}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                    <div className="text-2xl font-bold text-salon-pink mb-1">
                      Op aanvraag
                    </div>
                    <div className="text-sm text-salon-text-medium">Prijs</div>
                  </div>
                  {service.duration ? (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
                      <div className="text-2xl font-bold text-salon-pink mb-1">
                        {service.duration}
                      </div>
                      <div className="text-sm text-salon-text-medium">Duur</div>
                    </div>
                  ) : null}
                </div>
              </div>
              <img
                src={getImageUrl(service.image)}
                alt={`${service.title} bij D'Ana Hair in Merelbeke`}
                className="w-full h-full object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl text-center font-display font-bold text-salon-text-dark mb-8">
              Wat houdt het in?
            </h2>
            <p className="text-lg text-salon-text-dark leading-relaxed text-center max-w-3xl mx-auto mb-8">
              {service.whatIs}
            </p>
            <div className="bg-salon-off-white rounded-2xl p-8">
              <h3 className="text-2xl font-display font-semibold text-salon-pink mb-4">
                Hoe het werkt
              </h3>
              <p className="text-salon-text-dark leading-relaxed">
                {service.howItWorks}
              </p>
              <p className="text-salon-text-medium mt-4">{service.priceNote}</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-salon-off-white to-salon-cream">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl text-center font-display font-bold text-salon-text-dark mb-16">
              Waarom bij D&apos;Ana Hair
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-3xl p-8 shadow-soft border border-white/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-salon-pink to-salon-rose rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-salon-text-dark mb-4 text-center">
                    {b.title}
                  </h3>
                  <p className="text-salon-text-dark leading-relaxed text-center">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqList faqs={faqs} />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <p className="text-salon-text-medium">
              Bekijk ook onze{" "}
              <Link href={ROUTES.keratine} className="text-salon-pink underline">
                keratinebehandeling
              </Link>
              ,{" "}
              <Link href={ROUTES.diensten} className="text-salon-pink underline">
                alle diensten
              </Link>{" "}
              of maak een{" "}
              <Link href={ROUTES.afspraak} className="text-salon-pink underline">
                afspraak
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-rose text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Klaar om een afspraak te maken?
            </h2>
            <p className="text-xl mb-10 opacity-90">{service.priceNote}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={ROUTES.afspraak}
                className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
              >
                Afspraak maken
                <ChevronRight size={24} className="ml-2" />
              </Link>
              <Link
                href={ROUTES.diensten}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
              >
                Alle diensten
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
