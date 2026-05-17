import type { ReactNode } from 'react';
import Link from 'next/link';
import Button from './Button';

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  children?: ReactNode;
  className?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function PageHero({
  eyebrow,
  headline,
  children,
  className = 'bg-stone-50 border-b border-slate-200',
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className={className} aria-labelledby="page-hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-5">
            {eyebrow}
          </p>
          <h1
            id="page-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            {headline}
          </h1>
          {children}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-4 mt-10">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" className="px-6 py-3 text-base font-semibold">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="text-base font-semibold text-slate-800 underline-offset-4 hover:text-slate-900 hover:underline"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
