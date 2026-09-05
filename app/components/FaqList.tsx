import { ChevronRight } from "lucide-react";

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
    <section className="py-20 bg-salon-off-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
            {title}
          </h2>
          {description ? (
            <p className="text-xl text-salon-text-dark">{description}</p>
          ) : null}
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-glow-pink transition-shadow duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-salon-off-white transition-colors duration-200">
                <h3 className="text-lg font-display font-semibold text-salon-text-dark pr-4">
                  {faq.question}
                </h3>
                <ChevronRight className="w-6 h-6 text-salon-pink transform group-open:rotate-90 transition-transform duration-200 flex-shrink-0" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-salon-text-medium leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
