'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Solutions',
      href: '/solutions',
      submenu: [
        { label: 'Creator Support', href: '/solutions#solutions-creator-support' },
        { label: 'Distributor & B2B Program', href: '/solutions#solutions-distributor' },
        { label: 'Eco Bag Program', href: '/solutions#solutions-eco-bag-program' },
        { label: 'Brand Launch Kits', href: '/solutions#solutions-brand-launch-kits' },
        { label: 'Fulfillment & Kitting', href: '/solutions#solutions-fulfillment-kitting' },
      ],
    },
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'Eco Bags', href: '/products/eco-bags' },
        { label: 'Insulated Bags', href: '/products#products-insulated-bags' },
        { label: 'Patches', href: '/products#products-patches' },
        { label: 'Apparel Printing', href: '/products#products-apparel-printing' },
        { label: 'Stickers & Packaging', href: '/products#products-stickers-packaging' },
        { label: 'Product FAQ', href: '/products#products-faq' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Printing Methods', href: '/services#services-printing-methods' },
        { label: 'File & Design Support', href: '/services#services-file-design-support' },
        { label: 'Sampling & Proofing', href: '/services#services-sampling-proofing' },
        { label: 'Quality Control', href: '/services#services-quality-control' },
      ],
    },
    { label: 'RFQ', href: '/rfq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-slate-900 hover:text-slate-700"
            >
              Boyle Print
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                  >
                    <Link
                      href={link.href}
                      className={`font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-slate-900'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-slate-200 rounded-md shadow-lg min-w-[240px] py-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-slate-900'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button href="/contact" variant="ghost">
              Book a Call
            </Button>
            <Button href="/rfq" variant="primary">
              Request a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => toggleMobileSubmenu(link.label)}
                        className="w-full flex items-center justify-between text-slate-700 hover:text-slate-900 font-medium"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`h-5 w-5 transition-transform ${
                            mobileSubmenuOpen[link.label] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileSubmenuOpen[link.label] && (
                        <div className="pl-4 pt-2 space-y-2">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-sm text-slate-600 hover:text-slate-900"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-slate-900 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4">
                <Button href="/contact" variant="ghost" className="w-full">
                  Book a Call
                </Button>
                <Button href="/rfq" variant="primary" className="w-full">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
