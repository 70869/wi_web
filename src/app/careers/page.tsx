import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Developer',
      type: 'Full-time / Part-time',
      description: 'We\'re looking for passionate developers to help build and maintain our platform, game servers, and community tools.',
      requirements: [
        'Experience with JavaScript/TypeScript, React, Node.js',
        'Knowledge of game server technologies (Minecraft, CS2)',
        'Experience with database management and API development',
        'Familiarity with cloud infrastructure and deployment',
        'Strong problem-solving skills and attention to detail'
      ],
      responsibilities: [
        'Develop and maintain web applications and APIs',
        'Optimize game server performance and stability',
        'Implement new features and improvements',
        'Collaborate with the team on technical decisions',
        'Provide technical support to the community'
      ]
    },
    {
      title: 'Server Administrator',
      type: 'Full-time / Part-time',
      description: 'Join our team to manage and optimize our high-performance game servers and infrastructure.',
      requirements: [
        'Experience with Linux server administration',
        'Knowledge of game server management (Minecraft, CS2)',
        'Understanding of networking and security principles',
        'Experience with monitoring and backup systems',
        'Ability to troubleshoot server issues quickly'
      ],
      responsibilities: [
        'Monitor and maintain server performance',
        'Implement security measures and updates',
        'Manage server configurations and plugins',
        'Handle server migrations and scaling',
        'Provide 24/7 server support when needed'
      ]
    },
    {
      title: 'Community Moderator',
      type: 'Part-time / Volunteer',
      description: 'Help maintain a positive and welcoming community environment across our Discord and game servers.',
      requirements: [
        'Active member of our community',
        'Excellent communication and conflict resolution skills',
        'Understanding of community guidelines and policies',
        'Ability to remain calm under pressure',
        'Experience with Discord moderation tools'
      ],
      responsibilities: [
        'Monitor Discord channels and game servers',
        'Enforce community guidelines and rules',
        'Help new members and answer questions',
        'Organize community events and activities',
        'Report issues to the admin team'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-text-primary">Join Our</span>
                <span className="gradient-text"> Team</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We're looking for passionate individuals to help grow our community and improve our services. 
                Join us in creating the ultimate gaming experience.
              </p>
            </div>

            {/* Job Openings */}
            <div className="space-y-8 mb-16">
              {jobOpenings.map((job, index) => (
                <div key={index} className="glass rounded-3xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-text-primary mb-2">{job.title}</h2>
                      <p className="text-brand-primary font-medium">{job.type}</p>
                    </div>
                    <button className="btn-primary mt-4 md:mt-0">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-text-secondary mb-6 text-lg">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-text-secondary flex items-start">
                            <span className="text-brand-primary mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-text-secondary flex items-start">
                            <span className="text-brand-primary mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Process */}
            <div className="glass rounded-3xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">How to Apply</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Join Our Community</h3>
                  <p className="text-text-secondary">
                    Start by joining our Discord server and getting to know the team and community.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Submit Application</h3>
                  <p className="text-text-secondary">
                    Send us your resume, portfolio, and a brief introduction explaining why you'd like to join.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Interview Process</h3>
                  <p className="text-text-secondary">
                    We'll review your application and schedule a call to discuss the role and your experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="glass rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Apply?</h2>
              <p className="text-text-secondary mb-6 text-lg">
                Send your application to us or reach out through Discord to learn more about these opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@wiredin.com"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Email Application
                </a>
                <a
                  href="https://discord.gg/wiredin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers; 