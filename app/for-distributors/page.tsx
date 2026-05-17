import type { Metadata } from 'next';
import ForDistributorsPage from '@/components/ForDistributorsPage';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'For Distributors | Boyle Print',
  description:
    'Los Angeles contract decoration, relabeling, kitting, rush support, and West Coast fulfillment for promotional product distributors and resellers.',
  alternates: {
    canonical: `${baseUrl}/for-distributors`,
  },
  openGraph: {
    title: 'For Distributors | Boyle Print',
    description:
      'Los Angeles contract decoration, relabeling, kitting, rush support, and West Coast fulfillment for promotional product distributors and resellers.',
    url: `${baseUrl}/for-distributors`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'For Distributors | Boyle Print',
    description:
      'Los Angeles contract decoration, relabeling, kitting, rush support, and West Coast fulfillment for promotional product distributors and resellers.',
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForDistributorsRoute() {
  return <ForDistributorsPage />;
}
