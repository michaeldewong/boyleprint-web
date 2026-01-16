import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import RfqForm from '@/components/RfqForm';

export default function Rfq({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  const initialProduct =
    searchParams?.product === 'eco-bags' ? 'Eco Bags' : undefined;

  return (
    <>
      <HeroSection
        id="hero"
        title="Request a quote — we respond with options, pricing, and timelines."
        subtitle=""
        ctaText="Start RFQ"
        ctaLink="#rfq-form"
      />

      <section id="rfq-form" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Name, Company, Email, Phone, Product type, Qty, Method, Deadline, Notes, Upload artwork.
            </h2>
            <RfqForm initialProduct={initialProduct} />
          </div>
        </div>
      </section>

      <Section
        id="what-to-prepare"
        title="Quantity + target date + logo/artwork + preferred material (if any)."
        ctaText="Upload Files"
        ctaLink="#rfq-form"
        variant="gray"
      />

      <Section
        id="response-time"
        title="Most quotes within 1 business day. Rush options available when possible."
        ctaText="Book a Call"
        ctaLink="/contact"
      />
    </>
  );
}
