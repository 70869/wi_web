import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServersSection from '../components/sections/ServersSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServersSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
