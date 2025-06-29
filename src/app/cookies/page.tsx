import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">Cookie</span>
                <span className="gradient-text"> Policy</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="relative rounded-3xl p-8 overflow-hidden">
              {/* Enhanced glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              <div className="relative z-10 space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">1. What Are Cookies</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better experience by remembering your preferences and 
                      analyzing how you use our site.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">2. How We Use Cookies</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand site usage</li>
                      <li>Preference cookies to remember your settings</li>
                      <li>Security cookies to protect against fraud</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">3. Third-Party Cookies</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      Some cookies are placed by third-party services that appear on our pages. 
                      These may include:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li>PostHog for website analytics</li>
                      <li>Discord integration for community features</li>
                      <li>Steam integration for game server features</li>
                      <li>Payment processors for subscription management</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">4. Managing Cookies</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>You can control and manage cookies in several ways:</p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                      <li>Cookie consent: We provide options to accept or decline non-essential cookies</li>
                      <li>Third-party opt-outs: You can opt out of specific third-party services</li>
                    </ul>
                    <p className="mt-6 p-4 bg-surface-secondary/30 rounded-lg border border-white/5">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">5. Cookie Retention</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      The length of time cookies remain on your device depends on their type:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                      <li><strong>Persistent cookies:</strong> Remain until they expire or are deleted</li>
                      <li><strong>Analytics cookies:</strong> Typically expire after 2 years</li>
                      <li><strong>Preference cookies:</strong> Usually expire after 1 year</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">6. Updates to This Policy</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our 
                      practices or for other operational, legal, or regulatory reasons. We will 
                      notify you of any material changes by posting the new policy on this page.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">7. Contact Us</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div className="bg-surface-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                      <p className="font-medium text-text-primary mb-2">Email:</p>
                      <p className="mb-4">wiredin@etebong.com</p>
                      <p className="font-medium text-text-primary mb-2">Discord:</p>
                      <a href="https://discord.gg/y6kb6a9CcG" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">https://discord.gg/y6kb6a9CcG</a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}; 