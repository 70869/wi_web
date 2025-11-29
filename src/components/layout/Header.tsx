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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full
          ${isScrolled
            ? 'glass !border-x-0 !border-t-0 border-b border-white/10 opacity-100 translate-y-0'
            : 'bg-transparent border-b border-transparent opacity-100 translate-y-0'
          }
        `}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 max-w-full">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0"
              onClick={handleLogoClick}
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/assets/images/logo.webp"
                  alt="(wired-in) Logo (favicon)"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-bold flex items-center">
                <span className="text-white">(</span>
                <span className="text-white">wired</span>
                <span style={{ color: '#00ff88' }}>-</span>
                <span className="text-white">in</span>
                <span className="text-white">)</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-brand-primary transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
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
                className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Join Community
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-60 relative flex items-center justify-center w-12 h-12 min-h-[48px] min-w-[48px] flex-shrink-0"
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
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 bg-black/80 backdrop-blur-lg w-screen left-0 right-0
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Menu Content */}
        <div
          className={`mobile-menu-container relative z-50 h-full flex flex-col items-center justify-center w-full max-w-full px-4 ${isMobileMenuOpen ? 'animate-slide-down-menu' : ''} transition-all duration-300`}
          style={{ margin: 0, paddingTop: 0, paddingBottom: 0 }}
        >
          <nav className="flex flex-col items-center w-full h-full justify-center">
            <div className="flex flex-col items-center w-full" style={{ height: '100%' }}>
              <div className="flex flex-col items-center w-full space-y-4 flex-1 justify-center">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-2xl sm:text-3xl text-text-secondary hover:text-brand-primary transition-all duration-50 font-bold transform min-h-[44px] flex items-center justify-center w-full text-center group ${isMobileMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: isMobileMenuOpen ? `${index * 0.07 + 0.15}s` : '0s', padding: '8px 0' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="https://discord.gg/y6kb6a9CcG"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary text-lg sm:text-xl min-h-[44px] flex items-center justify-center text-center rounded-xl transform mb-4 mt-4 max-w-xs w-full mx-auto relative overflow-hidden group ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${navItems.length * 0.07 + 0.22}s` : '0s',
                  borderRadius: '12px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-primary/20 rounded-xl animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                {/* Button content */}
                <span className="relative z-10 font-bold tracking-wide">
                  Join Community
                </span>

                {/* Discord icon */}
                <svg
                  className="relative z-10 w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;