// src/app/layout.tsx
import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/SmoothScroll';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'Tech Associates Groups | Custom Branding & Digital Solutions',
  description: 'Elevate your brand with custom identity, website development, 3D modeling, UI/UX design, and digital marketing. Transforming ideas into digital reality.',
  openGraph: {
    title: 'Tech Associates Groups | Custom Branding & Digital Solutions',
    description: 'Elevate your brand with custom identity, website development, 3D modeling, UI/UX design, and digital marketing. Transforming ideas into digital reality.',
    url: 'https://tech.associatesgroups.in',
    siteName: 'Tech Associates Groups',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Associates Groups | Custom Branding & Digital Solutions',
    description: 'Elevate your brand with custom identity, website development, 3D modeling, UI/UX design, and digital marketing. Transforming ideas into digital reality.',
  },
  alternates: {
    canonical: 'https://tech.associatesgroups.in',
  },
  icons: {
    icon: '/assets/favicon1.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tech.associatesgroups.in/#organization",
        "name": "Tech Associates Groups",
        "url": "https://tech.associatesgroups.in",
        "logo": "https://tech.associatesgroups.in/assets/favicon1.png",
        "sameAs": [
          "https://facebook.com",
          "https://twitter.com",
          "https://instagram.com",
          "https://linkedin.com"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-63748-46995",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["en", "ta"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://tech.associatesgroups.in/#website",
        "url": "https://tech.associatesgroups.in",
        "name": "Tech Associates Groups",
        "description": "Custom Branding, Web Development & 3D Digital Solutions"
      },
      {
        "@type": "FAQPage",
        "@id": "https://tech.associatesgroups.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Tech Associates Groups offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tech Associates Groups specializes in custom website development, creative design (logos, UI/UX, re-branding), 3D web modeling, and digital marketing/SEO services."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price for a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our custom website development plans start at just ₹4999, which includes hosting support, responsive design, and free integration."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/favi.png" />
        <title>Tech Associates Groups | Custom Branding & Digital Solutions</title>
        <meta name="description" content="Elevate your brand with custom identity, website development, 3D modeling, UI/UX design, and digital marketing." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}