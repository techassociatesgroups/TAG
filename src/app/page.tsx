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
  { image: '/assets/clothme_website.png' },
  { image: '/assets/course-website.png' },
  { image: '/assets/course2_website.png' },
  {image: '/assets/ev_website.png' },
  {image: '/assets/glamora_website.png' },
  {image: '/assets/gramathul_ecommerce.png' },
  {image: '/assets/realestate.png' },
  {image: '/assets/skinny_website.png' },
  {image: '/assets/Tag_website.png' },
  {image: '/assets/Trendy_ecommerce_template.png' },
  {image: '/assets/ux temp.png' }


];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <ScrollAwareBackground />
      <Hero />
      <AboutPortfolio />
      <Services />
      <section id="works" className="relative w-full overflow-hidden min-h-[500px] md:h-[700px] flex flex-col items-center bg-black">
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
