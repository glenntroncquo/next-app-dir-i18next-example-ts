import Link from "next/link";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { JsonLd } from "@/app/components/JsonLd";
import { EditorialFaq } from "./EditorialFaq";
import { ServiceMedia } from "./ServiceMedia";
import { NAP, ROUTES, absoluteUrl } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { ServiceContent } from "@/lib/content/types";
import { SERVICES } from "@/lib/content/services";

export function ServiceDetailView({ service }: { service: ServiceContent }) {
  const crumbs = [
    { name: "Home", href: ROUTES.home },
    { name: "Diensten", href: ROUTES.diensten },
    { name: service.hubTitle, href: service.path },
  ];
  const faqs = service.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
  const others = SERVICES.filter((item) => item.slug !== service.slug).slice(
    0,
    4,
  );

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.seoDescription,
          url: absoluteUrl(service.path),
          price: service.priceFrom,
        })}
      />
      {service.includeFaqSchema ? <JsonLd data={faqPageJsonLd(faqs)} /> : null}
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <article>
        <header className="relative isolate min-h-[78vh] overflow-hidden bg-atelier-ink">
          <ServiceMedia
            src={service.image}
            alt={service.imageAlt}
            kind={service.media}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="atelier-photo-veil pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-atelier-cream/80 via-atelier-ink/20 to-atelier-ink/85" />
          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36 md:pb-20">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.3em] text-atelier-brass-light">
              {service.eyebrow}
            </p>
            <h1 className="max-w-4xl font-editorial text-5xl font-medium leading-[0.95] text-atelier-cream md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-atelier-cream/85 md:text-xl">
              {service.intro}
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-atelier-cream">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-atelier-brass">
                  Prijs
                </dt>
                <dd className="mt-1 font-editorial text-2xl">{service.priceLabel}</dd>
              </div>
              {service.duration ? (
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-atelier-brass">
                    Duur
                  </dt>
                  <dd className="mt-1 font-editorial text-2xl">{service.duration}</dd>
                </div>
              ) : null}
              {service.holds ? (
                <div>
                  <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-atelier-brass">
                    Houdt
                  </dt>
                  <dd className="mt-1 font-editorial text-2xl">{service.holds}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </header>

        <div className="bg-atelier-cream">
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <Breadcrumbs items={crumbs} variant="editorial" />
          </div>

          <section className="mx-auto grid max-w-6xl gap-16 px-6 py-8 md:grid-cols-2 md:py-16">
            <div>
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
                De behandeling
              </p>
              <h2 className="font-editorial text-4xl font-medium text-atelier-ink">
                Wat het is
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-atelier-muted">
                {service.whatIs}
              </p>
            </div>
            <div>
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
                In de salon
              </p>
              <h2 className="font-editorial text-4xl font-medium text-atelier-ink">
                Hoe we werken
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-atelier-muted">
                {service.howItWorks}
              </p>
            </div>
          </section>

          {service.process && service.process.length > 0 ? (
            <section className="border-y border-atelier-brass/20 bg-atelier-paper">
              <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
                {service.process.map((step, index) => (
                  <div key={step.title}>
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-atelier-brass">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-editorial text-2xl text-atelier-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-atelier-muted">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="font-editorial text-4xl font-medium text-atelier-ink md:text-5xl">
              Waarom deze behandeling
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="border-t border-atelier-brass/30 pt-6"
                >
                  <h3 className="font-editorial text-2xl text-atelier-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-atelier-muted">
                    {benefit.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {service.aftercare && service.aftercare.length > 0 ? (
            <section className="bg-atelier-ink py-16 text-atelier-cream md:py-20">
              <div className="mx-auto max-w-4xl px-6">
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
                  Nazorg
                </p>
                <h2 className="font-editorial text-4xl font-medium">Wat jij doet</h2>
                <ul className="mt-8 space-y-4">
                  {service.aftercare.map((item) => (
                    <li
                      key={item}
                      className="border-l border-atelier-brass pl-5 leading-relaxed text-atelier-cream/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {service.showLocalLinks ? (
            <section className="mx-auto max-w-4xl px-6 py-16 text-center">
              <h2 className="font-editorial text-3xl font-medium text-atelier-ink md:text-4xl">
                In Merelbeke, nabij Gent
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-atelier-muted">
                D&apos;Ana Hair zit in Merelbeke-Melle, {NAP.streetAddress} —
                niet in Gent. Vanuit Gent is het ongeveer 15 minuten. We hebben
                geen tweede adres. Tel. {NAP.telephone}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={ROUTES.keratineMerelbeke} className="btn-atelier">
                  Keratine in Merelbeke
                </Link>
                <Link href={ROUTES.keratineGent} className="btn-atelier">
                  Keratine nabij Gent
                </Link>
              </div>
            </section>
          ) : null}

          <EditorialFaq
            faqs={faqs}
            description={
              service.includeFaqSchema
                ? "Merelbeke, Gent, België, duur, nazorg, gekleurd en afro haar."
                : undefined
            }
          />

          <section className="border-t border-atelier-brass/20 px-6 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-editorial text-4xl font-medium text-atelier-ink md:text-5xl">
                Een afspraak in de salon
              </h2>
              <p className="mt-4 text-atelier-muted">{service.priceLabel}.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={ROUTES.afspraak} className="btn-atelier btn-atelier-solid">
                  Afspraak maken
                </Link>
                <Link href={ROUTES.diensten} className="btn-atelier">
                  Alle behandelingen
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t border-atelier-brass/20 pb-20">
            <div className="mx-auto max-w-6xl px-6 pt-12">
              <p className="mb-6 text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
                Verder in de salon
              </p>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={item.path}
                      className="group block border border-atelier-brass/25 p-5 transition-colors hover:border-atelier-brass"
                    >
                      <p className="font-editorial text-2xl text-atelier-ink group-hover:text-atelier-rose">
                        {item.hubTitle}
                      </p>
                      <p className="mt-2 text-sm text-atelier-muted">
                        {item.priceLabel}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
