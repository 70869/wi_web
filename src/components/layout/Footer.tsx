'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaDiscord, FaSteam, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Game Servers', href: '#servers' },
      { name: 'File Hosting', href: '/hosting', comingSoon: true },
      { name: 'Community', href: '/community' },
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'DMCA', href: '/dmca' }
    ]
  };

  const socialLinks = [
    {
      name: 'Discord',
      href: 'https://discord.gg/y6kb6a9CcG',
      icon: FaDiscord
    },
    {
      name: 'Steam',
      href: 'https://steamcommunity.com/groups/lovetaps',
      icon: FaSteam
    },
    {
      name: 'GitHub',
      href: 'https://github.com/wired-in',
      icon: FaGithub
    }
  ];

  return (
    <footer className="relative bg-surface-primary border-t border-border-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image 
                  src="/assets/images/logo.png" 
                  alt="(wired-in) Logo" 
                  fill 
                  className="object-contain rounded-xl" 
                />
              </div>
              <span className="text-2xl font-bold flex items-center">
                <span className="text-white">(</span>
                <span className="text-white">wired</span>
                <span style={{ color: '#00ff88' }}>-</span>
                <span className="text-white">in</span>
                <span className="text-white">)</span>
              </span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              From the creators of lovetaps. 
              Experience high-performance game servers and secure file hosting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-surface-secondary rounded-xl hover:bg-brand-primary hover:text-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {link.name === 'Game Servers' ? (
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('servers');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.name}
                      {link.comingSoon && (
                        <span className="ml-2 text-xs text-yellow-400 font-semibold">(Coming Soon)</span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-3xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Hold up, no newsletter?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Honestly, too much of a grind... I promise I&apos;m working on it. (In the meantime, just imagine all the cool updates you&apos;d be getting here.)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-primary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} (wired-in). All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-text-secondary">Made with ❤️ by the (wired-in) team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 