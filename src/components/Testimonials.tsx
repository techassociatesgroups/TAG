'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from "@/components/GlassCard";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "TechStart Solutions",
    role: "CEO",
    testimonial: "Exceptional work! They transformed our website and increased conversions by 150%. Highly recommend their services!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Digital Ventures",
    role: "Marketing Director",
    testimonial: "The team's expertise in UI/UX design was evident from day one. Our users love the new interface!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "E-Commerce Plus",
    role: "Founder",
    testimonial: "Outstanding digital marketing strategies. Our sales increased significantly within 3 months!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
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
