import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCtaBand from '@/components/PageCtaBand';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contact | Boyle Print',
  description:
    'Contact Boyle Print for contract decoration, samples, relabeling, kitting, and small-batch fulfillment projects across Los Angeles and Southern California.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" headline="Reach Boyle Print">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-[70ch]">
          The fastest way to start a project is to send your project details — product, quantity,
          artwork, decoration method, in-hands date, and any fulfillment needs. We respond to most
          inquiries within 1 business day.
        </p>
      </PageHero>

      <section className="bg-white border-b border-slate-200 py-14 md:py-20" aria-labelledby="contact-details-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-details-heading" className="sr-only">
            Contact details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Project Inquiries</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                For quotes, sample requests, and new project inquiries:
              </p>
              <p className="mb-6">
                <a
                  href="mailto:quotes@boyleprint.com"
                  className="text-lg font-semibold text-slate-900 underline-offset-2 hover:underline"
                >
                  quotes@boyleprint.com
                </a>
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">Or use the project intake form:</p>
              <Button href="/rfq" variant="primary" className="px-5 py-2.5 text-sm font-semibold">
                Request a Quote →
              </Button>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Studio & Production</h3>
                <p className="text-slate-600 leading-relaxed">By Appointment — Los Angeles, CA</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Business Hours</h3>
                <p className="text-slate-600 leading-relaxed">
                  Monday–Friday, 9:00 AM – 6:00 PM Pacific Time
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Service Area</h3>
                <p className="text-slate-600 leading-relaxed">
                  Boyle Print serves Los Angeles County, Orange County, and broader Southern
                  California, with West Coast drop-ship support available for distributor projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-14 md:py-20" aria-labelledby="distributor-inquiries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <h2 id="distributor-inquiries-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Distributor Inquiries
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-[70ch]">
            Promotional product distributors and resellers can find details on contract decoration,
            sample runs, relabeling, kitting, rush support, and blind drop-ship fulfillment on our
            distributor page.
          </p>
          <Link
            href="/for-distributors"
            className="text-base font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            For Distributors →
          </Link>
          </div>
        </div>
      </section>

      <PageCtaBand
        headline="Start a project"
        body={`Send your project details and we'll be in touch.`}
        buttonLabel="Request a Quote →"
      />
    </>
  );
}
