import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Custom Printing & Manufacturing for Brands and Distributors — Made in Los Angeles',
  description: 'B2B custom printing and manufacturing partner in Los Angeles. Bulk orders, wholesale fulfillment, and production-ready goods for brands and distributors. Reliable scale, consistent quality, and repeatable processes.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Custom Printing & Manufacturing for Brands and Distributors — Made in Los Angeles',
    description: 'B2B custom printing and manufacturing partner in Los Angeles. Bulk orders, wholesale fulfillment, and production-ready goods for brands and distributors. Reliable scale, consistent quality, and repeatable processes.',
    url: baseUrl,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Custom Printing & Manufacturing for Brands and Distributors — Made in Los Angeles',
    description: 'B2B custom printing and manufacturing partner in Los Angeles. Bulk orders, wholesale fulfillment, and production-ready goods for brands and distributors. Reliable scale, consistent quality, and repeatable processes.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Production-ready custom printing & manufacturing for brands and distributors — made in Los Angeles."
        subtitle="Bulk orders, wholesale fulfillment, and repeatable production for brands, distributors, and procurement teams. Reliable scale, consistent quality, and logistics-ready delivery."
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="production-capabilities"
        title="Production Capabilities"
        description="Screen print, embroidery, DTF/DTG, and custom manufacturing with quality control, scalable capacity, and consistent output. Built for repeat orders and long-term production partnerships."
        ctaText="View Capabilities"
        ctaLink="/services"
      />

      <Section
        id="bulk-wholesale-orders"
        title="Bulk & Wholesale Orders"
        description="Eco bags, insulated bags, patches, printed apparel, stickers, and packaging. Flexible MOQs, volume pricing, and production runs from 50 to 50,000+ units. Built for wholesale, retail, and promotional programs."
        ctaText="View Products"
        ctaLink="/products"
        variant="gray"
      />

      <Section
        id="reliable-manufacturing-partner"
        title="Reliable Manufacturing Partner"
        description="LA-based production with transparent workflows, quality control checkpoints, and predictable lead times. Designed for procurement teams who need consistency, repeatability, and logistics-ready fulfillment."
        ctaText="View Solutions"
        ctaLink="/solutions"
      />

      <Section
        id="use-cases"
        title="Use Cases: Wholesale, Promotional, and Brand Programs"
        description="Wholesale fulfillment for distributors, promotional orders for corporate programs, and custom manufacturing for brand launches. Repeat order support, SKU consistency, and scalable production capacity."
        ctaText="View Solutions"
        ctaLink="/solutions"
        variant="gray"
      />

      <Section
        id="sustainability"
        title="Sustainability-first product options and packaging guidance — aligned with California expectations."
        description="Choose eco-friendly materials without sacrificing performance."
        ctaText="See Eco Bag Program"
        ctaLink="/solutions#eco-bag-program"
      />

      <Section
        id="lead-time-fulfillment"
        title="Lead Time & Fulfillment Reliability"
        description="Most quotes returned within 1 business day. Production timelines aligned to your launch dates. Quality control checkpoints and logistics-ready packaging for direct-to-store or warehouse delivery."
        ctaText="Request a Quote"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="process"
        title="Production Process: RFQ → Proof & Sample → Production → QC → Shipping / Pickup"
        description="Streamlined workflow for procurement teams. Clear specifications, sample approvals, production tracking, quality control, and logistics coordination. Most quotes returned within 1 business day."
        ctaText="Start RFQ"
        ctaLink="/rfq"
      />

      <Section
        id="final-cta"
        title="Ready to produce? Send your specs and artwork — we'll respond with options and pricing."
        ctaText="Request a Quote"
        ctaLink="/rfq"
        variant="gray"
      />
    </>
  );
}
