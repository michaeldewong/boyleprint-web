import Button from './Button';

const columns = [
  {
    heading: 'Order Fulfillment',
    body: 'Pick, pack, and ship for single-SKU and multi-SKU small-batch orders.',
  },
  {
    heading: 'Kitting & Packaging',
    body: 'Custom kitting, insert card placement, poly bagging, and packaging preparation.',
  },
  {
    heading: 'Drop-Ship Support',
    body: 'Drop-ship support for distributor orders and direct-to-customer shipments, with West Coast logistics.',
  },
] as const;

export default function FulfillmentSection() {
  return (
    <section
      id="fulfillment-kitting"
      className="bg-slate-100/90 py-14 md:py-20 border-b border-slate-200"
      aria-labelledby="fulfillment-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Fulfillment Support
          </p>
          <h2
            id="fulfillment-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Pick, pack, and ship from Los Angeles.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch]">
            Boyle Print supports small-batch fulfillment, kitting, and drop-ship orders for
            distributors, e-commerce sellers, and brands. Our Los Angeles location provides West
            Coast shipping advantage for distributors and customers across California and the
            western United States.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">
          {columns.map((col) => (
            <div
              key={col.heading}
              className="rounded-lg border border-slate-200/80 bg-white/80 p-6 md:p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">{col.heading}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>

        <div>
          <Button href="/rfq" variant="light" className="px-6 py-3 text-base font-semibold">
            Request Fulfillment Information →
          </Button>
        </div>
      </div>
    </section>
  );
}
