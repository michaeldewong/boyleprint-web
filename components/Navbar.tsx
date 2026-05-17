'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from './Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'For Distributors', href: '/for-distributors' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-3 lg:py-0 lg:h-[4.25rem]">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
            >
              Boyle Print
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-x-1 xl:gap-x-2 lg:px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold tracking-tight rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-shrink-0 lg:items-center">
            <Button
              href="/rfq"
              variant="primary"
              className="shadow-md px-5 py-2.5 text-sm font-semibold"
            >
              Request a Quote
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button
              href="/rfq"
              variant="primary"
              className="shadow-md px-4 py-2 text-sm font-semibold"
            >
              Request a Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-1 py-2.5 text-base font-semibold rounded-md ${
                  isActive(link.href)
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
