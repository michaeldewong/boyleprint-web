import Link from 'next/link';
import Button from './Button';

export default function HeroV2() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(-12deg, transparent, transparent 2px, rgba(255,255,255,0.35) 2px, rgba(255,255,255,0.35) 3px)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
            Los Angeles · Contract Decoration · Production Support · Fulfillment
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] mb-6"
          >
            Decoration, samples, and small-batch execution for distributors, brands, and businesses.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-[70ch] mb-10">
            Boyle Print is a Los Angeles–based contract decoration and production support partner.
            We help distributors, brands, artists, and local businesses turn artwork and inventory
            into decorated products, sample-approved runs, and fulfilled orders — with clean
            execution, organized production, and reliable West Coast turnaround.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/rfq" variant="light" className="px-6 py-3 text-base font-semibold">
              Request a Quote
            </Button>
            <Link
              href="/services"
              className="text-base font-semibold text-slate-200 underline-offset-4 hover:text-white hover:underline"
            >
              View Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
