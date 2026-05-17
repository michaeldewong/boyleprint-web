import Link from 'next/link';

const cards = [
  {
    title: 'Contract Decoration',
    description:
      'DTF transfers, heat press, UV transfers, laser decoration, patch application, and coordinated screen print and embroidery for clean, production-ready decoration.',
    bestFor: 'distributors, resellers, local businesses, brands.',
    href: '/services/contract-decoration',
  },
  {
    title: 'Sample & Prototype Support',
    description:
      'Single-piece samples, short-run testing, and decoration-method comparisons for projects that need approval before full production.',
    bestFor: 'brands, distributors presenting to clients, product developers.',
    href: '/services',
  },
  {
    title: 'Brand Drop Preparation',
    description:
      'End-to-end support for limited releases and small-batch product drops: samples, decoration, labels, tags, photography, and fulfillment.',
    bestFor: 'independent brands, creators, artists, small streetwear labels.',
    href: '/services',
  },
  {
    title: 'Archive Sale & Inventory Activation',
    description:
      'Inventory sorting, hangtag and SKU application, photography, and sale-page preparation for archive sales, pop-ups, and overstock activation.',
    bestFor: 'brands and sellers with existing inventory.',
    href: '/services',
  },
  {
    title: 'Relabeling, Tagging & Sale Prep',
    description:
      'Neck label removal and replacement, hangtag application, barcode and SKU stickers, folding, and poly bagging for retail or online sale.',
    bestFor: 'apparel brands, distributors, online sellers, pop-up vendors.',
    href: '/services',
  },
  {
    title: 'Fulfillment & Kitting',
    description:
      'Pick, pack, and ship support for small-batch orders, drop-ship projects, and distributor fulfillment, with West Coast shipping advantage.',
    bestFor: 'distributors, e-commerce sellers, brands launching releases.',
    href: '/services',
  },
] as const;

export default function ServiceModulesGrid() {
  return (
    <section
      id="service-modules"
      className="bg-white py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="service-modules-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            What We Do
          </p>
          <h2
            id="service-modules-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5"
          >
            Practical execution, organized by service.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch]">
            Our services are built around the work most apparel and merchandise projects actually
            need — decoration, samples, labeling, packing, and small-batch fulfillment. Each
            service is quoted by scope, quantity, and turnaround.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <li
              key={`${card.title}-${card.href}`}
              className="flex flex-col h-full rounded-lg border border-slate-200 bg-slate-50/60 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-shadow"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-1 mb-4">
                {card.description}
              </p>
              <p className="text-sm text-slate-500 italic mb-5">
                Best for: {card.bestFor}
              </p>
              <Link
                href={card.href}
                className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline mt-auto"
              >
                Learn more →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
