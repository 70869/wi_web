'use client';

import React from 'react';
import { motion, MotionConfig } from 'motion/react';

const AboutSection = () => {
  const features = [
    {
      icon: '🎮',
      title: 'Game Servers',
      description: 'High-performance servers for Minecraft and Counter-Strike 2 with 24/7 uptime and dedicated support.'
    },
    {
      icon: '🔒',
      title: 'Secure File Hosting',
      description: 'We are (in development) with an Exclusive, invite-only file hosting service with end-to-end encryption for your important files.'
    },
    {
      icon: '🗣️',
      title: 'Vibrant Community',
      description: 'Join 90+ passionate gamers from all over the world. We play everything.'
    },
    {
      icon: '⚡',
      title: 'Premium Performance',
      description: 'Tiered subscription model with different perks and advantages to meet your unique needs.'
    }
  ];

  return (
    <MotionConfig transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}>
      <motion.section id="about" className="section-padding relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fade-in Overlay - Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background via-background/80 to-transparent z-5"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 relative z-10">
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="text-text-primary">The</span>
              <span className="gradient-text"> Motive</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
              (wired-in) is more than just game servers; it&apos;s a community built on passion,
              innovation, and the love of gaming technology.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8">
                  Bridging Gaming & Security
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  Our mission is to provide high-performance game servers for titles like Minecraft and Counter-Strike 2,
                  while also offering an exclusive, invite-only file hosting service with end-to-end encryption.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  We strive to bridge the gap between gaming and security, enhancing your digital experience.
                  Our tiered subscription model offers flexibility, providing different perks and advantages
                  to meet your unique needs.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                  (wired-in), where we&apos;re more than just servers - we&apos;re a growing community of passionate
                  individuals who believe in the power of technology to bring people together.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Video */}
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1], delay: 0.005 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-surface-secondary rounded-3xl p-0 border border-border-primary overflow-hidden shadow-xl">
                  <div className="aspect-video rounded-2xl overflow-hidden flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/i3GCChviyrA?enablejsapi=1&origin=http://localhost:3000"
                      title="(wired-in) Intro"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
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
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-surface-secondary rounded-2xl p-4 sm:p-6 md:p-8 border border-border-primary/50 hover:border-brand-primary/30 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 ease-out group-hover:text-brand-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed transition-colors duration-300 ease-out group-hover:text-text-primary/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6 transition-transform duration-300 ease-out group-hover:scale-110">2+</div>
                <div className="text-base sm:text-lg md:text-xl text-text-secondary transition-colors duration-300 ease-out group-hover:text-text-primary">Years of Grinding</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6 transition-transform duration-300 ease-out group-hover:scale-110">NA</div>
                <div className="text-base sm:text-lg md:text-xl text-text-secondary transition-colors duration-300 ease-out group-hover:text-text-primary">Game Servers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 sm:mb-4 md:mb-6 transition-transform duration-300 ease-out group-hover:scale-110">100%</div>
                <div className="text-base sm:text-lg md:text-xl text-text-secondary transition-colors duration-300 ease-out group-hover:text-primary">Community Driven</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
};

export default AboutSection;