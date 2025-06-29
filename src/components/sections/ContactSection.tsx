'use client';

import React, { useState, useEffect } from 'react';
import { FaDiscord, FaSteam, FaEnvelope, FaYoutube } from 'react-icons/fa';

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
    // Refresh stats every 5 minutes
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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">Get In</span>
            <span className="gradient-text"> Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to join the get (in) community? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Form */}
          <div className="animate-slide-in-left h-full">
            <div className="relative rounded-3xl py-10 px-8 min-h-[450px] h-full overflow-hidden">
              {/* Enhanced glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-secondary mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-secondary mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-text-secondary mb-2 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary focus:outline-none focus:border-brand-primary transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="server">Server Support</option>
                      <option value="community">Community</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-text-secondary mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary transition-colors duration-200 resize-none mb-0 flex-grow"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary text-lg py-4 mt-6 ${isSubmitting ? 'loading' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-slide-in-right h-full">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Connect with us</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Join our vibrant community and stay connected with the latest updates, 
                  server announcements, and exclusive content.
                </p>
              </div>

              <div className="space-y-6">
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
                        className="card hover-lift group block rounded-3xl py-4 px-6 h-full"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="text-white text-5xl" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-lg font-bold text-text-primary">
                                {method.title}
                              </h4>
                            </div>
                            <p className="text-text-secondary mb-2">
                              {method.description}
                            </p>
                            <div className="flex space-x-4 text-sm">
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
                          <div className="text-text-tertiary group-hover:text-brand-primary transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
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
                      className="card hover-lift group block rounded-3xl py-4 px-6 h-full"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="text-white text-5xl" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-text-primary mb-1">
                            {method.title}
                          </h4>
                          <p className="text-text-secondary">
                            {method.description}
                          </p>
                        </div>
                        <div className="text-text-tertiary group-hover:text-brand-primary transition-colors duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 