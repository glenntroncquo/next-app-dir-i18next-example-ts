import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
        <header className="relative isolate min-h-[78vh] overflow-hidden">
          <ServiceMedia
            src={service.image}
            alt={service.imageAlt}
            kind={service.media}
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-salon-softer-pink/80 via-white/10 to-salon-text-dark/80" />
          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-36 md:pb-20">
            <p className="mb-4 inline-flex w-fit rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-salon-pink shadow-soft backdrop-blur-md">
              {service.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              {service.intro}
            </p>
            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/50 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
                <dt className="text-sm text-salon-text-medium">Prijs</dt>
                <dd className="mt-1 text-2xl font-bold text-salon-pink">
                  {service.priceLabel}
                </dd>
              </div>
              {service.duration ? (
                <div className="rounded-2xl border border-white/50 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
                  <dt className="text-sm text-salon-text-medium">Duur</dt>
                  <dd className="mt-1 text-2xl font-bold text-salon-pink">
                    {service.duration}
                  </dd>
                </div>
              ) : null}
              {service.holds ? (
                <div className="rounded-2xl border border-white/50 bg-white/80 p-5 shadow-soft backdrop-blur-sm">
                  <dt className="text-sm text-salon-text-medium">Houdt</dt>
                  <dd className="mt-1 text-2xl font-bold text-salon-pink">
                    {service.holds}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </header>

        <div>
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <Breadcrumbs items={crumbs} />
          </div>

          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-2 md:py-16">
            <div className="glass-card p-8">
              <p className="mb-3 text-sm font-medium text-salon-pink">
                De behandeling
              </p>
              <h2 className="font-display text-3xl font-bold text-salon-text-dark md:text-4xl">
                Wat het is
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-salon-text-medium">
                {service.whatIs}
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="mb-3 text-sm font-medium text-salon-pink">
                In de salon
              </p>
              <h2 className="font-display text-3xl font-bold text-salon-text-dark md:text-4xl">
                Hoe we werken
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-salon-text-medium">
                {service.howItWorks}
              </p>
            </div>
          </section>

          {service.process && service.process.length > 0 ? (
            <section className="bg-white py-16">
              <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
                {service.process.map((step, index) => (
                  <div key={step.title} className="glass-card p-8">
                    <p className="text-sm font-medium text-salon-pink">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-salon-text-dark">
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

          <section className="bg-gradient-to-br from-salon-off-white to-salon-cream py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-center font-display text-4xl font-bold text-salon-text-dark md:text-5xl">
                Waarom deze behandeling
              </h2>
              <ul className="mt-12 grid gap-6 md:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit.title} className="rounded-3xl bg-white p-8 shadow-soft">
                    <h3 className="font-display text-xl font-bold text-salon-text-dark">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-salon-text-medium">
                      {benefit.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {service.aftercare && service.aftercare.length > 0 ? (
            <section className="bg-white py-16 md:py-20">
              <div className="mx-auto max-w-4xl px-6">
                <h2 className="font-display text-4xl font-bold text-salon-text-dark">
                  Nazorg
                </h2>
                <p className="mt-3 text-salon-text-medium">Wat jij doet thuis.</p>
                <ul className="mt-8 space-y-4 rounded-3xl bg-gradient-to-br from-salon-off-white to-salon-cream p-8">
                  {service.aftercare.map((item) => (
                    <li
                      key={item}
                      className="border-l-4 border-salon-pink pl-5 leading-relaxed text-salon-text-dark"
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
              <h2 className="font-display text-3xl font-bold text-salon-text-dark md:text-4xl">
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

          <section className="bg-gradient-to-r from-salon-pink to-salon-rose py-16 text-white md:py-20">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <h2 className="font-display text-4xl font-bold md:text-5xl">
                Klaar voor een afspraak?
              </h2>
              <p className="mt-4 text-xl opacity-90">{service.priceLabel}.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={ROUTES.afspraak}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-salon-pink shadow-lg transition-colors hover:bg-salon-off-white"
                >
                  Afspraak maken
                  <ChevronRight size={24} className="ml-2" aria-hidden="true" />
                </Link>
                <Link
                  href={ROUTES.diensten}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-salon-pink"
                >
                  Alle diensten
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-white pb-20 pt-12">
            <div className="mx-auto max-w-6xl px-6">
              <p className="mb-6 text-sm font-medium text-salon-pink">
                Verder in de salon
              </p>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={item.path} className="glass-card-hover block p-6">
                      <p className="font-display text-xl font-semibold text-salon-text-dark">
                        {item.hubTitle}
                      </p>
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
