'use client';

import { motion } from 'framer-motion';
import GlassCard from "@/components/GlassCard";


const services = [
  {
    title: 'Website Development',
    description: 'Single page websites , Landing websites (5pages) , Ecommerce Websites , Custom web apps and more.',
    highlight: 'Websites starts from ₹4999/-',
  },
  {
    title: 'Creative Designing',
    description: 'Logo making , ui/ux for websites , apps , poster making , Rebranding and more.',
    highlight: 'Starting at ₹199/-',
  },
  {
    title: 'Digital Marketing & SEO',
    description: 'Meta Ads, Lead Gen, SEO strategies that convert.',
    highlight: 'Starting from ₹299/-',
  },
];

export function Services() {
  return (
    <section id="services" className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl">
            Comprehensive digital solutions tailored for your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="h-full flex flex-col p-8 relative border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
                <div className="text-sm text-white/80 font-medium pt-4 border-t border-white/10">
                  {service.highlight}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
