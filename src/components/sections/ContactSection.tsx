'use client';

import React, { useState, useEffect } from 'react';
import { FaDiscord, FaSteam, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { motion, MotionConfig } from 'motion/react';

interface DiscordStats {
  memberCount: number;
  onlineCount: number;
  loading: boolean;
  error?: boolean;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [discordStats, setDiscordStats] = useState<DiscordStats>({
    memberCount: 0,
    onlineCount: 0,
    loading: true
  });

  // Fetch Discord server stats
  useEffect(() => {
    const fetchDiscordStats = async () => {
      try {
        // Discord server ID for wiredin 
        const serverId = '928141195903897602';
        
        const response = await fetch(`/api/discord-stats?serverId=${serverId}`);
        
        if (response.ok) {
          const data = await response.json();
          setDiscordStats({
            memberCount: data.memberCount,
            onlineCount: data.onlineCount,
            loading: false
          });
        } else {
          throw new Error('Failed to fetch Discord stats');
        }
      } catch (error) {
        console.error('Error fetching Discord stats:', error);
        setDiscordStats({
          memberCount: 500,
          onlineCount: 24,
          loading: false,
          error: true
        });
      }
    };

    fetchDiscordStats();
    // Refresh stats every 5 minutes I might change
    const interval = setInterval(fetchDiscordStats, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: FaDiscord,
      title: 'Discord',
      description: 'Join our community',
      link: 'https://discord.gg/y6kb6a9CcG',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FaYoutube,
      title: 'YouTube',
      description: 'Watch our content',
      link: 'https://www.youtube.com/@wiredin',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaSteam,
      title: 'Steam Group',
      description: 'lovetaps',
      link: 'https://steamcommunity.com/groups/lovetaps',
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      description: 'wiredin@etebong.com',
      link: 'mailto:wiredin@etebong.com',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <MotionConfig transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}>
      <section id="contact" className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 relative z-10">
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-text-primary">Get In</span>
              <span className="gradient-text"> Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
              Ready to join the get (in) community? We&apos;d love to hear from you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
            {/* Contact Form */}
            <motion.div className="h-full"
              initial={{ opacity: 0, x: -2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative rounded-3xl py-8 sm:py-10 px-6 sm:px-8 min-h-[450px] h-full overflow-hidden">
                {/* Enhanced glassmorphic background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-8 sm:mb-13">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col" aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-secondary mb-2 font-medium text-sm sm:text-base">
                          Name 
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-label="Your name"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary transition-colors duration-200 text-sm sm:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-text-secondary mb-2 font-medium text-sm sm:text-base">
                          Email 
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-label="Your email"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary transition-colors duration-200 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-text-secondary mb-2 font-medium text-sm sm:text-base">
                        Subject 
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-label="Subject"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary transition-colors duration-200 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-text-secondary mb-2 font-medium text-sm sm:text-base">
                        Message 
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-label="Message"
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary transition-colors duration-200 text-sm sm:text-base resize-none flex-grow min-h-[120px] mb-2"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary text-base sm:text-lg py-3 sm:py-4 mt-4 flex items-center justify-center min-h-[48px] ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting && <span className="loader mr-2"></span>}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div className="h-full"
              initial={{ opacity: 0, x: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Connect with us</h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-6 sm:mb-8 leading-relaxed">
                    Join our vibrant community and stay connected with the latest updates, 
                    server announcements, and exclusive content.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    
                    // Special handling for Discord card with stats
                    if (method.title === 'Discord') {
                      return (
                        <a
                          key={index}
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg py-4 sm:py-6 px-4 sm:px-8 flex items-center gap-x-4 sm:gap-x-6 h-full transition-all duration-300 hover:bg-brand-primary/10 min-h-[80px]"
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-surface-secondary flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <IconComponent className="text-text-primary text-2xl sm:text-4xl" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-base sm:text-lg font-bold text-text-primary">
                                {method.title}
                              </h4>
                            </div>
                            <p className="text-sm sm:text-base text-text-secondary mb-2">
                              {method.description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:space-x-4 text-xs sm:text-sm space-y-1 sm:space-y-0">
                              <div className="flex items-center space-x-1">
                                <span className="text-text-secondary">Members:</span>
                                <span className="font-semibold gradient-text">
                                  {discordStats.loading ? (
                                    <span className="animate-pulse">...</span>
                                  ) : discordStats.error ? (
                                    "500+"
                                  ) : (
                                    discordStats.memberCount.toLocaleString()
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <span className="text-text-secondary">Online:</span>
                                <span className="font-semibold gradient-text">
                                  {discordStats.loading ? (
                                    <span className="animate-pulse">...</span>
                                  ) : discordStats.error ? (
                                    "24/7"
                                  ) : (
                                    discordStats.onlineCount
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center flex-shrink-0">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text-tertiary group-hover:text-brand-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      );
                    }
                    
                    // Regular cards for other methods
                    return (
                      <a
                        key={index}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg py-4 sm:py-6 px-4 sm:px-8 flex items-center gap-x-4 sm:gap-x-6 h-full transition-all duration-300 hover:bg-brand-primary/10 min-h-[80px]"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-surface-secondary flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <IconComponent className="text-text-primary text-2xl sm:text-4xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-bold text-text-primary mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm sm:text-base text-text-secondary">
                            {method.description}
                          </p>
                        </div>
                        <div className="flex items-center flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text-tertiary group-hover:text-brand-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default ContactSection; 