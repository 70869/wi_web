'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ServerStatus {
  online: boolean;
  players?: { online: number; max: number };
  motd?: { clean: string[] };
  loading: boolean;
  error?: boolean;
}

const MC_SERVER_API = 'https://api.mcsrvstat.us/2/mc.etebong.com';

const ServersSection = () => {
  // Minecraft server status state
  const [mcStatus, setMcStatus] = useState<ServerStatus>({ online: false, loading: true });
  const [showMinecraftGuide, setShowMinecraftGuide] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchStatus = async () => {
      try {
        setMcStatus((prev) => ({ ...prev, loading: true }));
        const res = await fetch(MC_SERVER_API);
        const data = await res.json();
        if (isMounted) {
          setMcStatus({
            online: data.online,
            players: data.players,
            motd: data.motd,
            loading: false,
          });
        }
      } catch {
        if (isMounted) setMcStatus({ online: false, loading: false, error: true });
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // refresh every 60s
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Minecraft Server Guide Modal
  const MinecraftGuideModal = () => {
    if (!showMinecraftGuide) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMinecraftGuide(false)}
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Enhanced glassmorphic background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
            <div className="relative z-10 p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-surface-tertiary flex items-center justify-center">
                    <Image src="/assets/images/mcicon.svg" alt="Minecraft Icon" width={32} height={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">Minecraft Server Guide</h2>
                    <p className="text-text-secondary">All The Mods 10</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMinecraftGuide(false)}
                  className="p-2 hover:bg-surface-secondary rounded-xl transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Server Info */}
              <div className="mb-6 p-4 md:p-6 bg-surface-secondary/50 rounded-2xl border border-border-primary/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Server Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">IP Address:</span>
                        <span className="text-brand-primary font-mono font-bold">mc.etebong.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Version:</span>
                        <span className="text-text-primary">All The Mods 10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Status:</span>
                        <span className={`font-medium ${mcStatus.online ? 'text-brand-primary' : 'text-red-500'}`}>
                          {mcStatus.online ? 'Online' : 'Offline'}
                        </span>
                      </div>
                      {mcStatus.players && (
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Players:</span>
                          <span className="text-text-primary">{mcStatus.players.online}/{mcStatus.players.max}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Features</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">Custom Plugins</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">Economy System</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">Keep Inventory</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">TST ENV</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Quick Tips</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">8GB+ RAM recommended</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">Use OptiFine for FPS</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                        <span className="text-text-secondary">Join Discord for help</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Join - Compact Layout */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">How to Join</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Install All The Mods 10</h4>
                        <p className="text-text-secondary text-xs">
                          Download from CurseForge or your preferred mod launcher.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Launch Modpack</h4>
                        <p className="text-text-secondary text-xs">
                          Start ATM10 with 8GB+ RAM allocated.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Add Server</h4>
                        <p className="text-text-secondary text-xs">
                          Multiplayer → Add Server → <span className="font-mono text-brand-primary">mc.etebong.com</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Join & Play</h4>
                        <p className="text-text-secondary text-xs">
                          Click "Join Server" and start exploring!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('mc.etebong.com');
                    // You could add a toast notification here
                  }}
                  className="btn-primary flex-1"
                >
                  Copy IP Address
                </button>
                <button
                  onClick={() => window.open('https://discord.gg/y6kb6a9CcG', '_blank')}
                  className="btn-secondary flex-1"
                >
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                <Image src="/assets/images/mcicon.svg" alt="Minecraft Icon" width={48} height={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Minecraft</h3>
                <div className="flex items-center space-x-2">
                  {/* Live Status */}
                  {mcStatus.loading ? (
                    <>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                      <span className="text-gray-400 font-medium animate-pulse">Checking...</span>
                    </>
                  ) : mcStatus.online ? (
                    <>
                      <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-brand-primary font-medium">Online</span>
                      {mcStatus.players && (
                        <span className="ml-2 text-xs text-text-secondary">{mcStatus.players.online} / {mcStatus.players.max} players</span>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-red-500 font-medium">Offline</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* Description */}
            <p className="text-text-secondary mb-4 leading-relaxed">
              All The Mods 10 server with custom plugins and a vibrant community.
            </p>
            {/* Features */}
            <div className="mb-4">
              <div className="text-text-secondary text-sm mb-2">Features</div>
              <div className="flex flex-wrap gap-2">
                {['Custom Plugins', 'Economy System', 'Keep Inventory', 'TST ENV'].map((feature, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-tertiary rounded-full text-xs text-text-secondary border border-border-primary">
                    {feature}
                  </span> 
                ))}
              </div>
            </div>
            {/* Action Button */}
            <div className="flex gap-3">
              <button className="btn-primary flex-1" onClick={() => setShowMinecraftGuide(true)}>
                Join Server
              </button>
            </div>
          </div>

          {/* Counter-Strike 2 Card */}
          <div className="card group animate-fade-in opacity-60 pointer-events-none relative">
            {/* Banner */}
            <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6">
              {/* Background image for Coming Soon */}
              <Image src="/assets/images/bgoffice2.png" alt="CS2 Background" fill className="object-cover blur-sm brightness-75" />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-lg">Coming Soon</span>
              </div>
            </div>
            {/* Server Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-tertiary flex items-center justify-center">
                <Image src="/assets/images/cs2.png" alt="CS2 Icon" width={48} height={48} style={{ position: 'relative', top: '1px', left: '-1px' }} />
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
              <button className="btn-secondary" onClick={() => alert('Counter-Strike 2: 5v5 Community Competitive server, custom maps, anti-cheat, low latency. Coming soon!')}>
                Info
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
          <div className="relative rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Enhanced glassmorphic background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
            <div className="relative z-10">
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
      </div>

      {/* Minecraft Guide Modal */}
      <MinecraftGuideModal />
    </section>
  );
};

export default ServersSection; 