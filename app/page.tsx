import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Production-ready printing for brands, creators, and distributors — made in Los Angeles',
  description: 'Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment from sample to delivery.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Production-ready printing for brands, creators, and distributors — made in Los Angeles',
    description: 'Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment.',
    url: baseUrl,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Production-ready printing for brands, creators, and distributors — made in Los Angeles',
    description: 'Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Production-ready printing for brands, creators, and distributors — made in Los Angeles."
        subtitle="Fast quoting, reliable quality, and a partner mindset from sample to delivery."
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="who-we-serve"
        title="Creators & independent brands, promo distributors, events, and corporate teams."
        description="From 50 pcs to 50,000 pcs — we scale with you."
        ctaText="See Solutions"
        ctaLink="/solutions"
      />

      <Section
        id="what-we-make"
        title="Eco bags • Insulated bags • Patches • Printed apparel • Stickers & packaging."
        description="Built for retail, events, and resale."
        ctaText="Browse Products"
        ctaLink="/products"
        variant="gray"
      />

      <Section
        id="services-overview"
        title="DTF/DTG • Screen print • Embroidery • Heat press • Laser/engraving (as needed)."
        description="We help pick the right method based on fabric, qty, budget, and deadline."
        ctaText="View Services"
        ctaLink="/services"
      />

      <Section
        id="creator-support"
        title="We support artists and small brands with clear guidance, repeatable specs, and fair processes."
        description="Bring your art — we'll help you turn it into production."
        ctaText="Explore Creator Support"
        ctaLink="/solutions#creator-support"
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
        id="trust-signals"
        title="LA-based production • Transparent workflow • Quality checks • Clear timelines."
        description="We communicate like a partner — no guessing, no surprises."
        ctaText="Get a Quote"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="process"
        title="1) RFQ  2) Proof & sample  3) Production  4) QC  5) Shipping / pickup."
        description="Most quotes returned within 1 business day."
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
