import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'B2B Manufacturing Solutions for Brands & Distributors',
  description: 'Production solutions for brand launches, wholesale fulfillment, promotional orders, and custom manufacturing programs. Repeatable processes, consistent quality, and logistics-ready delivery for procurement teams.',
  alternates: {
    canonical: `${baseUrl}/solutions`,
  },
  openGraph: {
    title: 'B2B Manufacturing Solutions for Brands & Distributors | Boyle Print',
    description: 'Production solutions for brand launches, wholesale fulfillment, promotional orders, and custom manufacturing programs. Repeatable processes, consistent quality, and logistics-ready delivery.',
    url: `${baseUrl}/solutions`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'B2B Manufacturing Solutions for Brands & Distributors | Boyle Print',
    description: 'Production solutions for brand launches, wholesale fulfillment, promotional orders, and custom manufacturing programs. Repeatable processes, consistent quality, and logistics-ready delivery.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Solutions() {
  return (
    <>
      <HeroSection
        id="hero"
        title="B2B Manufacturing Solutions for Brands and Distributors"
        subtitle="Production programs designed for procurement teams, wholesale operations, and repeat order fulfillment. Consistent quality, scalable capacity, and logistics-ready delivery."
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="brand-launch-scaling"
        title="Brand Launch & Scaling"
        description="Production support for new brand launches and scaling operations. Repeatable SKU specifications, consistent quality across production runs, and scalable capacity for growth. Suitable for emerging brands and established companies expanding product lines."
        ctaText="View Services"
        ctaLink="/services"
      />

      <Section
        id="distributor-wholesale-fulfillment"
        title="Distributor & Wholesale Fulfillment"
        description="Reliable production partner for resellers and wholesale operations. Consistent quality across repeat orders, predictable lead times, scalable capacity, and logistics-ready packaging. Built for procurement teams managing ongoing supplier relationships."
        ctaText="Request a Quote"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="promotional-corporate-orders"
        title="Promotional & Corporate Orders"
        description="Bulk production for promotional programs, corporate events, and branded merchandise. Flexible order volumes, volume pricing, and fulfillment options including kitting, labeling, and direct-to-location delivery. Suitable for procurement teams managing corporate programs."
        ctaText="View Products"
        ctaLink="/products"
      />

      <Section
        id="custom-manufacturing-programs"
        title="Custom Manufacturing Programs"
        description="Custom production programs for specialized requirements, compliance needs, and long-term manufacturing partnerships. Eco bag programs, custom product development, and repeat order support with consistent specifications and quality control."
        ctaText="Contact Us"
        ctaLink="/contact"
        variant="gray"
      />
    </>
  );
}
