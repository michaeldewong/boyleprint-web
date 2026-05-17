import type { Metadata } from 'next';
import HeroV2 from '@/components/HeroV2';
import TrustStrip from '@/components/TrustStrip';
import ServiceModulesGrid from '@/components/ServiceModulesGrid';
import ContractDecorationSection from '@/components/ContractDecorationSection';
import BrandDropSection from '@/components/BrandDropSection';
import FulfillmentSection from '@/components/FulfillmentSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import WhyLosAngelesSection from '@/components/WhyLosAngelesSection';
import QuoteCtaBand from '@/components/QuoteCtaBand';
import FaqSection from '@/components/FaqSection';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

const pageTitle =
  'Decoration, samples, and small-batch execution for distributors, brands, and businesses.';

const pageDescription =
  'Boyle Print is a Los Angeles–based contract decoration and production support partner. We help distributors, brands, artists, and local businesses turn artwork and inventory into decorated products, sample-approved runs, and fulfilled orders — with clean execution, organized production, and reliable West Coast turnaround.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: baseUrl,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <HeroV2 />
      <TrustStrip />
      <ServiceModulesGrid />
      <ContractDecorationSection />
      <BrandDropSection />
      <FulfillmentSection />
      <HowWeWorkSection />
      <WhoWeServeSection />
      <WhyLosAngelesSection />
      <QuoteCtaBand />
      <FaqSection />
    </>
  );
}
