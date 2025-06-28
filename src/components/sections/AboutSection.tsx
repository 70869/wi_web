'use client';

import React from 'react';
import Image from 'next/image';

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
      description: 'Exclusive, invite-only file hosting service with end-to-end encryption for your important files.'
    },
    {
      icon: '👥',
      title: 'Vibrant Community',
      description: 'Join 500+ passionate gamers and tech enthusiasts from the LoveTaps Steam group.'
    },
    {
      icon: '⚡',
      title: 'Premium Performance',
      description: 'Tiered subscription model with different perks and advantages to meet your unique needs.'
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">The</span>
            <span className="gradient-text"> Motive</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            (wired-in) is more than just game servers; it's a community built on passion, 
            innovation, and the love of gaming technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                Bridging Gaming & Security
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our mission is to provide high-performance game servers for titles like Minecraft and Counter-Strike 2, 
                while also offering an exclusive, invite-only file hosting service with end-to-end encryption.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We strive to bridge the gap between gaming and security, enhancing your digital experience. 
                Our tiered subscription model offers flexibility, providing different perks and advantages 
                to meet your unique needs.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                (wired-in), where we're more than just servers - we're a growing community of passionate 
                individuals who believe in the power of technology to bring people together.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-surface-secondary rounded-3xl p-0 border border-border-primary overflow-hidden shadow-xl">
                <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/assets/images/bgmc2.png"
                    alt="Minecraft Cherry Blossom Background"
                    fill
                    className="object-cover object-center w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                  <div className="text-2xl font-bold gradient-text">(wired-in)</div>
                  <div className="text-text-secondary">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">2+</div>
              <div className="text-text-secondary text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">10+</div>
              <div className="text-text-secondary text-lg">Game Servers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-4">100%</div>
              <div className="text-text-secondary text-lg">Community Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 