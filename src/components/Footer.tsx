'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [

  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Mail className="w-5 h-5" />, href: 'techassociatesgroups@gmail.com', label: 'Email' },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      // { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      // { label: 'Work', href: '#work' },
      
    ],
  },
  
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
             Techassociatesgroups
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Creating exceptional digital experiences with innovation and precision.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2025 Techassociatesgroups. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
