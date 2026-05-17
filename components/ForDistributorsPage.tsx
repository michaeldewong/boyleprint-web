import Link from 'next/link';
import Button from './Button';
import ForDistributorsFaq from './ForDistributorsFaq';

const capabilityStrip = [
  'Los Angeles Based',
  'Small-Batch & Rush Support',
  'Blind Shipping Available',
  'Relabeling & Kitting',
  'Coordinated Screen Print & Embroidery',
] as const;

const serviceCards = [
  {
    title: 'Contract Decoration',
    description:
      'Decoration support for apparel, promotional products, samples, and small-batch distributor orders.',
  },
  {
    title: 'Sample Runs',
    description:
      'Pre-production samples and distributor presentation samples for project review and client approval.',
  },
  {
    title: 'Rush Support',
    description:
      'Capacity-based support for time-sensitive decoration, relabeling, packing, and local coordination projects.',
  },
  {
    title: 'Relabeling & Hangtags',
    description:
      'Neck label, size label, hangtag, barcode, and SKU sticker support for distributor-managed programs.',
  },
  {
    title: 'Kitting & Packing',
    description:
      'Folding, poly bagging, insert cards, SKU organization, and custom kit preparation.',
  },
  {
    title: 'Blind Drop-Ship Fulfillment',
    description:
      'Neutral packing, distributor-branded packing support, and West Coast shipment preparation upon request.',
  },
] as const;

const decorationMethods = [
  'DTF transfer application',
  'Heat press decoration',
  'UV transfer application',
  'Laser decoration',
  'Patch application',
  'Neck label / size label relabeling',
  'Hangtag application',
  'Barcode / SKU sticker application',
  'Screen print through coordinated production',
  'Embroidery through coordinated production',
] as const;

const workflowSteps = [
  {
    n: 1,
    title: 'Send Project Details',
    description:
      'Product style, quantity, artwork, decoration location, deadline, and shipping needs.',
  },
  {
    n: 2,
    title: 'Quote Review',
    description:
      'We review the project scope, production method, timeline, and fulfillment requirements.',
  },
  {
    n: 3,
    title: 'Sample or Mockup Approval',
    description: 'Samples or mockups may be used for approval before production.',
  },
  {
    n: 4,
    title: 'Production & Packing',
    description:
      'Decoration, relabeling, kitting, packing, and project coordination are completed based on the approved scope.',
  },
  {
    n: 5,
    title: 'Pickup, Shipping, or Blind Drop-Ship',
    description:
      'Orders can be prepared for pickup, shipment, or blind drop-ship fulfillment.',
  },
] as const;

const quoteChecklist = [
  'Product style or item number',
  'Quantity and size breakdown',
  'Artwork file',
  'Decoration location and approximate size',
  'Required in-hands date',
  'Shipping or drop-ship requirements',
  'Relabeling, kitting, packing, or fulfillment needs',
] as const;

const projectTerms = [
  'New accounts may require deposit before production.',
  'Net terms may be available after credit approval and successful order history.',
  'Rush service is available based on capacity.',
  'Production begins after artwork approval, product availability, and final order confirmation.',
  'Final balance is due before release unless approved terms are in place.',
  'Customer-supplied goods are accepted subject to review.',
] as const;

export default function ForDistributorsPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-stone-50"
        aria-labelledby="distributors-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
              LOS ANGELES · CONTRACT DECORATION · DISTRIBUTOR SUPPORT
            </p>
            <h1
              id="distributors-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Contract Decoration & Fulfillment Support for Distributors
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-[70ch] mb-10">
              Los Angeles–based decoration, relabeling, kitting, sample, and West Coast drop-ship
              support for promotional product distributors and resellers.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/rfq" variant="primary" className="px-6 py-3 text-base font-semibold">
                Request a Distributor Quote
              </Button>
              <Link
                href="/services/contract-decoration"
                className="text-base font-semibold text-slate-800 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                View Decoration Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Capability strip */}
      <section
        className="border-y border-slate-200 bg-slate-100/80"
        aria-label="Distributor capabilities"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <ul className="flex flex-col gap-5 lg:hidden">
            {capabilityStrip.map((text) => (
              <li
                key={text}
                className="text-sm sm:text-base font-semibold text-slate-800 text-center leading-snug"
              >
                {text}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex lg:flex-row lg:items-stretch lg:justify-between">
            {capabilityStrip.map((text, index) => (
              <div key={text} className="flex flex-1 min-w-0 items-center">
                {index > 0 && (
                  <div className="w-px shrink-0 self-stretch bg-slate-300 mx-5" aria-hidden />
                )}
                <p className="flex-1 text-center text-sm font-semibold text-slate-800 leading-snug px-2">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Built for Distributor Workflows */}
      <section
        className="bg-white py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="distributor-workflows-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="distributor-workflows-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Built for Distributor Workflows
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-[70ch]">
              <p>
                Distributor projects often need more than decoration. They may require samples,
                artwork review, relabeling, packing, SKU organization, rush handling, and blind
                shipping.
              </p>
              <p>
                Boyle Print helps distributors manage those execution steps through one
                Los Angeles-based production support partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Distributor Services Cards */}
      <section
        className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="distributor-services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="distributor-services-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-10 md:mb-12"
          >
            Distributor Support Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceCards.map((card) => (
              <li
                key={card.title}
                className="rounded-lg border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 — Decoration & Production Support */}
      <section
        className="bg-white py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="decoration-support-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2
              id="decoration-support-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Decoration & Production Support
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch] mb-8">
              Available decoration and production support may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-slate-700 list-disc pl-5 marker:text-slate-400 text-base leading-relaxed">
              {decorationMethods.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 — Distributor Relationship Protection */}
      <section
        className="bg-slate-100 border-y-2 border-slate-900 py-16 md:py-20"
        aria-labelledby="relationship-protection-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-lg border border-slate-300 bg-white p-8 md:p-10 shadow-md border-l-4 border-l-slate-900">
            <h2
              id="relationship-protection-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Distributor Relationship Protection
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Boyle Print works as a contract decorator and production support partner for
                distributors.
              </p>
              <p>
                {`For distributor-referred projects, we do not market directly to the distributor's end customer. We can support blind shipping, neutral packing, distributor-branded packing slips, and confidential project handling upon request.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — How Distributor Projects Work */}
      <section
        className="bg-white py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="distributor-process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12 md:mb-14">
            <h2
              id="distributor-process-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
            >
              How Distributor Projects Work
            </h2>
          </header>
          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 list-none p-0 m-0">
            {workflowSteps.map((step) => (
              <li key={step.n} className="flex flex-col">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-50 text-lg font-bold text-slate-900 mb-4"
                  aria-hidden
                >
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 8 — What to Send for a Quote */}
      <section
        className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="quote-checklist-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="quote-checklist-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8"
            >
              What to Send for the Fastest Quote
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-slate-700 list-disc pl-5 marker:text-slate-400 mb-10 leading-relaxed">
              {quoteChecklist.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/rfq" variant="primary" className="px-6 py-3 text-base font-semibold">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9 — Distributor Project Terms */}
      <section
        className="bg-white py-16 md:py-24 border-b border-slate-200"
        aria-labelledby="distributor-terms-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="distributor-terms-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-8"
            >
              Distributor Project Terms
            </h2>
            <ul className="space-y-4 text-base md:text-lg text-slate-600 leading-relaxed list-disc pl-5 marker:text-slate-400">
              {projectTerms.map((term) => (
                <li key={term} className="pl-1">
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 10 — FAQ */}
      <ForDistributorsFaq />

      {/* Section 11 — Final CTA */}
      <section
        className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800"
        aria-labelledby="distributors-final-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="distributors-final-cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Need a Los Angeles decoration and fulfillment support partner?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[70ch] mx-auto">
              {`Send your project details and we'll review the best available production, relabeling, kitting, or fulfillment option.`}
            </p>
            <Button href="/rfq" variant="light" className="px-8 py-3.5 text-base font-semibold">
              Request a Distributor Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
