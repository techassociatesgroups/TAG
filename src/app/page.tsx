import Hero from '@/components/Hero';
import { Footer, Services, Testimonials, Nav, AboutPortfolio, ContactSection, Pricing, ScrollAwareBackground, FloatingWhatsApp } from '@/components';
import dynamic from 'next/dynamic';
const FlyingPosters = dynamic(() => import('@/components/FlyingPosters'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">Loading 3D Experience...</div>
});
import { flyingPosters } from '@/lib/data';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <ScrollAwareBackground />
      <Hero />
      <AboutPortfolio />
      <Services />
      <section id="works" className="relative w-full overflow-hidden min-h-[500px] md:h-[700px] flex flex-col items-center" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="absolute top-10 z-50 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Works</h2>
        </div>
        <FlyingPosters items={flyingPosters} />
      </section>
      <Pricing />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
