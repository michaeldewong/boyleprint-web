const columns = [
  {
    n: '1',
    title: 'Product or Garment',
    body: "The product or garment type you want decorated, or whether you'd like us to source blanks.",
  },
  {
    n: '2',
    title: 'Artwork',
    body: 'Production-ready artwork in vector or high-resolution raster format, if available.',
  },
  {
    n: '3',
    title: 'Quantity & Sizes',
    body: 'Total quantity and a size breakdown if applicable.',
  },
  {
    n: '4',
    title: 'Deadline',
    body: 'Your target in-hand date, delivery method, and whether the project is rush.',
  },
] as const;

export default function RfqWhatToHaveReady() {
  return (
    <section
      className="bg-white py-14 md:py-16 border-b border-slate-200"
      aria-labelledby="rfq-ready-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Before You Submit
          </p>
          <h2
            id="rfq-ready-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            What to have ready.
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {columns.map((col) => (
            <div key={col.title} className="flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-50 text-sm font-bold text-slate-900"
                aria-hidden
              >
                {col.n}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{col.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{col.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
