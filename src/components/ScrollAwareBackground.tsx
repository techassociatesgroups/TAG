'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollAwareBackground() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const color = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [
      'rgba(147,51,234,0.18)',
      'rgba(37,99,235,0.18)',
      'rgba(16,185,129,0.18)',
      'rgba(50,50,50,0.08)',
    ]
  );

  const color2 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [
      'rgba(99,102,241,0.12)',
      'rgba(59,130,246,0.12)',
      'rgba(34,197,94,0.12)',
      'rgba(30,30,30,0.06)',
    ]
  );

  const color3 = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [
      'rgba(167,139,250,0.1)',
      'rgba(99,102,241,0.1)',
      'rgba(52,211,153,0.1)',
      'rgba(40,40,40,0.04)',
    ]
  );

  return (
    <div ref={ref} className="fixed inset-0 -z-10 pointer-events-none">
      <motion.div
        style={{ background: color, x: 0 }}
        className="absolute left-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -20, 0], scale: [1, 1.05, 1, 1] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ background: color2 }}
        className="absolute right-[-15%] top-[20%] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-15"
        animate={{ x: [0, -50, 30, 0], y: [0, -20, 40, 0], scale: [1, 1.06, 1, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ background: color3 }}
        className="absolute left-[10%] bottom-[-10%] w-[70vw] h-[70vw] rounded-full blur-[180px] opacity-10"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -40, 0], scale: [1, 1.08, 1, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
      />
    </div>
  );
}
