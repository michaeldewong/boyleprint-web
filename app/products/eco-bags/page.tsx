import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Eco Bags for California Retail Programs | Boyle Print',
  description:
    'Eco-friendly reusable and insulated bags designed to support California retail bag programs—durable materials, consistent branding, practical MOQs, and reliable local production.',
  openGraph: {
    title: 'Eco Bags for California Retail Programs | Boyle Print',
    description:
      'Eco-friendly reusable and insulated bags designed to support California retail bag programs—durable materials, consistent branding, practical MOQs, and reliable local production.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco Bags for California Retail Programs | Boyle Print',
    description:
      'Eco-friendly reusable and insulated bags designed to support California retail bag programs—durable materials, consistent branding, practical MOQs, and reliable local production.',
  },
};

export default function EcoBags() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Eco Bags for California Retail Programs',
    description:
      'Eco-friendly reusable and insulated bags designed to support California retail bag programs—durable materials, consistent branding, practical MOQs, and reliable local production.',
    url: 'https://boyleprint.com/products/eco-bags',
    provider: {
      '@type': 'Organization',
      name: 'Boyle Print',
    },
    serviceType: 'Reusable and insulated bags designed to support California retail bag programs and requirements',
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://boyleprint.com/rfq',
      },
      name: 'Start RFQ',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* (A) HERO SECTION */}
      <section className="bg-white pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Eco Bags for California Retail Programs
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              Reusables designed to support California bag requirements—durable
              materials, consistent branding, practical MOQs, and reliable local
              production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/rfq?product=eco-bags" variant="primary">
                Start RFQ
              </Button>
              <Button href="#specs" variant="ghost">
                View Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* (B) TRUST STRIP */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-base font-medium text-slate-900">
                Program-ready — Built to support California reusable bag
                programs and common retailer standards.
              </p>
            </div>
            <div>
              <p className="text-base font-medium text-slate-900">
                Durable materials — Options for repeat use, load strength, and
                daily carry.
              </p>
            </div>
            <div>
              <p className="text-base font-medium text-slate-900">
                Brand consistency — Screen print, transfers, labels, and
                packaging—kept clean and repeatable.
              </p>
            </div>
            <div>
              <p className="text-base font-medium text-slate-900">
                Local LA support — Faster proofs, smoother revisions,
                dependable timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* (C) DELIVERY STATEMENT */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
              We help retailers launch reusable bag programs that look
              professional at checkout, hold up in real use, and stay consistent
              across reorders.
            </p>
          </div>
        </div>
      </section>

      {/* (D) PRODUCT CARDS */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Reusable Bags (Retail/Grocery)
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-medium text-slate-900 mb-1">
                    Best for:
                  </p>
                  <p className="text-slate-700">
                    Grocery, convenience, specialty retail, chain rollouts,
                    seasonal promos
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">
                    Popular options:
                  </p>
                  <p className="text-slate-700">
                    Non-woven PP, recycled PET (rPET), canvas/cotton
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Branding:</p>
                  <p className="text-slate-700">
                    1–2 color screen prints, full-color transfers, woven labels
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">MOQ:</p>
                  <p className="text-slate-700">
                    Flexible (small batches available—ask)
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Button href="/rfq" variant="primary" className="w-full">
                  Start RFQ
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Insulated Bags (Add-on / Premium)
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-medium text-slate-900 mb-1">
                    Best for:
                  </p>
                  <p className="text-slate-700">
                    Premium shopper programs, loyalty rewards, cold items,
                    seasonal campaigns
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">
                    Popular options:
                  </p>
                  <p className="text-slate-700">
                    Tote style, zipper closures, structured bottoms
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Branding:</p>
                  <p className="text-slate-700">
                    Transfers, embroidery, patches, labeling
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">MOQ:</p>
                  <p className="text-slate-700">Flexible (ask)</p>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Button href="/rfq" variant="primary" className="w-full">
                  Start RFQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (E) CUSTOMIZATION SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Printing & decoration:
              </h3>
              <p className="text-slate-700">
                Screen printing · Heat transfers · Embroidery · Patches · Woven
                labels
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Finishing & packaging:
              </h3>
              <p className="text-slate-700">
                Bag labeling · Hangtags · Polybagging · Kitting · Carton
                packouts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* (F) QUICK SPEC BUILDER */}
      <section id="specs" className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              To quote quickly, we typically need:
            </h2>
            <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">1.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Bag type (reusable / insulated)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">2.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Size (W × H × Gusset)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">3.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Material preference (e.g., rPET / non-woven / canvas)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">4.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Color (Pantone or standard)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">5.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Decoration method (print / transfer / embroidery / label)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">6.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Quantity (target + range)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">7.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Timeline (in-hands date / launch date)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-900 font-medium mr-2">8.</span>
                  <span className="text-slate-700 text-sm md:text-base">
                    Delivery (pickup / ship + zip code)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (G) FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you have minimums?
                </h3>
                <p className="text-slate-700">
                  We&apos;re flexible. Share your target quantity and we&apos;ll recommend
                  the best approach.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Can you support repeat reorders?
                </h3>
                <p className="text-slate-700">
                  Yes—our goal is consistency across batches and reorders.
                  We&apos;ll align materials and decoration methods accordingly.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Can you match brand colors?
                </h3>
                <p className="text-slate-700">
                  Yes—share Pantone references and we&apos;ll align materials/inks
                  where possible.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you offer packing and carton labeling for stores?
                </h3>
                <p className="text-slate-700">
                  Yes—labeling, kitting, carton packouts, and store-ready
                  packaging options are available.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What&apos;s the next step?
                </h3>
                <p className="text-slate-700">
                  Submit an RFQ with your specs. We&apos;ll respond with pricing,
                  proofing steps, and timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (H) FINAL CTA BOX */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-8">
              Ready to launch a California-friendly retail bag program?
            </p>
            <Button href="/rfq" variant="ghost" className="bg-white text-slate-900 hover:bg-slate-100 border-white">
              Start an RFQ — we&apos;ll reply with pricing and timelines.
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
