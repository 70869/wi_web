'use client';

import React, { useState } from 'react';
import { FaCrown, FaRocket, FaInfinity, FaCheckCircle } from 'react-icons/fa';
import { motion, MotionConfig } from 'motion/react';

interface TurboTier {
  name: string;
  tagline: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

const tiers: TurboTier[] = [
  {
    name: '(turbo) X',
    tagline: 'Middle Ground',
    price: '$7.45',
    icon: <FaCrown className="text-brand-primary w-8 h-8" />,
    features: [
      '250,000 In-Game Currency',
      'More Items/Cosmetics',
      'Early Access to Projects',
      'Extra Creative Plot',
      'Vault: 500GB',
      'Custom Discord Role',
    ],
  },
  {
    name: '(turbo)',
    tagline: 'a bit of everything',
    price: '$5',
    icon: <FaRocket className="text-brand-primary w-8 h-8" />,
    features: [
      '100,000 In-Game Money',
      'Priority Slots Access',
      'Exclusive Items/Cosmetics',
      'Special (turbo) Tag',
      'Vault: 250GB',
      'Discord VIP Role',
    ],
  },
  {
    name: '(turbo) MAX',
    tagline: 'BE LIMITLESS',
    price: '$15',
    icon: <FaInfinity className="text-brand-primary w-8 h-8" />,
    features: [
      '500,000 In-Game Currency',
      '5 Extra Creative Plots',
      'Private World Access',
      'All Cosmetics',
      'Vault: 1TB',
      'Priority Support',
      'Personal Voice Channel',
    ],
  },
];

const TurboSection = () => {
  const [selected, setSelected] = useState(1); // Default to center tier

  return (
    <MotionConfig transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}>
      <section id="turbo" className="section-padding relative bg-transparent">
        <div className="container mx-auto px-2 md:px-6 relative z-10">
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-base mb-4">Coming Soon</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">(wired-in) Turbo</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Unlock exclusive perks and support the community with our upcoming subscription model.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.01,
                  delayChildren: 0.005
                }
              }
            }}
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                className={`transition-all duration-300 w-full max-w-md mx-auto flex flex-col items-center bg-surface-secondary/80 border border-border-primary rounded-2xl shadow-lg px-6 md:px-8 py-8 md:py-10
                  ${selected === i ? 'ring-2 ring-brand-primary bg-surface-secondary/95' : 'hover:ring-2 hover:ring-brand-primary/40'}
                  cursor-pointer`}
                style={{ minHeight: 380 }}
                onClick={() => setSelected(i)}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mb-4">{tier.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1 text-center">{tier.name}</div>
                <div className="text-lg text-brand-primary font-semibold mb-2 text-center">{tier.tagline}</div>
                <div className="text-3xl font-bold mb-4 text-center">{tier.price} <span className="text-text-secondary text-base font-normal">/mo</span></div>
                <ul className="text-left w-full space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-text-primary/90">
                      <FaCheckCircle className="text-brand-primary w-4 h-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block bg-brand-primary/10 text-brand-primary font-bold px-6 py-3 rounded-2xl text-lg shadow backdrop-blur border border-brand-primary/20">
              (wired-in) Turbo is on the currently on the roadmap. Stay tuned for updates!
            </span>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default TurboSection;
