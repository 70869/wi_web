'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '../layout/Header';
import Image from 'next/image';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;

        heroRef.current.style.setProperty('--mouse-x', x.toString());
        heroRef.current.style.setProperty('--mouse-y', y.toString());
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  // Parallax scroll for scroll down indicator
  // (Removed unused scroll effect)

  // Note: parallaxY and parallaxOpacity calculations removed as they were unused

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" ref={heroRef}>
      <Header />
      
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/images/bgofficecs2.png"
          alt="Hero Background"
          fill
          priority
          className="w-full h-full object-cover object-center brightness-75 blur-sm select-none pointer-events-none"
          draggable={false}
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
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand Title */}
          <div className="animate-hero-text-reveal mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6">
              <span style={{ color: '#00ff88' }}>(</span>
              <span className="text-white">wired</span>
              <span style={{ color: '#00ff88' }}>-</span>
              <span className="text-white">in</span>
              <span style={{ color: '#00ff88' }}>)</span>
            </h1>
            <div className="text-xl md:text-2xl text-text-secondary font-medium animate-hero-text-reveal">
              Where Gaming Meets Innovation
            </div>
          </div>

          {/* Value Proposition */}
          <div className="animate-hero-text-reveal mb-12">
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              From the creators of lovetaps, we are a passionate community of gamers and tech enthusiasts. 
              Experience high-performance game servers, secure file hosting, and a vibrant community.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="animate-hero-text-reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Join Our Community
            </button>
            <button
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => {
                const el = document.getElementById('servers');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Servers
            </button>
          </div>

          {/* Key Metrics */}
          <div className="animate-hero-text-reveal mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-text-secondary">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-text-secondary">Server Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-text-secondary">Reliability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20"></div>
    </section>
  );
};

export default HeroSection; 