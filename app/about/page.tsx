import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCtaBand from '@/components/PageCtaBand';

export const metadata: Metadata = {
  title: 'About | Boyle Print',
  description:
    'Boyle Print is a Los Angeles–based contract decoration and production support business serving distributors, brands, local businesses, and creators across Southern California.',
};

const whatWeDo = [
  'Contract decoration for apparel and promotional products',
  'Sample and prototype runs for brand and distributor projects',
  'Relabeling, hangtag, barcode, and SKU sticker support',
  'Kitting, packing, and small-batch fulfillment',
  'West Coast pickup and drop-ship coordination',
  'Brand drop and archive sale preparation',
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT BOYLE PRINT" headline="Los Angeles–Based Contract Decoration and Production Support">
        <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          <p>
            Boyle Print is a Los Angeles–based contract decoration and production support business
            serving promotional product distributors, independent brands, local businesses, artists,
            and small streetwear labels across Southern California.
          </p>
          <p>
            We focus on the execution layer that sits between artwork and a finished, sale-ready
            product — decoration, sample making, relabeling, hangtag application, kitting, packing,
            and small-batch fulfillment. Projects are completed using a mix of in-house capability
            and a coordinated production network of trusted Los Angeles decorators and finishing
            partners.
          </p>
          <p>
            Our work is shaped by years of experience in apparel decoration, promotional products,
            and small-brand execution. We approach every project as a production project, not just
            a printed shirt — which means clear scope, sample approval, careful labeling, and
            reliable fulfillment.
          </p>
        </div>
      </PageHero>

      <section className="bg-slate-50 border-b border-slate-200 py-14 md:py-20" aria-labelledby="what-we-do-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="what-we-do-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-8">
            What We Do
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl">
            {whatWeDo.map((item) => (
              <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                <span className="text-slate-400 shrink-0" aria-hidden>
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="how-we-work-about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="how-we-work-about-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
              How We Work
            </h2>
            <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                We operate as a contract decorator and production support partner. For
                distributor-referred projects, we do not market directly to the distributor&apos;s end
                customer. For brand and direct clients, we focus on getting samples right, getting
                decoration consistent, and getting products into clean, sale-ready condition.
              </p>
              <p>
                Every project is handled with a defined scope, a quoted price, and a clear timeline. We
                do not chase orders we cannot execute responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCtaBand
        headline="Start a project with Boyle Print"
        body={`Send us your project details and we'll come back with options, pricing, and a recommended approach.`}
        buttonLabel="Request a Quote →"
      />
    </>
  );
}
