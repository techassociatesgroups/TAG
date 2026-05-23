"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden grid place-content-center px-4 py-24 pt-32 text-white font-sans bg-black">
      {/* CSS-Animated Background Aurora Glows (Compositor Thread Only - 0ms TBT) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <style>{`
          @keyframes fade-glow-1 { 0%, 100% { opacity: 0.15; transform: translate3d(-50%, -10%, 0) scale(1); } 25%, 75% { opacity: 0; transform: translate3d(-50%, -5%, 0) scale(1.05); } }
          @keyframes fade-glow-2 { 25% { opacity: 0.15; transform: translate3d(-50%, -8%, 0) scale(1); } 0%, 50%, 100% { opacity: 0; transform: translate3d(-50%, -12%, 0) scale(0.95); } }
          @keyframes fade-glow-3 { 50% { opacity: 0.15; transform: translate3d(-50%, -12%, 0) scale(1.02); } 25%, 75% { opacity: 0; transform: translate3d(-50%, -5%, 0) scale(0.98); } }
          @keyframes fade-glow-4 { 75% { opacity: 0.15; transform: translate3d(-50%, -5%, 0) scale(0.98); } 50%, 100%, 0% { opacity: 0; transform: translate3d(-50%, -10%, 0) scale(1.02); } }
          .hero-glow-1 { animation: fade-glow-1 24s ease-in-out infinite; will-change: transform, opacity; }
          .hero-glow-2 { animation: fade-glow-2 24s ease-in-out infinite; will-change: transform, opacity; }
          .hero-glow-3 { animation: fade-glow-3 24s ease-in-out infinite; will-change: transform, opacity; }
          .hero-glow-4 { animation: fade-glow-4 24s ease-in-out infinite; will-change: transform, opacity; }
          
          @keyframes border-glow-shift {
            0% { border-color: rgba(19, 255, 170, 0.4); box-shadow: 0 4px 20px rgba(19, 255, 170, 0.25); }
            25% { border-color: rgba(30, 103, 198, 0.4); box-shadow: 0 4px 20px rgba(30, 103, 198, 0.25); }
            50% { border-color: rgba(206, 132, 207, 0.4); box-shadow: 0 4px 20px rgba(206, 132, 207, 0.25); }
            75% { border-color: rgba(221, 51, 92, 0.4); box-shadow: 0 4px 20px rgba(221, 51, 92, 0.25); }
            100% { border-color: rgba(19, 255, 170, 0.4); box-shadow: 0 4px 20px rgba(19, 255, 170, 0.25); }
          }
          .hero-cta-btn {
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: border-glow-shift 12s linear infinite;
            will-change: border-color, box-shadow;
          }
        `}</style>
        
        {/* Glow circles of different colors that cross-fade */}
        <div className="absolute top-0 left-1/2 w-[120vw] h-[60vh] rounded-full blur-[100px] bg-[#13FFAA] hero-glow-1" />
        <div className="absolute top-0 left-1/2 w-[120vw] h-[60vh] rounded-full blur-[100px] bg-[#1E67C6] hero-glow-2" />
        <div className="absolute top-0 left-1/2 w-[120vw] h-[60vh] rounded-full blur-[100px] bg-[#CE84CF] hero-glow-3" />
        <div className="absolute top-0 left-1/2 w-[120vw] h-[60vh] rounded-full blur-[100px] bg-[#DD335C] hero-glow-4" />
      </div>

      {/* ---- Content ---- */}
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Tag */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 text-sm"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Crafting Unique Brand Identities
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-8"
        >
          Branding that you <br />
          <span className="italic font-light">need Indeed</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions.
        </motion.p>

        {/* Buttons with aurora glow accent */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hero-cta-btn"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-12 text-[10px] tracking-widest uppercase">
          <span>Scroll down</span>

          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center p-1" aria-hidden="true">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>

          <span>to see projects</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
