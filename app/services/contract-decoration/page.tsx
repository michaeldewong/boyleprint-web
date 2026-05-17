import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCtaBand from '@/components/PageCtaBand';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contract Decoration | Boyle Print',
  description:
    'Boyle Print contract decoration services for distributors, brands, and businesses in Los Angeles — DTF, UV, heat press, laser, patch, screen print, embroidery, and finishing support.',
};

const whatWeDecorate = [
  'T-shirts, hoodies, sweatshirts, and fleece',
  'Caps, beanies, and headwear',
  'Tote bags, drawstring bags, and accessories',
  'Promotional polos and workwear',
  'Custom apparel for brand drops and archive sales',
  'Specialty items quoted on a case-by-case basis',
] as const;

const methodsCol1 = [
  'DTF transfer application',
  'UV transfer application',
  'Heat press decoration',
  'Laser decoration',
  'Patch application',
] as const;

const methodsCol2 = [
  'Hangtag application',
  'Neck label / size label relabeling',
  'Barcode / SKU sticker application',
  'Screen print through coordinated production',
  'Embroidery through coordinated production',
] as const;

const quoteList = [
  'Product style or item number',
  'Quantity and size breakdown',
  'Artwork file (vector preferred)',
  'Decoration location and approximate size',
  'Required in-hands date',
  'Any relabeling, kitting, packing, or fulfillment needs',
] as const;

const projectTerms = [
  'Production begins after artwork approval, product availability, and final order confirmation.',
  'Customer-supplied goods are accepted subject to review.',
  'Rush service is available based on capacity.',
  'Decorated goods are produced to customer specification and are final sale.',
  'Detailed terms are available on our Terms of Service page.',
] as const;

export default function ContractDecorationPage() {
  return (
    <>
      <PageHero
        eyebrow="SERVICE · CONTRACT DECORATION"
        headline="Contract Decoration for Distributors, Brands, and Businesses"
        primaryCta={{ label: 'Request a Decoration Quote →', href: '/rfq' }}
        secondaryCta={{ label: 'View All Services →', href: '/services' }}
      >
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          Boyle Print provides contract decoration services for apparel, promotional products, and
          small-batch projects across Los Angeles and Southern California.
        </p>
      </PageHero>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="what-we-decorate-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="what-we-decorate-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            What We Decorate
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Boyle Print works on a wide range of decorated products, including:
          </p>
          <ul className="space-y-2 text-slate-700">
            {whatWeDecorate.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-slate-400 shrink-0" aria-hidden>
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-14 md:py-20" aria-labelledby="decoration-methods-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="decoration-methods-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Decoration Methods
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-[70ch]">
            Available decoration methods may include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ul className="space-y-2 text-slate-700">
              {methodsCol1.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-slate-400 shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-slate-700">
              {methodsCol2.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-slate-400 shrink-0" aria-hidden>
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mt-8 max-w-[70ch]">
            Method availability and pricing depend on artwork, quantity, garment type, and timeline.
            We will recommend the best decoration method for your project after reviewing your scope.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="who-we-decorate-for-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="who-we-decorate-for-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-10">
            Who We Decorate For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Distributors & Resellers</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Contract decoration, sample runs, rush support, relabeling, kitting, and blind
                drop-ship fulfillment for promotional product distributors and resellers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Brands & Labels</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Decoration support for streetwear brands, independent labels, artists, and creator
                drops — including sample approval, hangtag application, and small-batch production.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Local Businesses</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Uniforms, staff apparel, event merchandise, promotional products, and small-batch
                branded goods for restaurants, cafés, gyms, salons, schools, and community
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-14 md:py-20" aria-labelledby="fastest-quote-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="fastest-quote-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
            What to Send for the Fastest Quote
          </h2>
          <ul className="space-y-2 text-slate-700 mb-8 max-w-2xl">
            {quoteList.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-slate-400 shrink-0" aria-hidden>
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href="/rfq" variant="primary" className="px-6 py-3 text-base font-semibold">
            Request a Quote →
          </Button>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="project-terms-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <h2 id="project-terms-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
            Project Terms
          </h2>
          <ul className="space-y-3 text-slate-700 leading-relaxed mb-4">
            {projectTerms.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-slate-400 shrink-0" aria-hidden>
                  —
                </span>
                <span>
                  {item.includes('Terms of Service') ? (
                    <>
                      Detailed terms are available on our{' '}
                      <Link href="/terms" className="font-semibold text-slate-900 underline-offset-2 hover:underline">
                        Terms of Service
                      </Link>{' '}
                      page.
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      <PageCtaBand
        headline="Ready to start a contract decoration project?"
        body={`Send us your project details and we'll respond within 1 business day.`}
        buttonLabel="Request a Quote →"
      />
    </>
  );
}
