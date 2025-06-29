import React, { Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServersSection from '../components/sections/ServersSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PerformanceMonitor from '../components/common/PerformanceMonitor';

// Lazy load non-critical sections
const LazyTeamSection = React.lazy(() => import('../components/sections/TeamSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/sections/TestimonialsSection'));
const LazyTurboSection = React.lazy(() => import('../components/sections/TurboSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-padding relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="animate-pulse">
        <div className="h-16 bg-surface-secondary rounded-xl mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-surface-secondary rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PerformanceMonitor />
      <HeroSection />
      <AboutSection />
      <ServersSection />
      {/* Lazy loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <LazyTeamSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyTestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LazyTurboSection />
      </Suspense>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
