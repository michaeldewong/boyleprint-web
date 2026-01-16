import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

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
