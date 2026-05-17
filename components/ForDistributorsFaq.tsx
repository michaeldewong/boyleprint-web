'use client';

import { useCallback, useState } from 'react';

const faqs = [
  {
    question: 'Do you work with promotional product distributors?',
    answer:
      'Yes. Boyle Print supports promotional product distributors and resellers with contract decoration, sample runs, relabeling, kitting, packing, rush support, and West Coast fulfillment.',
  },
  {
    question: 'Do you offer blind shipping?',
    answer:
      'Blind shipping and neutral packing are available upon request. Distributor-branded packing slips or inserts may be supported depending on the project.',
  },
  {
    question: 'Do you sell directly to distributor end customers?',
    answer:
      "For distributor-referred projects, Boyle Print does not market directly to the distributor's end customer. We respect the distributor-client relationship.",
  },
  {
    question: 'Do you handle rush orders?',
    answer:
      'Rush support may be available based on artwork readiness, product availability, decoration method, quantity, and current capacity.',
  },
  {
    question: 'Do you offer screen print and embroidery?',
    answer:
      'Screen print and embroidery may be available through coordinated production. Quotes depend on artwork, quantity, color count, stitch count, garment type, and timeline.',
  },
] as const;

export default function ForDistributorsFaq() {
  const [openRows, setOpenRows] = useState<Set<number>>(() => new Set());

  const toggle = useCallback((index: number) => {
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  return (
    <section
      id="distributor-faq"
      className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="distributor-faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10 md:mb-12">
          <h2
            id="distributor-faq-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Distributor FAQ
          </h2>
        </header>

        <div className="max-w-3xl">
          {faqs.map((item, index) => {
            const isOpen = openRows.has(index);
            return (
              <div
                key={item.question}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`distributor-faq-panel-${index}`}
                  id={`distributor-faq-trigger-${index}`}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-sm"
                >
                  <span className="text-base font-semibold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-transform duration-300 ease-out ${
                      isOpen ? '-rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`distributor-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`distributor-faq-trigger-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 pr-2 text-base text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
