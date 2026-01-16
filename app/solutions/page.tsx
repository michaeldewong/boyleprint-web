import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

export default function Solutions() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Solutions built around how you sell: creators, brands, and distributors."
        subtitle=""
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="solutions-creator-support"
        title="For Artists & Independent Brands / Emerging Brands / Small Studios (pick one)."
        description="We help you choose the right method, prep files, and build repeatable SKUs."
        ctaText="Talk to Us"
        ctaLink="/contact"
      />

      <Section
        id="solutions-distributor"
        title="Reliable production partner for resellers: consistent quality, predictable lead times, scalable capacity."
        ctaText="Get Distributor Quote"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="solutions-eco-bag-program"
        title="Eco bags and insulated bags designed for modern compliance and customer expectations."
        description="Material options, print methods, and packaging guidance included."
        ctaText="Explore Eco Bags"
        ctaLink="/products#products-eco-bags"
      />

      <Section
        id="solutions-brand-launch-kits"
        title="Starter kits for new launches: bags + patches + labels + packaging, bundled and ready."
        ctaText="Build a Kit"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="solutions-fulfillment-kitting"
        title="Kitting, labeling, and pack-out support for campaigns and drops (when needed)."
        ctaText="Ask About Fulfillment"
        ctaLink="/contact"
      />
    </>
  );
}
