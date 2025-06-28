'use client';

import React from 'react';
import Image from 'next/image';

const ServersSection = () => {
  return (
    <section id="servers" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">Our</span>
            <span className="gradient-text"> Servers</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Experience gaming at its finest with our high-performance servers, 
            designed for the ultimate gaming experience.
          </p>
        </div>

        {/* Servers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Minecraft Card */}
          <div className="card group animate-fade-in">
            {/* Banner */}
            <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6">
              <Image src="/assets/images/minecraft_banner.png" alt="Minecraft Banner" fill className="object-cover" />
            </div>
            {/* Server Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-tertiary flex items-center justify-center">
                <Image src="/assets/images/minecraft_icon.png" alt="Minecraft Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Minecraft</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                  <span className="text-brand-primary font-medium">Online</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <p className="text-text-secondary mb-4 leading-relaxed">
              High-performance Minecraft server with custom plugins and a vibrant community.
            </p>
            {/* Features */}
            <div className="mb-4">
              <div className="text-text-secondary text-sm mb-2">Features</div>
              <div className="flex flex-wrap gap-2">
                {['Custom Plugins', 'Economy System', 'Land Protection', '24/7 Uptime'].map((feature, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-tertiary rounded-full text-xs text-text-secondary border border-border-primary">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            {/* Action Button */}
            <div className="flex gap-3">
              <button className="btn-primary flex-1">
                Join Server
              </button>
              <button className="btn-secondary">
                Info
              </button>
            </div>
          </div>

          {/* Counter-Strike 2 Card */}
          <div className="card group animate-fade-in opacity-60 pointer-events-none relative">
            {/* Banner */}
            <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6">
              <Image src="/assets/images/nuke.png" alt="CS2 Placeholder" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-400">Coming Soon</span>
              </div>
            </div>
            {/* Server Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-tertiary flex items-center justify-center">
                <Image src="/assets/images/cs2.png" alt="CS2 Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Counter-Strike 2</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-yellow-400 font-medium">In Development</span>
                </div>
              </div>
            </div>
            {/* Description */}
            <p className="text-text-secondary mb-4 leading-relaxed">
              5v5 Community Competitive server is currently in development. Stay tuned!
            </p>
            {/* Features */}
            <div className="mb-4">
              <div className="text-text-secondary text-sm mb-2">Planned Features</div>
              <div className="flex flex-wrap gap-2">
                {['Custom Maps', 'Tournament Mode', 'Anti-Cheat', 'Low Latency'].map((feature, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-tertiary rounded-full text-xs text-text-secondary border border-border-primary">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            {/* Disabled Button */}
            <div className="flex gap-3">
              <button className="btn-secondary flex-1 cursor-not-allowed opacity-60" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Server Stats */}
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-text-secondary">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">&lt;20ms</div>
              <div className="text-text-secondary">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-text-secondary">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">DDoS</div>
              <div className="text-text-secondary">Protected</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Join the Action?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Connect with our community and experience gaming like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Join Our Discord
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Server Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServersSection; 