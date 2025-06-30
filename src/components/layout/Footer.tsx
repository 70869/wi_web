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

      <div className="container mx-auto px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 justify-center lg:justify-start">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image 
                  src="/assets/images/logo.webp" 
                  alt="(wired-in) Logo" 
                  fill 
                  className="object-contain rounded-xl" 
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold flex items-center">
                <span className="text-white">(</span>
                <span className="text-white">wired</span>
                <span style={{ color: '#00ff88' }}>-</span>
                <span className="text-white">in</span>
                <span className="text-white">)</span>
              </span>
            </div>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 max-w-md leading-relaxed">
              From the creators of lovetaps. 
              Experience high-performance game servers and secure file hosting.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-surface-secondary rounded-xl hover:bg-brand-primary hover:text-black transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider for mobile */}
          <div className="block sm:hidden border-t border-border-primary opacity-40 my-2"></div>

          {/* Company Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.name === 'Our Team' ? (
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('team');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ) : link.name === 'About Us' ? (
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
                      onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('about');
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
                      className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider for mobile */}
          <div className="block sm:hidden border-t border-border-primary opacity-40 my-2"></div>

          {/* Services Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {link.name === 'Game Servers' ? (
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
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
                      className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
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

          {/* Divider for mobile */}
          <div className="block sm:hidden border-t border-border-primary opacity-40 my-2"></div>

          {/* Legal Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 sm:mb-6">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-text-secondary hover:text-brand-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider above copyright for mobile */}
        <div className="block sm:hidden border-t border-border-primary opacity-40 my-4"></div>

        {/* Copyright */}
        <div className="text-xs text-text-secondary text-center mt-6 sm:mt-0 pb-2">
          &copy; {currentYear} (wired-in). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 