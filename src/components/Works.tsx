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

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div>
                <GlassCard className="group relative p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5">
                        {project.category}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      className="md:col-span-1 flex items-center justify-center"
                    >
                      <div
                        className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`}
                      />
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
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
