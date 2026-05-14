'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import GlassCard from "@/components/GlassCard";
import { ExternalLink } from 'lucide-react';
import { works, Work } from '@/lib/data';

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section ref={containerRef} className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-3">
              Featured <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Works</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Explore our latest projects and see how we&rsquo;re pushing the boundaries of digital design and development.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {works.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 0.08}>
              <div>
                <GlassCard className="group relative p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-3">
                      <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5">
                        {work.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {work.title}
                      </h3>
                      {work.description && (
                        <p className="text-white/70 text-base leading-relaxed max-w-xl">
                          {work.description}
                        </p>
                      )}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                      className="md:col-span-1 flex items-center justify-center"
                    >
                      <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                        <img src={work.image} alt={work.title} loading="lazy" decoding="async" width={400} height={400} className="w-full h-full object-cover" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
