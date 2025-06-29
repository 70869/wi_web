import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text animate-pulse-slow">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Oops! It looks like you&apos;ve ventured into uncharted territory. 
            Please, stay back lil bruh.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary text-lg px-8 py-4">
            Go Home
          </Link>
          <Link href="/#contact" className="btn-secondary text-lg px-8 py-4">
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="relative rounded-2xl p-8 overflow-hidden">
          {/* Enhanced glassmorphic background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Looking for something specific? 
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link 
                href="/#servers" 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 flex items-center space-x-2"
              >
                <span>🎮</span>
                <span>Our Game Servers</span>
              </Link>
              <Link 
                href="/#team" 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 flex items-center space-x-2"
              >
                <span>👥</span>
                <span>Meet Our Team</span>
              </Link>
              <Link 
                href="/#about" 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 flex items-center space-x-2"
              >
                <span>ℹ️</span>
                <span>About (wired-in)</span>
              </Link>
              <Link
                href="/#contact" 
                className="text-text-secondary hover:text-brand-primary transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📧</span>
                <span>Get Support</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}; 
