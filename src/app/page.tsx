import Hero from '@/components/Hero';
import { Footer, Services, Testimonials, Nav, AboutPortfolio, ContactSection, Pricing, ScrollAwareBackground, FloatingWhatsApp } from '@/components';
import FlyingPosters from "@/components/FlyingPosters";

const items = [
  {image: '/assets/ashvathamanassociates.png'},
  { image: '/assets/blessing.png' },
  { image: '/assets/accounts website.png' },
  { image: '/assets/arultrust.png' },
  { image: '/assets/curves&fitz.png' },
  { image: '/assets/drivetech.png' },
  { image: '/assets/pattushop.png' },
  { image: '/assets/sunilassociates.png' },
  { image: '/assets/tamilai.png' },
];

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
        <FlyingPosters items={items} />
      </section>
      <Pricing />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
