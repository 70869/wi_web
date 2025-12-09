import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Terms of Service - (wired-in)',
  description: 'Read our Terms of Service to understand the rules and regulations for using (wired-in) services.',
};

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-text-secondary hover:text-brand-primary transition-colors duration-200 group"
              >
                <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Home
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">Terms of</span>
                <span className="gradient-text"> Service</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Last updated: November 30, 2025
              </p>
            </div>

            {/* Content */}
            <div className="relative rounded-3xl p-8 overflow-hidden">
              {/* Enhanced glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              <div className="relative z-10 space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">1. Acceptance of Terms</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      By accessing and using (wired-in) services, you accept and agree to be bound by the terms
                      and provision of this agreement. If you do not agree to abide by the above, please do not
                      use this service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">2. Description of Service</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      (wired-in) provides high-performance game servers for titles such as Minecraft and
                      Counter-Strike 2, along with secure file hosting services. Our services include:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li>Game server hosting and management</li>
                      <li>Secure file storage and sharing</li>
                      <li>Community Discord server access</li>
                      <li>Technical support and assistance</li>
                      <li>Regular updates and maintenance</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">3. User Responsibilities</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
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
                  <h2 className="text-2xl font-bold text-text-primary mb-6">4. Prohibited Activities</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>The following activities are strictly prohibited:</p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
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
                  <h2 className="text-2xl font-bold text-text-primary mb-6">5. Payment and Billing</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      Premium services require payment. By subscribing, you agree to:
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-6">
                      <li>Pay all fees associated with your subscription</li>
                      <li>Provide valid payment information</li>
                      <li>Authorize recurring charges for subscription renewals</li>
                      <li>Cancel your subscription before the next billing cycle to avoid charges</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">6. Service Availability</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      We strive to maintain 99.9% uptime for our services, but we cannot guarantee
                      uninterrupted access. We reserve the right to perform maintenance, updates,
                      or modifications that may temporarily affect service availability.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">7. Termination</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      We may terminate or suspend your access to our services immediately, without prior
                      notice, for conduct that we believe violates these Terms of Service or is harmful
                      to other users, us, or third parties.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">8. Contact Information</h2>
                  <div className="text-text-secondary space-y-4">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-surface-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/5">
                      <p className="font-medium text-text-primary mb-2">Email:</p>
                      <p className="mb-4">contact@wiredin.com</p>
                      <p className="font-medium text-text-primary mb-2">Discord:</p>
                      <p>https://discord.gg/y6kb6a9CcG</p>
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

export default TermsOfService;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};