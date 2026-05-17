import Link from 'next/link';

export default function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="bg-slate-50 py-16 md:py-24 border-b border-slate-200"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Customers
          </p>
          <h2
            id="who-we-serve-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Built for the people who actually ship product.
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Distributors & Resellers</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-4 flex-1">
              Promotional product distributors, ASI / SAGE / DistributorCentral members, and
              resellers needing a reliable West Coast contract decorator for small-batch decoration,
              rush support, kitting, and blind drop-ship fulfillment.
            </p>
            <Link
              href="/for-distributors"
              className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline mt-auto"
            >
              For distributor program details →
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Brands & Labels</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Independent brands, small streetwear labels, and apparel sellers preparing limited
              releases, capsule drops, archive sales, and small-batch replenishment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Local Businesses</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Restaurants, gyms, cafés, salons, barbershops, schools, churches, event organizers, and
              community groups ordering uniforms, staff apparel, event merchandise, and promotional
              products.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Creators & Artists</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Artists, illustrators, musicians, and creators producing merchandise, capsule drops, and
              limited-edition products with decoration, sample approval, and small-batch fulfillment
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
