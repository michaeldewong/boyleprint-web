const steps = [
  {
    n: 1,
    title: 'Project Review',
    description:
      'We review your product, artwork, quantity, timeline, and required services to confirm scope and feasibility.',
  },
  {
    n: 2,
    title: 'Quote',
    description:
      'We provide a project quote based on decoration method, complexity, quantity, and turnaround requirements.',
  },
  {
    n: 3,
    title: 'Sample or Mockup Approval',
    description:
      'For qualifying projects, a sample or production mockup is reviewed and approved before full production.',
  },
  {
    n: 4,
    title: 'Production',
    description:
      'Production begins after deposit, artwork approval, and final project confirmation.',
  },
  {
    n: 5,
    title: 'Packing & Fulfillment',
    description:
      'Finished goods are prepared for pickup, delivery, shipment, or fulfillment based on the agreed delivery method.',
  },
  {
    n: 6,
    title: 'Final Balance & Release',
    description:
      'Final balance is collected before release, and the project is closed out with delivery confirmation or fulfillment handoff.',
  },
] as const;

export default function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="bg-white py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="how-we-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Process
          </p>
          <h2
            id="how-we-work-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            How a project moves through Boyle Print.
          </h2>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 list-none p-0 m-0">
          {steps.map((step) => (
            <li key={step.n} className="relative flex flex-col">
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
  );
}
