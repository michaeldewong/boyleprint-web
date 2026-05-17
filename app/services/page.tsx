import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCtaBand from '@/components/PageCtaBand';

export const metadata: Metadata = {
  title: 'Services | Boyle Print',
  description:
    'Contract decoration, sample runs, brand drop preparation, relabeling, kitting, and fulfillment services from Boyle Print in Los Angeles.',
};

const services = [
  {
    title: 'Contract Decoration',
    body: 'Decoration support for apparel, promotional products, samples, and small-batch distributor orders. Methods include DTF transfer, UV transfer, heat press, laser, patch application, screen print (coordinated production), and embroidery (coordinated production).',
    learnMore: '/services/contract-decoration',
  },
  {
    title: 'Sample & Prototype Runs',
    body: 'Pre-production samples for brand approval, distributor presentations, and concept testing. Sample fees may be credited toward production on qualifying orders.',
  },
  {
    title: 'Brand Drop Preparation',
    body: 'Decoration, labeling, hangtag application, photography support, and small-batch packing for independent brand drops, archive sales, and limited releases.',
  },
  {
    title: 'Relabeling & Hangtags',
    body: 'Neck label, size label, hangtag, barcode, and SKU sticker application for brand finishing and distributor-managed programs.',
  },
  {
    title: 'Kitting & Packing',
    body: 'Folding, poly bagging, insert cards, SKU organization, and custom kit preparation for promotional projects, event programs, and brand drops.',
  },
  {
    title: 'Fulfillment & Blind Drop-Ship',
    body: 'Neutral packing, distributor-branded packing slips, and West Coast shipment preparation. Drop-ship support available for distributor projects upon request.',
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES" headline="Boyle Print Services">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          Boyle Print provides decoration and production support services for distributors, brands,
          local businesses, and creators across Los Angeles and Southern California. Each service can
          be quoted as part of a full project or as a stand-alone module.
        </p>
      </PageHero>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="what-we-offer-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="what-we-offer-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-10 md:mb-12">
            What We Offer
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <li
                key={service.title}
                className="flex flex-col h-full rounded-lg border border-slate-200 bg-slate-50/60 p-6 md:p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-1 mb-5">{service.body}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  {'learnMore' in service && service.learnMore && (
                    <Link
                      href={service.learnMore}
                      className="text-slate-900 underline-offset-4 hover:underline"
                    >
                      Learn More →
                    </Link>
                  )}
                  <Link href="/rfq" className="text-slate-900 underline-offset-4 hover:underline">
                    Request a Quote →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCtaBand
        headline="Have a project in mind?"
        body={`Send us your project details and we'll come back with options, pricing, and a recommended approach.`}
        buttonLabel="Request a Quote →"
      />
    </>
  );
}
