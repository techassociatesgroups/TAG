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
    url: 'https://associatesgroups.in',
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
    canonical: 'https://associatesgroups.in',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-[#ededed]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}