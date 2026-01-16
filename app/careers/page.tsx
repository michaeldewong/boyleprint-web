import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

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
