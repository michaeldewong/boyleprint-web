import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boyleprint.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Boyle Print | Production-ready printing for brands, creators, and distributors — made in Los Angeles",
    template: "%s | Boyle Print",
  },
  description: "Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment from sample to delivery.",
  keywords: ["Los Angeles printing", "screen print LA", "embroidery", "DTF printing", "DTG printing", "eco bags", "custom printing", "production printing", "brands printing", "creator printing", "distributor printing"],
  authors: [{ name: "Boyle Print" }],
  creator: "Boyle Print",
  publisher: "Boyle Print",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Boyle Print",
    title: "Boyle Print | Production-ready printing for brands, creators, and distributors — made in Los Angeles",
    description: "Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment from sample to delivery.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Boyle Print - Los Angeles Production Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boyle Print | Production-ready printing for brands, creators, and distributors — made in Los Angeles",
    description: "Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods. Fast quoting, reliable quality, and scalable fulfillment.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes here if needed
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'manufacturing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Boyle Print',
    url: baseUrl,
    description: 'Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    sameAs: [],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Boyle Print',
    url: baseUrl,
    description: 'Production-ready printing for brands, creators, and distributors — made in Los Angeles',
    publisher: {
      '@type': 'Organization',
      name: 'Boyle Print',
    },
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: 'Boyle Print',
    url: baseUrl,
    description: 'Los Angeles production partner for screen print, embroidery, DTF/DTG, eco bags and custom goods.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Printing Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Screen Printing',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Embroidery',
        },
        {
          '@type': 'OfferCatalog',
          name: 'DTF/DTG Printing',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Eco Bags',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Custom Goods',
        },
      ],
    },
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
