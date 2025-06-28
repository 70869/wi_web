'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    if (!isClient) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && !(e.target as Element).closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen, isClient]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Servers', href: '#servers' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/assets/images/logo.png" 
                  alt="(wired-in) Logo" 
                  fill 
                  className="object-contain rounded-xl" 
                />
              </div>
              <span className="text-xl font-bold flex items-center">
                <span className="text-white">(</span>
                <span className="text-white">wired</span>
                <span style={{ color: '#00ff88' }}>-</span>
                <span className="text-white">in</span>
                <span className="text-white">)</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-brand-primary transition-colors duration-200 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-primary">
                Join Community
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 z-60 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Menu Content */}
        <div 
          className={`mobile-menu-container relative z-50 h-full flex flex-col items-center justify-center transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'transform translate-y-0 opacity-100' 
              : 'transform -translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-3xl text-text-secondary hover:text-brand-primary transition-all duration-300 font-bold transform ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' 
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <button 
              className={`btn-primary px-8 py-4 text-lg mt-4 transition-all duration-300 transform ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 100}ms` : '0ms' 
              }}
            >
              Join Community
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;