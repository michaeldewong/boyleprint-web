export default function OrderTermsCollapsible() {
  const terms: { title: string; body: string }[] = [
    {
      title: 'Deposit and Payment',
      body: 'A 50% deposit is required to begin production unless otherwise agreed in writing. Final balance is due before pickup, delivery, shipping, or fulfillment release.',
    },
    {
      title: 'Final Sale',
      body: 'All decorated, customized, relabeled, tagged, packed, or fulfilled goods are final sale once approved and produced.',
    },
    {
      title: 'Artwork',
      body: 'Customer is responsible for providing production-ready artwork. Artwork cleanup, recreation, resizing, vectorization, color separation, or file preparation may require additional fees.',
    },
    {
      title: 'Approval',
      body: 'Production begins only after written approval of quote, artwork, digital mockup, physical sample, or production details, as applicable.',
    },
    {
      title: 'Customer-Supplied Goods',
      body: "Customer-supplied garments or products are accepted at customer's risk. Boyle Print is not responsible for defects, dye migration, shrinkage, inconsistent sizing, fabric issues, hidden damage, or replacement cost of customer-supplied goods unless otherwise agreed in writing.",
    },
    {
      title: 'Spoilage Allowance',
      body: 'Decoration and production may involve a normal spoilage risk. For customer-supplied goods, customers are encouraged to provide extra units for testing and production allowance.',
    },
    {
      title: 'Color Matching',
      body: 'Color matching is approximate unless a paid color-matching test or approved physical sample is requested. Colors may vary based on fabric, material, lighting, print method, screen display, and production conditions.',
    },
    {
      title: 'Turnaround',
      body: 'Turnaround begins after deposit, artwork approval, product availability, and final production confirmation. Rush orders are accepted only based on available capacity.',
    },
    {
      title: 'Screen Print, Embroidery, and Specialty Production',
      body: 'Some decoration methods may be handled through coordinated production partners. Boyle Print remains responsible for project coordination and customer communication unless otherwise stated.',
    },
    {
      title: 'Claims',
      body: 'Any issue or claim must be submitted in writing within 3 business days of pickup, delivery, or receipt. Claims submitted after this period may not be accepted.',
    },
    {
      title: 'Copyright and Trademark',
      body: 'Customer confirms that they own or have permission to use all submitted artwork, logos, trademarks, and designs. Boyle Print reserves the right to refuse any project involving unauthorized trademarks, copyrighted designs, counterfeit branding, or legally restricted content.',
    },
    {
      title: 'Changes and Cancellations',
      body: 'Changes after approval may result in additional charges or timeline changes. Orders already in production cannot be canceled without payment for completed work, materials, and committed production costs.',
    },
    {
      title: 'Storage',
      body: 'Completed orders must be picked up or shipped within the agreed period. Storage fees may apply for completed goods left beyond the agreed pickup or shipping date.',
    },
    {
      title: 'Shipping',
      body: 'Boyle Print is not responsible for carrier delays, lost packages, or damage caused by third-party shipping carriers after the order has been released to the carrier.',
    },
    {
      title: 'Project-Based Quotes',
      body: 'All quotes are based on the information provided at the time of quotation. Final pricing may change if artwork, quantity, garment type, timeline, fulfillment requirements, or project scope changes.',
    },
  ];

  return (
    <section
      className="bg-stone-50 border-b border-slate-200 py-12 md:py-16"
      aria-labelledby="order-terms-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <details className="group rounded-lg border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1">
                Order Terms
              </p>
              <h2
                id="order-terms-heading"
                className="text-lg md:text-xl font-bold text-slate-900"
              >
                Standard order terms.
              </h2>
            </div>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-slate-600 transition-transform duration-300 group-open:-rotate-180"
              aria-hidden
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </summary>
          <div className="border-t border-slate-200 px-5 py-6 md:px-6 md:pb-8">
            <ol className="list-decimal pl-5 space-y-6 text-slate-700 marker:font-semibold marker:text-slate-900">
              {terms.map((term) => (
                <li key={term.title} className="pl-2">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{term.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-slate-600">{term.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </details>
      </div>
    </section>
  );
}
