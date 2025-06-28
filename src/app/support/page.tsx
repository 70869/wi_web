import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Support = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
          <div className="glass rounded-3xl p-12 max-w-xl w-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-primary">Support</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              For all support inquiries, please join our Discord community.
            </p>
            <a
              href="https://discord.gg/wiredin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Join Discord
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Support; 