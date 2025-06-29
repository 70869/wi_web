import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Community = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
          <div className="relative rounded-3xl p-12 max-w-xl w-full text-center overflow-hidden">
            {/* Enhanced glassmorphic background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-text-primary">Community</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Forum coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Community;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}; 