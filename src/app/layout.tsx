'use client';

import { SmoothScroll } from '@/components/SmoothScroll';
import '@/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/favi.png" />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
