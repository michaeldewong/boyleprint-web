import type { Metadata } from 'next';
import RfqHero from '@/components/RfqHero';
import RfqQuoteBanner from '@/components/RfqQuoteBanner';
import RfqWhatToHaveReady from '@/components/RfqWhatToHaveReady';
import RfqForm from '@/components/RfqForm';
import OrderTermsCollapsible from '@/components/OrderTermsCollapsible';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

const pageTitle = 'Request a Quote | Boyle Print';
const pageDescription = `Boyle Print quotes projects by scope, decoration method, quantity, and turnaround. Share the basics below and we'll typically respond within one business day with a quote, recommended approach, and any clarifying questions.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${baseUrl}/rfq`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${baseUrl}/rfq`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RfqPage() {
  return (
    <>
      <RfqHero />
      <RfqQuoteBanner />
      <RfqWhatToHaveReady />
      <section
        id="rfq-order-intake"
        className="bg-stone-50 border-b border-slate-200 py-14 md:py-20"
        aria-label="Quote request form"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RfqForm />
        </div>
      </section>
      <OrderTermsCollapsible />
    </>
  );
}
