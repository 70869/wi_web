import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">Privacy</span>
                <span className="gradient-text"> Policy</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="glass rounded-3xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Information We Collect</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or participate in our community. This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and email address</li>
                    <li>Discord username and Steam profile information</li>
                    <li>Server usage data and preferences</li>
                    <li>Communication records with our support team</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. How We Use Your Information</h2>
                <div className="text-text-secondary space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our game servers and services</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send important updates and announcements</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Improve our services and user experience</li>
                    <li>Ensure compliance with our terms and policies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Information Sharing</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit permission</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Data Security</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Your Rights</h2>
                <div className="text-text-secondary space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Contact Us</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us at:
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

export default PrivacyPolicy; 