import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const DMCA = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">DMCA</span>
                <span className="gradient-text"> Policy</span>
              </h1>
              <p className="text-xl text-text-secondary">
                Digital Millennium Copyright Act Compliance
              </p>
            </div>

            {/* Content */}
            <div className="glass rounded-3xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">1. Copyright Policy</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    (wired-in) respects the intellectual property rights of others and expects its users 
                    to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and 
                    respond to notices of alleged copyright infringement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">2. Filing a DMCA Notice</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    If you believe that your copyrighted work has been copied in a way that constitutes 
                    copyright infringement, please provide us with the following information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A physical or electronic signature of the copyright owner or authorized person</li>
                    <li>Identification of the copyrighted work claimed to have been infringed</li>
                    <li>Identification of the material that is claimed to be infringing</li>
                    <li>Your contact information (name, address, phone number, email)</li>
                    <li>A statement that you have a good faith belief that use is not authorized</li>
                    <li>A statement that the information is accurate and you are authorized to act</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">3. Counter-Notification</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    If you believe your content was removed in error, you may file a counter-notification 
                    containing:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your physical or electronic signature</li>
                    <li>Identification of the removed material and its previous location</li>
                    <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                    <li>Your consent to local federal court jurisdiction</li>
                    <li>Your contact information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">4. Repeat Infringers</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We maintain a policy of terminating accounts of users who are repeat infringers 
                    of copyright or other intellectual property rights. We may also terminate accounts 
                    of users who repeatedly submit false or frivolous notices.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">5. Contact Information</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    Please send all DMCA notices and counter-notifications to our designated copyright agent:
                  </p>
                  <div className="bg-surface-secondary rounded-xl p-6">
                    <p className="font-medium text-text-primary mb-2">Copyright Agent</p>
                    <p className="mb-2">(wired-in)</p>
                    <p className="mb-2">Email: dmca@wiredin.com</p>
                    <p className="mb-2">Discord: https://discord.gg/wiredin</p>
                    <p className="text-sm text-text-tertiary mt-4">
                      Please include "DMCA Notice" or "Counter-Notification" in the subject line.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">6. Response Time</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    We will respond to properly filed DMCA notices within 10 business days. 
                    Counter-notifications will be processed according to DMCA requirements, 
                    typically within 10-14 business days.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">7. Legal Disclaimer</h2>
                <div className="text-text-secondary space-y-4">
                  <p>
                    This policy is provided for informational purposes only and does not constitute 
                    legal advice. If you have questions about copyright law or the DMCA, please 
                    consult with a qualified attorney.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">8. Additional Resources</h2>
                <div className="text-text-secondary space-y-4">
                  <p>For more information about copyright and the DMCA:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>U.S. Copyright Office: <a href="https://www.copyright.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">www.copyright.gov</a></li>
                    <li>DMCA Information: <a href="https://www.copyright.gov/dmca" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">www.copyright.gov/dmca</a></li>
                  </ul>
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

export default DMCA; 