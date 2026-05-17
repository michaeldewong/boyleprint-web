import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | Boyle Print',
  description:
    'Terms of Service for Boyle Print contract decoration, sample, fulfillment, and production support services.',
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="May 2026"
      intro={
        <>
          These Terms of Service (&quot;Terms&quot;) govern the relationship between Boyle Print
          (&quot;Boyle Print,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) and any customer
          (&quot;Customer,&quot; &quot;you,&quot; &quot;your&quot;) engaging Boyle Print for
          decoration, sample, fulfillment, or production support services. By requesting a quote,
          placing an order, or otherwise engaging Boyle Print, you agree to these Terms.
        </>
      }
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By engaging Boyle Print for decoration, sample, fulfillment, or production support
          services, you agree to these Terms of Service. These Terms apply to all quotes, orders,
          and projects completed by Boyle Print.
        </p>
      </LegalSection>
      <LegalSection title="2. Scope of Services">
        <p>
          Boyle Print provides contract decoration, sample making, relabeling, hangtag application,
          kitting, packing, and small-batch fulfillment services. Services may be performed in-house
          or through a coordinated production network of trusted partners. The scope of any specific
          project is defined by the corresponding quote and order confirmation.
        </p>
      </LegalSection>
      <LegalSection title="3. Quotes and Pricing">
        <p>
          Quotes are valid for thirty (30) days from issuance unless otherwise stated. Quotes are
          based on the information provided by Customer at the time of inquiry. Changes to product,
          quantity, artwork, decoration method, or fulfillment scope may result in revised pricing.
        </p>
      </LegalSection>
      <LegalSection title="4. Artwork and Approval">
        <p>
          Customer is responsible for providing print-ready artwork or approving artwork prepared by
          Boyle Print. Production does not begin until artwork is approved in writing or by clear
          electronic confirmation. Boyle Print is not responsible for errors in customer-approved
          artwork, including spelling, color, placement, or sizing.
        </p>
      </LegalSection>
      <LegalSection title="5. Customer-Supplied Goods">
        <p>
          Boyle Print accepts customer-supplied apparel and products subject to inspection and review.
          Customer-supplied goods are decorated at Customer&apos;s risk. Boyle Print does not warrant
          the quality, suitability, or replacement value of customer-supplied goods, and is not
          responsible for spoilage on items not sourced through Boyle Print beyond reasonable
          industry standards.
        </p>
      </LegalSection>
      <LegalSection title="6. Samples and Mockups">
        <p>
          For most projects, Boyle Print provides a digital mockup or physical sample prior to
          production. Customer approval of the mockup or sample constitutes authorization to proceed
          with full production. Sample fees, if applicable, are quoted separately and may be credited
          toward production on qualifying orders.
        </p>
      </LegalSection>
      <LegalSection title="7. Production and Lead Times">
        <p>
          Production begins after artwork approval, product availability, and final order confirmation.
          Estimated lead times are provided in good faith but are not guaranteed. Rush service may be
          available based on capacity and is quoted separately.
        </p>
      </LegalSection>
      <LegalSection title="8. Spoilage Allowance">
        <p>
          A spoilage allowance of up to two percent (2%) per decoration method is industry standard.
          Boyle Print will use reasonable care in production but does not guarantee zero spoilage.
          Spoilage expectations will be discussed for orders where every unit is critical.
        </p>
      </LegalSection>
      <LegalSection title="9. Color Matching">
        <p>
          Exact color matching across decoration methods, garment types, dye lots, and production runs
          is not guaranteed. Boyle Print will match approved samples and Pantone references to the best
          of its ability within the limits of each decoration method.
        </p>
      </LegalSection>
      <LegalSection title="10. Final Sale">
        <p>
          Decorated goods are produced to customer specification and are considered final sale. Returns
          are not accepted for buyer&apos;s remorse, ordering errors, post-approval changes, or color
          variations within reasonable industry tolerance.
        </p>
      </LegalSection>
      <LegalSection title="11. Claims">
        <p>
          Claims for production defects, missing items, or order discrepancies must be submitted in
          writing to quotes@boyleprint.com within three (3) business days of delivery or pickup.
          Claims must include photographs and the order reference. Claims submitted after this window
          may not be accepted.
        </p>
      </LegalSection>
      <LegalSection title="12. Limitation of Liability">
        <p>
          Boyle Print&apos;s total liability for any claim arising from a project is limited to the
          amount paid by Customer for the affected portion of that project. Boyle Print is not liable
          for indirect, incidental, consequential, or lost-profit damages.
        </p>
      </LegalSection>
      <LegalSection title="13. Intellectual Property">
        <p>
          Customer represents and warrants that Customer owns or has the rights to all artwork, logos,
          trademarks, and brand assets submitted for decoration. Customer indemnifies Boyle Print
          against any claim of copyright, trademark, or other intellectual property infringement
          arising from customer-submitted artwork.
        </p>
      </LegalSection>
      <LegalSection title="14. Confidentiality and Distributor Projects">
        <p>
          For distributor-referred projects, Boyle Print does not market directly to the
          distributor&apos;s end customer. Confidential project handling, neutral packing, and
          distributor-branded packing slips are available upon request.
        </p>
      </LegalSection>
      <LegalSection title="15. Payment Terms">
        <p>
          New accounts may require deposit before production. Net terms may be available after credit
          approval and successful order history. Final balance is due before release of completed goods
          unless approved terms are in place.
        </p>
      </LegalSection>
      <LegalSection title="16. Cancellation">
        <p>
          Orders may be cancelled before production begins, subject to recovery of incurred costs,
          including sample fees, artwork preparation, and any sourced materials. Cancellations after
          production begins are not accepted.
        </p>
      </LegalSection>
      <LegalSection title="17. Force Majeure">
        <p>
          Boyle Print is not liable for delays or non-performance caused by events beyond reasonable
          control, including supply chain disruption, carrier delays, labor disputes, fire, flood, public
          health events, or government action.
        </p>
      </LegalSection>
      <LegalSection title="18. Governing Law">
        <p>
          These Terms are governed by the laws of the State of California, without regard to its
          conflict of laws principles. Any dispute arising from these Terms or any Boyle Print project
          shall be resolved in the state or federal courts located in Los Angeles County, California.
        </p>
      </LegalSection>
      <LegalSection title="19. Changes to Terms">
        <p>
          Boyle Print may update these Terms of Service from time to time. The current version is posted
          on this page. Continued use of Boyle Print services after an update constitutes acceptance of
          the revised Terms.
        </p>
      </LegalSection>
      <LegalSection title="20. Contact">
        <p>Questions about these Terms may be sent to quotes@boyleprint.com.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
