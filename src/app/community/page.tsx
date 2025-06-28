import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Community = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
          <div className="glass rounded-3xl p-12 max-w-xl w-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Community</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Forum coming soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Community; 