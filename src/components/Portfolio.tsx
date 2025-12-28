'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from "@/components/GlassCard";

export function Portfolio() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    caption: 'Responsive Website / Branding',
  }));

  return (
    <section id="portfolio" ref={ref} className="relative w-full h-screen overflow-hidden">
      <div className="container mx-auto px-6 py-24 h-full">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6">Trusted by 50+ Businesses Nationwide</h2>
        <p className="text-white/70 mb-8 max-w-2xl">A selection of recent website and design work — drag/scroll horizontally to explore.</p>

        <div className="relative h-[60vh] overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 items-center h-full will-change-transform">
            {projects.map((p) => (
              <div key={p.id} className="w-[65vw] min-w-[65vw] h-full">
                <GlassCard className="h-full flex flex-col p-6">
                  <div className="flex-1 bg-white/3 rounded-xl flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 opacity-40 rounded-xl" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="text-white/70">{p.caption}</p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
