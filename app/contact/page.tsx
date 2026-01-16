import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Contact Us — Talk to Our Team in Los Angeles',
  description: 'Contact Boyle Print for production printing questions, quotes, and support. Los Angeles pickup available by appointment. Fast response, clear communication.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us — Talk to Our Team in Los Angeles | Boyle Print',
    description: 'Contact Boyle Print for production printing questions, quotes, and support. Los Angeles pickup available by appointment.',
    url: `${baseUrl}/contact`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Contact Us — Talk to Our Team in Los Angeles | Boyle Print',
    description: 'Contact Boyle Print for production printing questions, quotes, and support. Los Angeles pickup available by appointment.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Contact() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Talk to a real team. We answer fast and clearly."
        subtitle=""
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="contact-details"
        title="Email, phone, business hours, and service area."
        ctaText="Email Us"
        ctaLink="mailto:REPLACE_ME@example.com"
      />

      <Section
        id="visit-pickup"
        title="Los Angeles pickup by appointment when available."
        ctaText="Schedule Pickup"
        ctaLink="/contact#contact-details"
        variant="gray"
      />
    </>
  );
}
