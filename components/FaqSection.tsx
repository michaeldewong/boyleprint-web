'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import type { ReactNode } from 'react';

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What is Boyle Print's minimum order?",
    answer:
      'Minimums depend on decoration method and project type. DTF, heat press, patch application, and relabeling projects typically start at 12 pieces per design. Screen print and embroidery minimums are quoted by project. Brand drop projects typically start at 24 units. Archive sale and inventory prep projects typically start at 100 units.',
  },
  {
    question: 'What decoration methods do you offer?',
    answer:
      "Available methods include DTF transfer application, heat press decoration, UV transfer application, laser decoration, and patch application. Screen print and embroidery are handled through coordinated specialty production partners under Boyle Print's project management.",
  },
  {
    question: 'Do you accept customer-supplied garments?',
    answer:
      "Yes, customer-supplied garments are accepted subject to review. Customer-supplied goods are decorated at the customer's risk, and we recommend providing extra units for production allowance.",
  },
  {
    question: 'Can you source blank apparel and products?',
    answer:
      'Yes. We offer blank sourcing assistance when standard supply options are limited or when customers prefer a coordinated solution. For distributors, sourcing assistance is offered as quiet backup support, not as a primary service.',
  },
  {
    question: 'Do you offer rush turnaround?',
    answer:
      'Rush turnaround is available based on capacity. We confirm rush feasibility on a project-by-project basis after reviewing artwork, quantity, and timeline.',
  },
  {
    question: 'How do you handle artwork files?',
    answer:
      'We accept production-ready artwork in standard vector and high-resolution raster formats. Artwork that requires cleanup, recreation, resizing, vectorization, or color separation may be subject to additional setup fees.',
  },
  {
    question: 'Do you work with promotional product distributors?',
    answer: (
      <>
        Yes. Boyle Print operates as a contract decorator and supports distributors with small-batch
        decoration, sample runs, relabeling, kitting, rush support, and blind drop-ship fulfillment.
        We do not sell to end customers in the promotional products channel. Distributor program
        details are available at{' '}
        <Link
          href="/for-distributors"
          className="font-semibold text-slate-900 underline-offset-2 hover:underline"
        >
          /for-distributors
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do you offer fulfillment?',
    answer:
      'Yes. We support pick-and-pack, kitting, drop-ship, and small-batch fulfillment from our Los Angeles location, with West Coast shipping advantage for customers in California and the western United States.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'A 50% deposit is required to begin production unless otherwise agreed in writing. Final balance is due before pickup, delivery, shipping, or fulfillment release. Net terms are available for qualifying distributors after credit approval.',
  },
  {
    question: 'How do I start a project?',
    answer:
      'Send a quote request through the Request a Quote page, or email quotes@boyleprint.com with your product, artwork, quantity, and timeline. We typically respond within one business day.',
  },
];

export default function FaqSection() {
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
      id="faq"
      className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Quick answers before you request a quote.
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
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
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
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-6 pr-2 text-base text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
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
