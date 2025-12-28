'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg tracking-tight text-white hover:text-blue-400 transition">
            Tech Associates
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm text-white/70 hover:text-white transition">
              Services
            </Link>
            <Link href="/#our-works" className="text-sm text-white/70 hover:text-white transition">
              Works
            </Link>
            <Link href="/projects" className="text-sm text-white/70 hover:text-white transition">
              Projects
            </Link>
            <Link href="/#pricing" className="text-sm text-white/70 hover:text-white transition">
              Pricing
            </Link>
            <a
              href="/#contact"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Contact
            </a>

            <Link href="/#contact" className="ml-4 inline-flex items-center px-4 py-2 rounded-md backdrop-blur-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-semibold transition">
              Get Started
            </Link>
          </div>
          
          <div className="md:hidden text-white">
            <Link href="/#contact" className="text-sm">Menu</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
