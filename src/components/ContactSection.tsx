'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Website Development' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted', form);
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', phone: '', service: 'Website Development' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Talk</span>
          </h2>
          <p className="text-white/60 text-lg mb-12">Get in touch with our team to discuss your project requirements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:hello@techassociatesgroups@gmail.com" className="text-white/70 hover:text-white transition">
                  techassociatesgroups@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/919999999999" className="text-white/70 hover:text-white transition">
                  +91 99999 99999
                </a>
                <p className="text-white/50 text-sm mt-2">We respond within 2 hours</p>
              </div>
            </div>

            <p className="text-white/60 text-lg leading-relaxed">
              Have a project in mind? We&apos;re ready to help bring your vision to life with cutting-edge design and development solutions.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition"
            >
              <option value="Website Development">Website Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing & SEO</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="E-Commerce">E-Commerce Solutions</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
