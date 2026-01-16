import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Careers — Join Our Production Team in Los Angeles',
  description: 'Join Boyle Print production team. Clear standards, stable workflow, and growth opportunities. Production, print operator, QC, and sales support roles available.',
  alternates: {
    canonical: `${baseUrl}/careers`,
  },
  openGraph: {
    title: 'Careers — Join Our Production Team in Los Angeles | Boyle Print',
    description: 'Join Boyle Print production team. Clear standards, stable workflow, and growth opportunities. Production roles available.',
    url: `${baseUrl}/careers`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Careers — Join Our Production Team in Los Angeles | Boyle Print',
    description: 'Join Boyle Print production team. Clear standards, stable workflow, and growth opportunities. Production roles available.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Careers() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Join a production team that cares about craft, speed, and people."
        subtitle=""
        ctaText="See Open Roles"
        ctaLink="#open-roles"
      />

      <Section
        id="why-work-here"
        title="Clear standards, stable workflow, and growth opportunities."
        ctaText="Apply Now"
        ctaLink="mailto:REPLACE_ME@example.com"
      />

      <Section
        id="open-roles"
        title="Production • Print operator • QC • Sales support (update as needed)."
        ctaText="Send Resume"
        ctaLink="mailto:REPLACE_ME@example.com"
        variant="gray"
      />
    </>
  );
}
