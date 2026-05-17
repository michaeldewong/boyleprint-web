import Button from './Button';

export default function QuoteCtaBand() {
  return (
    <section
      id="quote-cta"
      className="relative overflow-hidden bg-slate-950 text-white border-y border-slate-800"
      aria-labelledby="quote-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="quote-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Ready to start a project?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[70ch] mx-auto">
            {`Send us the basics — product, artwork, quantity, and timeline — and we'll come back with a quote and recommended approach.`}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/rfq" variant="light" className="px-8 py-3.5 text-base font-semibold">
              Request a Quote →
            </Button>
            <p className="text-sm text-slate-400 font-normal">
              Or email us at{' '}
              <a
                href="mailto:quotes@boyleprint.com"
                className="text-slate-300 underline-offset-2 hover:text-white hover:underline"
              >
                quotes@boyleprint.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
