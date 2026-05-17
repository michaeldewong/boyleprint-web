export default function RfqQuoteBanner() {
  return (
    <section
      className="border-y border-slate-200 bg-slate-50"
      aria-labelledby="rfq-quote-banner-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="max-w-4xl lg:grid lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-12 lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3 lg:mb-0 lg:pt-1">
            TWO WAYS TO REQUEST A QUOTE
          </p>
          <div>
            <h2
              id="rfq-quote-banner-heading"
              className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4"
            >
              Use the form below — or email us directly.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
              Fill out the project intake form below and a member of the Boyle Print team will follow
              up within 1 business day. You can also email your project details directly to{' '}
              <a
                href="mailto:quotes@boyleprint.com"
                className="font-semibold text-slate-900 underline-offset-2 hover:underline"
              >
                quotes@boyleprint.com
              </a>{' '}
              — both paths reach our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
