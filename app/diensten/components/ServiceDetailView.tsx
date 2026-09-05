import Link from "next/link";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { FaqList } from "@/app/components/FaqList";
import { JsonLd } from "@/app/components/JsonLd";
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
        <header className="relative isolate min-h-[78vh] overflow-hidden bg-ink">
          <ServiceMedia
            src={service.image}
            alt={service.imageAlt}
            kind={service.media}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-ink/60" />
          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36 md:pb-20">
            <p className="eyebrow mb-4 text-stone">{service.eyebrow}</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {service.intro}
            </p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-white">
              <div>
                <dt className="eyebrow text-stone">Prijs</dt>
                <dd className="mt-2 font-display text-2xl">{service.priceLabel}</dd>
              </div>
              {service.duration ? (
                <div>
                  <dt className="eyebrow text-stone">Duur</dt>
                  <dd className="mt-2 font-display text-2xl">{service.duration}</dd>
                </div>
              ) : null}
              {service.holds ? (
                <div>
                  <dt className="eyebrow text-stone">Houdt</dt>
                  <dd className="mt-2 font-display text-2xl">{service.holds}</dd>
                </div>
              ) : null}
            </dl>
          </div>
        </header>

        <div className="bg-cream">
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <Breadcrumbs items={crumbs} />
          </div>

          <section className="mx-auto grid max-w-6xl gap-16 px-6 py-12 md:grid-cols-2 md:py-20">
            <div>
              <p className="eyebrow mb-3">De behandeling</p>
              <h2 className="font-display text-4xl text-ink">Wat het is</h2>
              <p className="mt-5 text-lg leading-relaxed text-salon-text-medium">
                {service.whatIs}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">In de salon</p>
              <h2 className="font-display text-4xl text-ink">Hoe we werken</h2>
              <p className="mt-5 text-lg leading-relaxed text-salon-text-medium">
                {service.howItWorks}
              </p>
            </div>
          </section>

          {service.process && service.process.length > 0 ? (
            <section className="border-y border-stone/40 bg-paper">
              <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
                {service.process.map((step, index) => (
                  <div key={step.title}>
                    <p className="eyebrow">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-salon-text-medium">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h2 className="font-display text-4xl text-ink md:text-5xl">
              Waarom deze behandeling
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit.title} className="border-t border-stone/50 pt-6">
                  <h3 className="font-display text-2xl text-ink">{benefit.title}</h3>
                  <p className="mt-3 leading-relaxed text-salon-text-medium">
                    {benefit.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {service.aftercare && service.aftercare.length > 0 ? (
            <section className="bg-ink py-16 text-cream md:py-20">
              <div className="mx-auto max-w-4xl px-6">
                <p className="eyebrow mb-3 text-stone">Nazorg</p>
                <h2 className="font-display text-4xl">Wat jij doet</h2>
                <ul className="mt-8 space-y-4">
                  {service.aftercare.map((item) => (
                    <li
                      key={item}
                      className="border-l border-stone pl-5 leading-relaxed text-cream/85"
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
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                In Merelbeke, nabij Gent
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-salon-text-medium">
                D&apos;Ana Hair zit in Merelbeke-Melle, {NAP.streetAddress} —
                niet in Gent. Vanuit Gent is het ongeveer 15 minuten. We hebben
                geen tweede adres. Tel. {NAP.telephone}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={ROUTES.keratineMerelbeke} className="btn-outline">
                  Keratine in Merelbeke
                </Link>
                <Link href={ROUTES.keratineGent} className="btn-outline">
                  Keratine nabij Gent
                </Link>
              </div>
            </section>
          ) : null}

          {faqs.length > 0 ? (
            <FaqList
              faqs={faqs}
              description={
                service.includeFaqSchema
                  ? "Merelbeke, Gent, België, duur, nazorg, gekleurd en afro haar."
                  : undefined
              }
            />
          ) : null}

          <section className="border-t border-stone/40 px-6 py-16 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl text-ink md:text-5xl">
                Een afspraak in de salon
              </h2>
              <p className="mt-4 text-salon-text-medium">{service.priceLabel}.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={ROUTES.afspraak} className="btn-primary">
                  Afspraak maken
                </Link>
                <Link href={ROUTES.diensten} className="btn-outline">
                  Alle behandelingen
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t border-stone/40 pb-20">
            <div className="mx-auto max-w-6xl px-6 pt-12">
              <p className="eyebrow mb-6">Verder in de salon</p>
              <ul className="grid gap-px bg-stone/40 md:grid-cols-2 lg:grid-cols-4">
                {others.map((item) => (
                  <li key={item.slug} className="bg-cream">
                    <Link
                      href={item.path}
                      className="block p-6 transition-colors hover:bg-paper"
                    >
                      <p className="font-display text-2xl text-ink">{item.hubTitle}</p>
                      <p className="mt-2 text-sm text-salon-text-medium">
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
