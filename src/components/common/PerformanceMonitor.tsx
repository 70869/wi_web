'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics with proper typing
        if ('value' in entry) {
          console.log(`${entry.name}: ${entry.value}`);
        } else {
          console.log(`${entry.name}: ${entry.startTime}`);
        }
        
        // You can send these to your analytics service
        // Example: analytics.track('web_vital', { name: entry.name, value: entry.value });
      }
    });

    // Observe different performance metrics
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 