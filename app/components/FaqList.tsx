export type FaqItem = { question: string; answer: string };

export function FaqList({
  faqs,
  title = "Veelgestelde vragen",
  description,
}: {
  faqs: FaqItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-salon-text-medium">{description}</p>
        ) : null}
        <div className="mt-10 divide-y divide-stone/50 border-y border-stone/50">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-xl text-ink md:text-2xl">
                  {faq.question}
                </h3>
                <span aria-hidden="true" className="mt-1 text-stone group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-salon-text-medium">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
