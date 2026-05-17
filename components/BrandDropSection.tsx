import Button from './Button';

const capabilities = [
  'Blank apparel sourcing assistance',
  'Sample making and approval',
  'Decoration and patch application',
  'Neck labels, size labels, hangtags',
  'Barcode and SKU stickers',
  'Basic product photography support',
  'Packing and small-batch fulfillment',
  'Archive sale and overstock activation',
  'Small-batch replenishment',
] as const;

export default function BrandDropSection() {
  return (
    <section
      id="brand-drop-sale-prep"
      className="bg-white py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="brand-drop-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Differentiated Service
          </p>
          <h2
            id="brand-drop-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Brand drops, sample runs, and sale-ready inventory.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch]">
            For brands, artists, and sellers who need more than decoration, Boyle Print supports the
            practical execution behind a product release. We help organize the steps that turn
            artwork or existing inventory into a clean, sale-ready drop — from sample to shipment.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-slate-700 list-disc pl-5 marker:text-slate-400 text-base leading-relaxed max-w-5xl mb-12 md:mb-14">
          {capabilities.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>

        <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch] mb-8">
          Brand drop and archive sale projects are quoted by scope, SKU count, decoration method,
          labeling complexity, and fulfillment requirements. We work with one-design capsule
          releases, multi-product drops, pop-up inventory, and small replenishment runs.
        </p>

        <div>
          <Button href="/rfq" variant="light" className="px-6 py-3 text-base font-semibold">
            Start a Drop or Sale Prep Project →
          </Button>
        </div>
      </div>
    </section>
  );
}
