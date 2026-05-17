const items = [
  'Los Angeles–Based Production',
  'Contract Decoration & Coordinated Specialty Production',
  'Small-Batch & Rush Support',
  'Relabeling, Tagging & Kitting',
  'West Coast Fulfillment',
] as const;

export default function TrustStrip() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-100/80"
      aria-label="Capabilities summary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile: stacked */}
        <ul className="flex flex-col gap-5 lg:hidden">
          {items.map((text) => (
            <li
              key={text}
              className="text-sm sm:text-base font-semibold text-slate-800 text-center leading-snug"
            >
              {text}
            </li>
          ))}
        </ul>

        {/* Desktop: row + vertical dividers */}
        <div className="hidden lg:flex lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {items.map((text, index) => (
            <div key={text} className="flex flex-1 min-w-0 items-center">
              {index > 0 && (
                <div className="w-px shrink-0 self-stretch bg-slate-300 mx-5" aria-hidden />
              )}
              <p className="flex-1 text-center text-sm font-semibold text-slate-800 leading-snug px-2">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
