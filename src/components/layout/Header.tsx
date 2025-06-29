'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check scroll position on mount
    handleScroll();

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
    { name: 'Turbo', href: '#turbo' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the main page, navigate to main page with anchor
    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }
    
    // If we're on the main page, scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'glass border-b border-white/10 opacity-100 translate-y-0'
            : 'bg-transparent border-b border-transparent opacity-100 translate-y-0'
          }
        `}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/images/logo.png"
                  alt="(wired-in) Logo (favicon)"
                  fill
                  className="object-contain rounded-xl"
                  priority
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
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-brand-primary transition-colors duration-100 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://discord.gg/y6kb6a9CcG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 transition-colors duration-100"
              >
                Join Community
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-60 relative flex items-center justify-center w-12 h-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {/* Hamburger Icon */}
              {!isMobileMenuOpen && (
                <div className="w-8 h-8 flex flex-col justify-center items-center relative">
                  <span className="block absolute left-1 top-2 w-7 h-0.5 bg-text-primary rounded transition-all duration-300" />
                  <span className="block absolute left-1 top-4 w-7 h-0.5 bg-text-primary rounded transition-all duration-300" />
                  <span className="block absolute left-1 top-6 w-7 h-0.5 bg-text-primary rounded transition-all duration-300" />
                </div>
              )}
              {/* SVG X Icon */}
              {isMobileMenuOpen && (
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary ml-1.5">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 bg-black/80 backdrop-blur-lg
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Menu Content */}
        <div 
          className={`mobile-menu-container relative z-50 h-full flex flex-col items-center justify-center p-6 ${isMobileMenuOpen ? 'animate-slide-down-menu' : ''} transition-all duration-300`}
        >
          <nav className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-3xl text-text-secondary hover:text-brand-primary transition-colors duration-100 font-bold transform ${
                    isMobileMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 0.07 + 0.15}s` : '0s' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;