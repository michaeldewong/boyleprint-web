import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Printing Services — DTF/DTG, Screen Print, Embroidery & More',
  description: 'The right printing method for your project. DTF/DTG, screen printing, heat press, embroidery, file design support, sampling, proofing, and quality control services.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: 'Printing Services — DTF/DTG, Screen Print, Embroidery & More | Boyle Print',
    description: 'The right printing method for your project. DTF/DTG, screen printing, heat press, embroidery, file design support, and quality control.',
    url: `${baseUrl}/services`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Printing Services — DTF/DTG, Screen Print, Embroidery & More | Boyle Print',
    description: 'The right printing method for your project. DTF/DTG, screen printing, heat press, embroidery, file design support, and quality control.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Services() {
  return (
    <>
      <HeroSection
        id="hero"
        title="The right method for the right job — quality first, deadlines respected."
        subtitle=""
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="services-printing-methods"
        title="DTF/DTG, screen printing, heat press, embroidery, and special finishes when needed."
        ctaText="Discuss Your Project"
        ctaLink="/contact"
      />

      <Section
        id="services-file-design-support"
        title="We'll help you prep artwork for production and avoid expensive mistakes."
        ctaText="Upload Artwork"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="services-sampling-proofing"
        title="Sample first when it matters. Clear approvals before production."
        ctaText="Request Samples"
        ctaLink="/contact"
      />

      <Section
        id="services-quality-control"
        title="Process checks and final QC to keep results consistent."
        ctaText="See Our Process"
        ctaLink="/#process"
        variant="gray"
      />
    </>
  );
}
