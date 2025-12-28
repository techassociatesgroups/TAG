import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'Premium Digital Studio',
  description: 'Crafting exceptional digital experiences with Next.js, Tailwind CSS, and Framer Motion.',
  keywords: ['design', 'development', 'web', 'studio', 'nextjs'],
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
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
