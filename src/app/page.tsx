import Hero from '@/components/Hero';
import { Footer, Services, Testimonials, Nav } from '@/components';
import { AboutPortfolio, FloatingWhatsApp, ContactSection, Pricing, AnimatedMist } from '@/components';
import { ScrollStackProjects, SmoothScrollHero } from "@/components";
import { ScrollAwareBackground } from '@/components/ScrollAwareBackground';


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <ScrollAwareBackground />
      <Hero />
      <AboutPortfolio />
      <Services />
       <SmoothScrollHero />
      <ScrollStackProjects />
      <Pricing />
      <Testimonials />
      <ContactSection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
