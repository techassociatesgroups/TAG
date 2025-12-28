'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MagneticButton } from '@/components/MagneticButton';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl" />
            <div className="absolute inset-0 glass-card" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                  Ready to&nbsp;
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                    Transform?
                  </span>
                </h2>
              </motion.div>

              <motion.p
                className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Let&rsquo;s work together to bring your vision to life. Our team is ready to create something extraordinary.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <MagneticButton className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                  Start Your Project <ArrowRight className="ml-2 inline w-4 h-4" />
                </MagneticButton>
                <MagneticButton className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                  Schedule a Call
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
