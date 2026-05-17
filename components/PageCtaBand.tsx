import Button from './Button';

type PageCtaBandProps = {
  headline: string;
  body: string;
  buttonLabel?: string;
  href?: string;
};

export default function PageCtaBand({
  headline,
  body,
  buttonLabel = 'Request a Quote',
  href = '/rfq',
}: PageCtaBandProps) {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800"
      aria-labelledby="page-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="page-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-[70ch] mx-auto">
            {body}
          </p>
          <Button href={href} variant="light" className="px-8 py-3.5 text-base font-semibold">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
