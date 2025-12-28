"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const SECTION_HEIGHT = 1500;

export const SmoothScrollHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 100vh", "end start"],
  });

  const clip1 = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const clip2 = useTransform(scrollYProgress, [0, 1], [75, 100]);

  const clipPath = useMotionTemplate`
    polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%,
            ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)
  `;

  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["170%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 200vh)` }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full"
        style={{
          clipPath,
          backgroundSize,
          opacity,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-black" />
    </motion.section>
  );
};

type ParallaxImgProps = {
  src: string;
  alt: string;
  start?: number;
  end?: number;
  className?: string;
};

const ParallaxImg: React.FC<ParallaxImgProps> = ({ src, alt, start = 0, end = 0, className }) => {
  const ref = useRef<HTMLImageElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${-end}px`],
  });

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  const transform = useMotionTemplate`translateY(${y}px)`;

  return <motion.img src={src} alt={alt} ref={ref} className={className} style={{ transform, opacity }} />;
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0"
        alt="Space launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3"
        alt="Rocket"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2"
        alt="Satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893"
        alt="Orbital satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

export default SmoothScrollHero;
