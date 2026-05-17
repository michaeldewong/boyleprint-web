import type { ReactNode } from 'react';
import Link from 'next/link';

const servicesLinks: { label: string; href: string }[] = [
  { label: 'Contract Decoration', href: '/services' },
  { label: 'Sample & Prototype Support', href: '/services' },
  { label: 'Brand Drop Preparation', href: '/services' },
  { label: 'Archive Sale & Inventory', href: '/services' },
  { label: 'Relabeling, Tagging & Sale Prep', href: '/services' },
  { label: 'Fulfillment & Kitting', href: '/services' },
];

const programsLinks: { label: string; href: string }[] = [
  { label: 'For Distributors', href: '/for-distributors' },
  { label: 'Request a Quote', href: '/rfq' },
  { label: 'Process', href: '/process' },
  { label: 'FAQ', href: '/#faq' },
];

const companyLinks: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
];

function FooterColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
      {children}
    </h3>
  );
}

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((item) => (
        <li key={`${item.label}-${item.href}`}>
          <Link
            href={item.href}
            className="text-sm text-slate-300 hover:text-white transition-colors leading-snug"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-x-8 sm:gap-y-12 lg:gap-10">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">Boyle Print</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Los Angeles–based contract decoration, production support, and small-batch
              fulfillment for distributors, brands, and businesses.
            </p>
          </div>

          <div>
            <FooterColumnHeading>Services</FooterColumnHeading>
            <FooterLinkList links={servicesLinks} />
          </div>

          <div>
            <FooterColumnHeading>Programs</FooterColumnHeading>
            <FooterLinkList links={programsLinks} />
          </div>

          <div className="space-y-6">
            <FooterColumnHeading>Contact</FooterColumnHeading>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Studio & Production
              </p>
              <p className="text-sm text-slate-300">By Appointment — Los Angeles, CA</p>
            </div>

            <div className="text-sm text-slate-300">
              <p>
                <a
                  href="mailto:quotes@boyleprint.com"
                  className="text-slate-200 hover:text-white underline-offset-2 hover:underline"
                >
                  Email: quotes@boyleprint.com
                </a>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Business Hours
              </p>
              <p className="text-sm text-slate-300">Monday–Friday, 9:00 AM – 6:00 PM PT</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Service Area
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Los Angeles County, Orange County, and broader Southern California
              </p>
            </div>
          </div>

          <div>
            <FooterColumnHeading>Company</FooterColumnHeading>
            <FooterLinkList links={companyLinks} />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800">
          <p className="text-center text-xs text-slate-400 leading-relaxed px-2">
            <span>© 2026 Boyle Print</span>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <Link href="/privacy" className="hover:text-white underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <Link href="/terms" className="hover:text-white underline-offset-2 hover:underline">
              Terms of Service
            </Link>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <Link href="/contact" className="hover:text-white underline-offset-2 hover:underline">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
