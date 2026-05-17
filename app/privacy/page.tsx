import type { Metadata } from 'next';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Boyle Print',
  description:
    'Privacy Policy for Boyle Print, a Los Angeles–based contract decoration and production support business.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="May 2026"
      intro={
        <>
          Boyle Print (&quot;Boyle Print,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
          provides contract decoration and production support services to distributors, brands, and
          businesses. This Privacy Policy describes how we collect, use, and protect information when
          you visit our website, request a quote, or place an order.
        </>
      }
    >
      <LegalSection title="1. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Information you provide: name, company name, email address, phone number (if provided),
            project details, artwork files, shipping address, and any other information you submit
            through our forms or in email correspondence.
          </li>
          <li>
            Information collected automatically: standard server log information such as IP address,
            browser type, pages visited, and date and time of access. We do not currently use
            third-party analytics, advertising trackers, or cross-site tracking tools.
          </li>
        </ul>
      </LegalSection>
      <LegalSection title="2. How We Use Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Respond to quote requests and project inquiries</li>
          <li>Coordinate decoration, sample, finishing, and fulfillment services</li>
          <li>Communicate about active projects and order status</li>
          <li>Maintain order history and customer records</li>
          <li>Comply with legal, tax, and accounting obligations</li>
        </ul>
      </LegalSection>
      <LegalSection title="3. How We Share Information">
        <p>
          We do not sell customer information. We share project information only with production
          partners and shipping carriers as necessary to complete projects. For distributor-referred
          projects, we do not market directly to the distributor&apos;s end customer.
        </p>
      </LegalSection>
      <LegalSection title="4. Data Storage and Security">
        <p>
          We store customer and project information using standard business security practices. While
          no system is fully secure, we take reasonable precautions to protect the information we
          collect against unauthorized access, alteration, or disclosure.
        </p>
      </LegalSection>
      <LegalSection title="5. Artwork and Files">
        <p>
          Customer-submitted artwork files are used only for the project for which they were submitted.
          We do not reuse, resell, publish, or display customer artwork without written consent.
        </p>
      </LegalSection>
      <LegalSection title="6. Cookies">
        <p>
          Our website uses essential cookies required for basic site functionality. We do not currently
          use marketing cookies or third-party tracking cookies.
        </p>
      </LegalSection>
      <LegalSection title="7. Your Choices">
        <p>
          You may request access to, correction of, or deletion of the information we hold about you by
          contacting quotes@boyleprint.com. Some information may be retained as required for accounting,
          tax, or legal purposes.
        </p>
      </LegalSection>
      <LegalSection title="8. Children&apos;s Privacy">
        <p>
          Our services are intended for businesses, distributors, brands, and adult creators. We do
          not knowingly collect information from individuals under 18.
        </p>
      </LegalSection>
      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The current version is posted on this
          page.
        </p>
      </LegalSection>
      <LegalSection title="10. Contact">
        <p>Questions about this Privacy Policy may be sent to quotes@boyleprint.com.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
