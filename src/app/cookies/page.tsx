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
            <div className="glass rounded-3xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. What Are Cookies</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    analyzing site traffic, and personalizing content.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Types of Cookies We Use</h2>
                <div className="text-text-secondary space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation, access to secure areas, and form submissions.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-text-primary">Analytics Cookies</h3>
                  <p>
                    We use analytics cookies to understand how visitors interact with our website. 
                    This helps us improve our services and user experience.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-text-primary">Preference Cookies</h3>
                  <p>
                    These cookies remember your choices and preferences, such as language settings, 
                    theme preferences, and login status.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Third-Party Cookies</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    Some cookies are placed by third-party services that appear on our pages. 
                    These may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Analytics for website analytics</li>
                    <li>Discord integration for community features</li>
                    <li>Steam integration for game server features</li>
                    <li>Payment processors for subscription management</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Managing Cookies</h2>
                <div className="text-text-secondary space-y-4">
                  <p>You can control and manage cookies in several ways:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                    <li>Cookie consent: We provide options to accept or decline non-essential cookies</li>
                    <li>Third-party opt-outs: You can opt out of specific third-party services</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Cookie Retention</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    The length of time cookies remain on your device depends on their type:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent cookies:</strong> Remain until they expire or are deleted</li>
                    <li><strong>Analytics cookies:</strong> Typically expire after 2 years</li>
                    <li><strong>Preference cookies:</strong> Usually expire after 1 year</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Updates to This Policy</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our 
                    practices or for other operational, legal, or regulatory reasons. We will 
                    notify you of any material changes by posting the new policy on this page.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">7. Contact Us</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-surface-secondary rounded-xl p-4">
                    <p className="font-medium text-text-primary">Email:</p>
                    <p>contact@wiredin.com</p>
                    <p className="font-medium text-text-primary mt-4">Discord:</p>
                    <p>https://discord.gg/wiredin</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy; 