'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '../layout/Header';

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

  return (
    <section id="home" className="relative min-h-screen overflow-hidden" ref={heroRef}>
      <Header />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-primary to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--brand-primary) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="animate-fade-in mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6">
              <span className="text-text-primary">(wired</span>
              <span className="gradient-text">-in)</span>
            </h1>
            <div className="text-xl md:text-2xl text-text-secondary font-medium">
              Where Gaming Meets Innovation
            </div>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-in-left mb-12">
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              From the creators of lovetaps, we are a passionate community of gamers and tech enthusiasts. 
              Experience high-performance game servers, secure file hosting, and a vibrant community.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Join Our Community
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Explore Servers
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-text-secondary text-sm font-medium tracking-wider group-hover:text-brand-primary transition-colors duration-300 animate-breathing">
            SCROLL DOWN
          </span>
          <div className="w-8 h-8 flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-text-secondary group-hover:text-brand-primary transition-colors duration-300 animate-breathing" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 