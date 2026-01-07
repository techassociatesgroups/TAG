'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from "@/components/GlassCard";

const testimonials = [
  {
    id: 1,
    name: "sajith ram",
    company: "deffo tech",
    role: "CEO",
    testimonial: "The team delivered a high-quality product that exceeded our expectations. Truly professional service.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sajith"
  },
  {
    id: 2,
    name: "Sunil",
    company: "sunil associates",
    role: "Owner",
    testimonial: "Best services support I have ever experienced. The team is always there to help.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunil"
  },
  {
    id: 3,
    name: "karthiga",
    company: "srisai academy",
    role: "Director",
    testimonial: "Incredibly quick website designs without compromising on quality. Very impressed with the turnaround time.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=karthiga"
  },
  {
    id: 4,
    name: "Emma Davis",
    company: "Creative Agency",
    role: "Project Manager",
    testimonial: "Professional, responsive, and innovative. They delivered exactly what we needed and more!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            What Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Clients Say</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6 flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.testimonial}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-white/60 text-xs">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
