'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Nav, FloatingWhatsApp, Footer, ScrollAwareBackground } from '@/components';
import GlassCard from '@/components/GlassCard';
import { works as allProjects, flyingPosters } from '@/lib/data';
import FlyingPosters from '@/components/FlyingPosters';
import React from 'react';

const categories = ['All', 'Web Development', 'Branding', 'UI/UX Design', 'Digital Marketing', 'App Development', 'Web Design', 'Nonprofit', 'E‑commerce', 'Product', 'Retail', 'Consulting', 'Design'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Nav />
      <ScrollAwareBackground />
      <main className="overflow-x-hidden pt-24">
        {/* Hero */}
        <section className="relative w-full h-[50vh] py-20 px-4 sm:px-6 lg:px-8">
          <FlyingPosters items={flyingPosters} />
        </section>
        
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Portfolio</span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Explore our complete collection of projects and see how we help businesses transform through design and technology.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full group overflow-hidden">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 bg-gray-800">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-64">
                      <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-3 flex-grow">
                        {project.description}
                      </p>
                      
                      <motion.a
                        href={'#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm font-semibold"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FloatingWhatsApp />
        <Footer />
      </main>
    </>
  );
}