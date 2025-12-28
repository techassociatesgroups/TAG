'use client';

import { motion } from 'framer-motion';

export function AnimatedMist() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Left blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Right blob */}
      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.2, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Center accent blob */}
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 60, -80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/3 left-1/3 w-80 h-80 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}
