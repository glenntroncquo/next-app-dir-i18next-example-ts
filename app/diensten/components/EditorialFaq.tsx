import type { ServiceFaq } from "@/lib/content/types";

export function EditorialFaq({
  faqs,
  title = "Vragen die we vaak horen",
  description,
}: {
  faqs: ServiceFaq[];
  title?: string;
  description?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="border-t border-atelier-brass/25 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-[0.68rem] uppercase tracking-[0.28em] text-atelier-brass">
          FAQ
        </p>
        <h2 className="font-editorial text-4xl font-medium text-atelier-ink md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-atelier-muted">{description}</p>
        ) : null}
        <div className="mt-10 divide-y divide-atelier-brass/20">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-editorial text-xl text-atelier-ink md:text-2xl">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 text-atelier-brass transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-atelier-muted leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
