import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

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
