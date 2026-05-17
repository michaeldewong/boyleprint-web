import Button from './Button';

const capabilities = [
  'DTF transfer application',
  'Heat press decoration',
  'UV transfer application',
  'Laser decoration',
  'Patch application',
  'Neck label removal and relabeling',
  'Hangtag and SKU sticker application',
  'Screen print (coordinated production)',
  'Embroidery (coordinated production)',
  'Rush and small-batch decoration support',
] as const;

export default function ContractDecorationSection() {
  return (
    <section
      id="contract-decoration"
      className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="contract-decoration-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 xl:gap-20 lg:items-start">
          <header className="mb-10 lg:mb-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
              Core Capability
            </p>
            <h2
              id="contract-decoration-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6"
            >
              Contract Decoration for distributors, brands, and businesses.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch]">
              Boyle Print supports decoration projects from sample stage through small-batch and
              mid-volume production. Our decoration services include direct in-house application
              methods and coordinated specialty production for screen print and embroidery, with
              consistent project management and clear approval steps throughout.
            </p>
          </header>

          <div className="mb-10 lg:mb-0">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-700 list-disc pl-5 marker:text-slate-400 text-base leading-relaxed">
              {capabilities.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 lg:mt-14 text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          Each project is reviewed for artwork, garment type, decoration method, placement, and
          quantity. Production-ready artwork, approved samples or mockups, and clear delivery
          requirements are confirmed before production begins.
        </p>

        <div className="mt-8">
          <Button href="/rfq" variant="light" className="px-6 py-3 text-base font-semibold">
            Request a Decoration Quote →
          </Button>
        </div>
      </div>
    </section>
  );
}
