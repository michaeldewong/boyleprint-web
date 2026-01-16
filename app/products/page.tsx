import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  title: 'Products — Eco Bags, Insulated Bags, Patches, Apparel & More',
  description: 'Production-ready products built to sell. Eco bags, insulated bags, patches, printed apparel, stickers, and packaging. Durable, clean branding, made in Los Angeles.',
  alternates: {
    canonical: `${baseUrl}/products`,
  },
  openGraph: {
    title: 'Products — Eco Bags, Insulated Bags, Patches, Apparel & More | Boyle Print',
    description: 'Production-ready products built to sell. Eco bags, insulated bags, patches, printed apparel, stickers, and packaging. Made in Los Angeles.',
    url: `${baseUrl}/products`,
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    title: 'Products — Eco Bags, Insulated Bags, Patches, Apparel & More | Boyle Print',
    description: 'Production-ready products built to sell. Eco bags, insulated bags, patches, printed apparel, stickers, and packaging. Made in Los Angeles.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function Products() {
  return (
    <>
      <HeroSection
        id="hero"
        title="Products built to sell — durable, clean branding, production-ready."
        subtitle=""
        ctaText="Request a Quote"
        ctaLink="/rfq"
      />

      <Section
        id="products-eco-bags"
        title="Reusable bags for retail, events, and brands. Multiple materials and finishes."
        ctaText="Quote Eco Bags"
        ctaLink="/rfq"
      />

      <Section
        id="products-insulated-bags"
        title="Insulated bags for food, grocery, and promotions — performance + branding."
        ctaText="Quote Insulated Bags"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="products-patches"
        title="Embroidered / woven / PVC style options depending on your look and budget."
        ctaText="Quote Patches"
        ctaLink="/rfq"
      />

      <Section
        id="products-apparel-printing"
        title="DTF/DTG/screen print options for tees, hoodies, and uniforms."
        ctaText="Quote Apparel"
        ctaLink="/rfq"
        variant="gray"
      />

      <Section
        id="products-stickers-packaging"
        title="Labels, stickers, inserts, and simple packaging components."
        ctaText="Quote Packaging"
        ctaLink="/rfq"
      />

      <Section
        id="products-faq"
        title="Not sure which product fits? Tell us your use case and budget — we'll recommend."
        ctaText="Get Recommendation"
        ctaLink="/contact"
        variant="gray"
      />
    </>
  );
}
