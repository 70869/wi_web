import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">Terms of</span>
                <span className="gradient-text"> Service</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="glass rounded-3xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    By accessing and using (wired-in) services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not 
                    use this service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Description of Service</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    (wired-in) provides high-performance game servers for titles such as Minecraft and 
                    Counter-Strike 2, along with secure file hosting services. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Game server hosting and management</li>
                    <li>Secure file storage and sharing</li>
                    <li>Community Discord server access</li>
                    <li>Technical support and assistance</li>
                    <li>Regular updates and maintenance</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. User Responsibilities</h2>
                <div className="text-text-secondary space-y-4">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the services in compliance with applicable laws</li>
                    <li>Respect other users and community guidelines</li>
                    <li>Not engage in any harmful or disruptive activities</li>
                    <li>Report any security vulnerabilities or issues</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Prohibited Activities</h2>
                <div className="text-text-secondary space-y-4">
                  <p>The following activities are strictly prohibited:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hacking, cheating, or exploiting game mechanics</li>
                    <li>Harassment, bullying, or hate speech</li>
                    <li>Sharing inappropriate or illegal content</li>
                    <li>Attempting to gain unauthorized access to systems</li>
                    <li>Distributing malware or harmful software</li>
                    <li>Violating intellectual property rights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Payment and Billing</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    Premium services require payment. By subscribing, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pay all fees associated with your subscription</li>
                    <li>Provide valid payment information</li>
                    <li>Authorize recurring charges for subscription renewals</li>
                    <li>Cancel your subscription before the next billing cycle to avoid charges</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Service Availability</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We strive to maintain 99.9% uptime for our services, but we cannot guarantee 
                    uninterrupted access. We reserve the right to perform maintenance, updates, 
                    or modifications that may temporarily affect service availability.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">7. Termination</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for conduct that we believe violates these Terms of Service or is harmful 
                    to other users, us, or third parties.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">8. Contact Information</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService; 