'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';

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
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-surface-tertiary flex items-center justify-center">
                    <Image src="/assets/images/mcicon.svg" alt="Minecraft Icon" width={24} height={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Minecraft Server Guide</h2>
                    <p className="text-sm sm:text-base text-text-secondary">All The Mods 10</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMinecraftGuide(false)}
                  className="p-2 hover:bg-surface-secondary rounded-xl transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Server Info */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 md:p-6 bg-surface-secondary/50 rounded-2xl border border-border-primary/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">Server Details</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
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
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">Features</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
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
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2">Quick Tips</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
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
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3 sm:mb-4">How to Join</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Install All The Mods 10</h4>
                        <p className="text-text-secondary text-xs">
                          Download from CurseForge or your preferred mod launcher.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
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
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Add Server</h4>
                        <p className="text-text-secondary text-xs">
                          Multiplayer → Add Server → <span className="font-mono text-brand-primary">mc.etebong.com</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-primary rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">Join & Play</h4>
                        <p className="text-text-secondary text-xs">
                          Click &quot;Join Server&quot; and start exploring!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('mc.etebong.com');
                    // You could add a toast notification here
                  }}
                  className="btn-primary flex-1 text-sm sm:text-base py-2.5 sm:py-3 min-h-[44px]"
                >
                  Copy IP Address
                </button>
                <button
                  onClick={() => window.open('https://discord.gg/y6kb6a9CcG', '_blank')}
                  className="btn-secondary flex-1 text-sm sm:text-base py-2.5 sm:py-3 min-h-[44px]"
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
    <MotionConfig transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}>
      <section id="servers" className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
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
              <span className="text-text-primary">Our</span>
              <span className="gradient-text"> Servers</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
              Experience high-performance gaming with our dedicated servers. 
              From Minecraft modpacks to competitive CS2 matches.
            </p>
          </motion.div>
          {/* Servers Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
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
            {/* Minecraft Card */}
            <motion.div className="card group"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Banner */}
              <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8">
                <Image src="/assets/images/minecraft_banner.png" alt="Minecraft Banner" fill className="object-cover" />
              </div>
              {/* Server Header */}
              <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-3 sm:mb-4 md:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-surface-tertiary flex items-center justify-center flex-shrink-0">
                  <Image src="/assets/images/mcicon.svg" alt="Minecraft Icon" width={32} height={32} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">Minecraft</h3>
                  <div className="flex items-center space-x-2">
                    {/* Live Status */}
                    {mcStatus.loading ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                        <span className="text-gray-400 font-medium animate-pulse text-sm md:text-base">Checking...</span>
                      </>
                    ) : mcStatus.online ? (
                      <>
                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                        <span className="text-brand-primary font-medium text-sm md:text-base">Online</span>
                        {mcStatus.players && (
                          <span className="ml-2 text-xs md:text-sm text-text-secondary">{mcStatus.players.online} / {mcStatus.players.max} players</span>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-red-500 font-medium text-sm md:text-base">Offline</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                All The Mods 10 server with custom plugins and a vibrant community.
              </p>
              {/* Features */}
              <div className="mb-3 sm:mb-4 md:mb-6">
                <div className="text-text-secondary text-sm md:text-base mb-2 md:mb-3">Features</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {['Custom Plugins', 'Economy System', 'Keep Inventory', 'TST ENV'].map((feature, i) => (
                    <span key={i} className="px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-surface-tertiary rounded-full text-xs md:text-sm text-text-secondary border border-border-primary">
                      {feature}
                    </span> 
                  ))}
                </div>
              </div>
              {/* Action Button */}
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <button className="btn-primary flex-1 text-sm sm:text-base md:text-lg py-2.5 sm:py-3 md:py-4 min-h-[44px] md:min-h-[52px]" onClick={() => setShowMinecraftGuide(true)}>
                  Join Server
                </button>
              </div>
            </motion.div>
            {/* Counter-Strike 2 Card */}
            <motion.div className="card group opacity-60 pointer-events-none relative overflow-hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Dark overlay over everything */}
              <div className="absolute inset-0 bg-black/70 z-10"></div>
              
              {/* Banner */}
              <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8 z-20">
                {/* Background image for Coming Soon */}
                <Image src="/assets/images/bgoffice2.png" alt="CS2 Background" fill className="object-cover brightness-100" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 drop-shadow-lg">Coming Soon</span>
                </div>
              </div>
              {/* Server Header */}
              <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 mb-3 sm:mb-4 md:mb-6 relative z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Image src="/assets/images/cs2.png" alt="CS2 Icon" width={32} height={32} className="sm:w-12 sm:h-12 md:w-16 md:h-16" style={{ position: 'relative', top: '2px', left: '-1px' }} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">Counter-Strike 2</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-yellow-400 font-medium text-sm md:text-base">In Development</span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-3 sm:mb-4 md:mb-6 leading-relaxed relative z-20">
                5v5 Community Competitive server is currently in development. Stay tuned!
              </p>
              {/* Features */}
              <div className="mb-3 sm:mb-4 md:mb-6 relative z-20">
                <div className="text-text-secondary text-sm md:text-base mb-2 md:mb-3">Planned Features</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {['Custom Maps', 'Tournament Mode', 'Anti-Cheat', 'Low Latency'].map((feature, i) => (
                    <span key={i} className="px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-surface-tertiary rounded-full text-xs md:text-sm text-text-secondary border border-border-primary">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              {/* Disabled Button */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 relative z-20">
                <button className="btn-secondary flex-1 cursor-not-allowed opacity-60 text-sm sm:text-base md:text-lg py-2.5 sm:py-3 md:py-4 min-h-[44px] md:min-h-[52px]" disabled>
                  Trust the process
                </button>
                <button className="btn-secondary text-sm sm:text-base md:text-lg py-2.5 sm:py-3 md:py-4 min-h-[44px] md:min-h-[52px]" onClick={() => alert('Counter-Strike 2: 5v5 Community Competitive server, custom maps, anti-cheat, low latency. Coming soon!')}>
                  Info
                </button>
              </div>
            </motion.div>
          </motion.div>
          {/* Server Stats */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 md:mb-3">99.9%</div>
                <div className="text-text-secondary md:text-lg">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 md:mb-3">&lt;20ms</div>
                <div className="text-text-secondary md:text-lg">Average Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 md:mb-3">24/7</div>
                <div className="text-text-secondary md:text-lg">Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 md:mb-3">DDoS</div>
                <div className="text-text-secondary md:text-lg">Protected</div>
              </div>
            </div>
          </motion.div>
          {/* CTA Section */}
          <motion.div className="text-center mt-16 md:mt-20 lg:mt-24"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto overflow-hidden">
              {/* Enhanced glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6">
                  Ready to Join the Action?
                </h3>
                <p className="text-text-secondary mb-8 md:mb-10 text-lg md:text-xl">
                  Connect with our community and experience gaming like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <button className="btn-primary text-lg md:text-xl px-8 md:px-10 py-4 md:py-5" onClick={() => window.open('https://discord.gg/y6kb6a9CcG', '_blank')}>
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Minecraft Guide Modal */}
      <MinecraftGuideModal />
    </MotionConfig>
  );
};

export default ServersSection; 