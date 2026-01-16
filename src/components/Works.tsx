'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import GlassCard from "@/components/GlassCard";
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Transformation',
    description: 'Revolutionizing business processes with cutting-edge technology solutions.',
    category: 'Web Development',
    color: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Brand Evolution',
    description: 'Creating compelling brand identities that resonate with audiences.',
    category: 'Branding',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Experience Design',
    description: 'Crafting immersive user experiences that drive engagement.',
    category: 'UX/UI Design',
    color: 'from-cyan-500 to-green-500',
  },
  {
    id: 4,
    title: 'Data Intelligence',
    description: 'Transforming raw data into actionable insights.',
    category: 'Analytics',
    color: 'from-green-500 to-emerald-500',
  },
];

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

        <div className="space-y-3 md:space-y-4">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div>
                <GlassCard className="group relative p-6 sm:p-8 md:p-10 lg:p-12 min-h-48 md:min-h-56 lg:min-h-64">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center h-full">
                    <div className="md:col-span-1 lg:col-span-2 space-y-3 md:space-y-4">
                      <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      className="lg:col-span-1 flex items-center justify-center w-full"
                    >
                      <div
                        className={`w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`}
                      />
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="absolute flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Animated border */}
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
