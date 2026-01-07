'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Website Development' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to our internal API route to keep the Form ID secure
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', service: 'Website Development' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("There was a problem sending your message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
                <a href="mailto:info@associatesgroups.in" className="text-white/70 hover:text-white transition">
                  info@associatesgroups.in
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/916374846995" className="text-white/70 hover:text-white transition">
                  +91 63748 46995 
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
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400 focus:bg-white/15 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="Website Development" className="text-black">Website Development</option>
              <option value="UI/UX Design" className="text-black">UI/UX Design</option>
              <option value="Digital Marketing" className="text-black">Digital Marketing & SEO</option>
              <option value="Brand Identity" className="text-black">Brand Identity</option>
              <option value="E-Commerce" className="text-black">E-Commerce Solutions</option>
            </select>

            <motion.button
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitted ? '✓ Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
