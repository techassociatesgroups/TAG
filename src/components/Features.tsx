'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Zap, Palette, Smartphone, Gauge } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning Fast',
    description: 'Optimized performance that delivers instant results and smooth interactions.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Beautiful Design',
    description: 'Thoughtfully crafted interfaces that balance aesthetics with functionality.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Responsive',
    description: 'Works seamlessly across all devices and screen sizes.',
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: 'Scalable',
    description: 'Built to grow with your business and adapt to changing needs.',
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Why Choose <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Us</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              We combine innovative technology with exceptional design to deliver results that exceed expectations.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card p-8 rounded-xl space-y-4 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white relative z-10"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white relative z-10">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
