'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import GlassCard from "@/components/GlassCard";

const pricingTiers = [
  {
    name: 'Starter',
    price: 4999,
    description: 'Perfect for small businesses.',
    features: [
       '5 pages website',

'2 year free domain ( .in )',

'2 year free hosting (unlimited space)',

'landing website (Basic design)',

'lifetime 24/7 free hosting support',

'unlimited images and videos upload',

'1 free mail id',

'seo friendly website',
  '100% responsive website',

  'social media integration',

  'call button integration',

  'whatsapp button integration',
  'inquiry form',
  '2year free technical support for website',
    ],
    cta: 'Choose this plan',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 12999,
    description: 'Perfect for growing businesses.',
    features: [
      '5 to 10 pages website',

'2 year free domain (.com  .in .org)',
'5 products ecommerce setup',

'2 year free hosting (unlimited space)',

'dynamic website (premium design)',

'lifetime 24/7 free hosting support',

'unlimited images and videos upload',

'1 free mail id with 5 subdomains',

'seo friendly website',
  '100% responsive website',

  'social media integration',

  'call button integration',

  'whatsapp button integration',
  'inquiry form',
  '2year free technical support for website',
  
      'Enhanced data analytics & insights',
      'Priority customer support',
      
    ],
    cta: 'Choose this plan',
    highlighted: true,
    badge: 'Popular',
  },
  {
    name: 'Enterprise',
    price: null,
    priceText: 'Custom',
    description: 'perfect for enterprises and custom solutions.',
    features: [
       '10+ pages website',

'2 year free domain (.com  .in .org)',

'2 year free hosting (unlimited space)',

'ecommerce website (advanced design), 3d websites, custom websites', 

'lifetime 24/7 free hosting support',

'unlimited images and videos upload',

'1 free mail id',

'seo friendly website',
  '100% responsive website',

  'social media integration',

  'call button integration',

  'whatsapp button integration',
  'inquiry form',
  '2year free technical support for website',
  'unlimited images and videos upload',
      'AI-driven sales & marketing tools',
      'Enhanced data analytics & insights',
      'Priority customer support',
    ],
    cta: 'Schedule a call',
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={tier.highlighted ? 'md:scale-105' : ''}
            >
              <GlassCard
                className={`h-full flex flex-col p-8 relative ${
                  tier.highlighted ? 'border-purple-400/50' : ''
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 right-6">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {tier.badge}
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  {tier.price ? (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">₹  {tier.price}</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                      {tier.priceText}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm mb-8 flex-grow">
                  {tier.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                </motion.button>

                {/* Features */}
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-white/80 mb-4">
                    What's Included:
                  </div>
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
