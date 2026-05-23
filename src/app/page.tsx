import Hero from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { ScrollAwareBackground } from '@/components/ScrollAwareBackground';
import { AboutPortfolio } from '@/components/AboutPortfolio';
import { WorksSection } from '@/components/WorksSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import dynamic from 'next/dynamic';

// Dynamic imports for code splitting below-the-fold heavy components
const Services = dynamic(() => import('@/components/Services').then(mod => mod.Services), { 
  ssr: true 
});
const Pricing = dynamic(() => import('@/components/Pricing').then(mod => mod.Pricing), { 
  ssr: true 
});
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.Testimonials), { 
  ssr: true 
});
const ContactSection = dynamic(() => import('@/components/ContactSection').then(mod => mod.ContactSection), { 
  ssr: true 
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <ScrollAwareBackground />
      <Hero />
      <AboutPortfolio />
      <Services />
      <WorksSection />
      <Pricing />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
