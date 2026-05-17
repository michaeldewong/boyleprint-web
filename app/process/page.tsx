import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCtaBand from '@/components/PageCtaBand';

export const metadata: Metadata = {
  title: 'Process | Boyle Print',
  description:
    'How Boyle Print projects move from project intake through quote, artwork review, sample approval, production, finishing, packing, and fulfillment.',
};

const steps = [
  {
    n: 1,
    title: 'Project Intake',
    description:
      'We collect the basics: product, quantity, decoration method, artwork, in-hands date, and any relabeling, kitting, or shipping needs.',
  },
  {
    n: 2,
    title: 'Quote & Scope Review',
    description:
      'We review the project scope and return a quote covering decoration, finishing, sample needs, and fulfillment. Customer-supplied goods are accepted subject to review.',
  },
  {
    n: 3,
    title: 'Artwork Review',
    description:
      'Artwork is reviewed for size, placement, color, and decoration method suitability. Minor file prep is included; significant artwork rework may be quoted separately.',
  },
  {
    n: 4,
    title: 'Sample or Mockup Approval',
    description:
      'For most projects, we provide either a digital mockup or a physical sample before full production. Sample approval is required before production begins.',
  },
  {
    n: 5,
    title: 'Production',
    description:
      'Decoration is completed using the approved method — DTF transfer, UV transfer, heat press, laser, patch, embroidery (coordinated production), or screen print (coordinated production).',
  },
  {
    n: 6,
    title: 'Finishing & Labeling',
    description:
      'Relabeling, hangtags, barcode or SKU stickers, neck and size labels, and any required brand finishing details are completed before packing.',
  },
  {
    n: 7,
    title: 'QC & Packing',
    description:
      'Each project goes through a quality review. Items are folded, poly bagged, kitted, or packed according to project requirements — including neutral packing or distributor-branded packing slips upon request.',
  },
  {
    n: 8,
    title: 'Pickup, Shipping, or Blind Drop-Ship',
    description:
      'Completed orders are prepared for local pickup, shipment, or blind drop-ship fulfillment. West Coast routing is supported for distributor projects.',
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="HOW WE WORK" headline="How Boyle Print Projects Move From Brief to Fulfillment">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          Every Boyle Print project follows a defined path — from quote, to artwork review, to sample
          approval, to production and packing, to pickup or shipping. The steps below describe how a
          typical contract decoration, sample run, or small-batch fulfillment project moves through
          our process.
        </p>
      </PageHero>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="project-path-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="project-path-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-10 md:mb-14">
            The Boyle Print Project Path
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 list-none p-0 m-0">
            {steps.map((step) => (
              <li key={step.n} className="flex flex-col">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-50 text-lg font-bold text-slate-900 mb-4"
                  aria-hidden
                >
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageCtaBand
        headline="Ready to start?"
        body={`Send your project details and we'll respond within 1 business day.`}
        buttonLabel="Request a Quote →"
      />
    </>
  );
}
