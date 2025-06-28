'use client';

import React, { useState } from 'react';
import { FaDiscord, FaSteam, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      link: 'https://discord.gg/wiredin',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FaSteam,
      title: 'Steam Group',
      description: 'lovetaps',
      link: 'https://steamcommunity.com/groups/lovetaps',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      description: 'contact@wiredin.com',
      link: 'mailto:contact@wiredin.com',
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
            Ready to join the get (in) community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 bg-surface-secondary border border-border-primary rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:border-brand-primary transition-colors duration-200 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary text-lg py-4 ${isSubmitting ? 'loading' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-slide-in-right">
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
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-interactive hover-lift group block"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="text-white" />
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

              {/* Quick Stats */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-lg font-bold text-text-primary mb-4">Community Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-text-secondary text-sm">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-text-secondary text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 