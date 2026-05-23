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
    <div ref={ref} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes float-blob-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(40px, 30px, 0) scale(1.05); }
          66% { transform: translate3d(-20px, -20px, 0) scale(0.95); }
        }
        @keyframes float-blob-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(-50px, -20px, 0) scale(1.06); }
          66% { transform: translate3d(30px, 40px, 0) scale(0.94); }
        }
        @keyframes float-blob-3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(60px, 40px, 0) scale(1.08); }
          66% { transform: translate3d(-30px, -40px, 0) scale(0.92); }
        }
        .blob-1 { animation: float-blob-1 22s ease-in-out infinite; will-change: transform; }
        .blob-2 { animation: float-blob-2 18s ease-in-out infinite; will-change: transform; }
        .blob-3 { animation: float-blob-3 25s ease-in-out infinite; will-change: transform; }
      `}</style>
      <motion.div
        style={{ background: color }}
        className="absolute left-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-20 blob-1"
      />

      <motion.div
        style={{ background: color2 }}
        className="absolute right-[-15%] top-[20%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-15 blob-2"
      />

      <motion.div
        style={{ background: color3 }}
        className="absolute left-[10%] bottom-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-10 blob-3"
      />
    </div>
  );
}
