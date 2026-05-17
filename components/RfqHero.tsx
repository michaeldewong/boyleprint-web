export default function RfqHero() {
  return (
    <section
      className="border-b border-slate-200 bg-stone-50"
      aria-labelledby="rfq-hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Request a Quote
          </p>
          <h1
            id="rfq-hero-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-5"
          >
            {`Tell us about your project. We'll come back with options, pricing, and a recommended approach.`}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-[70ch]">
            {`Boyle Print quotes projects by scope, decoration method, quantity, and turnaround. Share the basics below and we'll typically respond within one business day with a quote, recommended approach, and any clarifying questions.`}
          </p>
        </div>
      </div>
    </section>
  );
}
