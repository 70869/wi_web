'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';
import { useDiscordStats } from '@/hooks/useDiscordStats';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const discordStats = useDiscordStats('928141195903897602');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <section id="home" className="relative min-h-screen overflow-hidden pt-20 sm:pt-24">
        {/* Hero Background - Static for maximum performance */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/images/bgofficecs2.webp"
            alt="Hero Background"
            fill
            priority
            className="w-full h-full object-cover object-center brightness-75 blur-sm select-none pointer-events-none"
            draggable={false}
            style={{ willChange: 'auto' }}
          />
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-primary) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48">
          <div className="text-center max-w-4xl mx-auto">
            {/* Brand Title */}
            <motion.div className="mb-8 md:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
                <span style={{ color: '#00ff88' }}>(</span>
                <span className="text-white">soon</span>
                <span style={{ color: '#00ff88' }}>)</span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
                everything is going to change
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div className="mb-8 md:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
                From the creators of lovetaps, we created a passionate community of gamers and tech enthusiasts.
                Experience high-performance servers, secure file hosting, it's for the hype.
              </p>
            </motion.div>

            {/* Call-to-Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 sm:px-6 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <button
                className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 w-full sm:w-auto min-h-[48px] md:min-h-[56px] flex items-center justify-center"
                onClick={() => window.open('https://discord.gg/y6kb6a9CcG', '_blank')}
              >
                Join Our Community
              </button>
              <button
                className="btn-secondary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 w-full sm:w-auto min-h-[48px] md:min-h-[56px] flex items-center justify-center"
                onClick={() => {
                  const el = document.getElementById('servers');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Servers
              </button>
            </motion.div>

            {/* Key Metrics */}
            <motion.div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4 sm:px-6 md:px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.div className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 md:mb-3">
                  {discordStats.loading ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    discordStats.onlineCount
                  )}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-text-secondary">Users Online</div>
              </motion.div>
              <motion.div className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 md:mb-3">24/7</div>
                <div className="text-sm sm:text-base md:text-lg text-text-secondary">Server Uptime</div>
              </motion.div>
              <motion.div className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 md:mb-3">99.9%</div>
                <div className="text-sm sm:text-base md:text-lg text-text-secondary">Reliability</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20"></div>
      </section>
    </MotionConfig>
  );
};

export default HeroSection;