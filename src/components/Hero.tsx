"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #000000ff 50%, ${color})
  `;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen w-full overflow-hidden grid place-content-center px-4 py-24 pt-32 text-white font-sans"
    >
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
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-2xl"
          >
            Get Started Now
          </motion.button>

          <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition">
            See Projects
          </button>
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

          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>

          <span>to see projects</span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
