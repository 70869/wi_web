'use client';

import React from 'react';
import Image from 'next/image';

interface SocialLinks {
  github?: string;
  discord?: string;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
  social: SocialLinks;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Bong',
      role: 'Founder',
      avatar: 'https://avatars.githubusercontent.com/u/32320771?v=4',
      description: 'Visionary leader and community architect',
      social: { github: 'https://github.com/etebong' }
    },
    {
      name: 'shie',
      role: 'Lead Developer',
      avatar: 'https://avatars.githubusercontent.com/u/44524196?v=4',
      description: 'Backend architect and system engineer and probably in vrchat rn.',
      social: { github: 'https://github.com/shie100' }
    },
    {
      name: 'xxalem',
      role: 'Creative Director',
      avatar: 'https://avatars.githubusercontent.com/u/134183756?v=4',
      description: 'Design enthusiast (currently MIA)',
      social: { github: 'https://github.com/xxalem' }
    },
    {
      name: 'Gavin',
      role: 'Web Developer',
      avatar: 'https://avatars.githubusercontent.com/u/50128259?v=4',
      description: 'Full-stack developer and tech innovator',
      social: { github: 'https://github.com/gavin' }
    },
    {
      name: 'soda',
      role: 'Admin',
      avatar: 'https://avatars.githubusercontent.com/u/7321764?v=4',
      description: 'Currently on hiatus',
      social: { github: 'https://github.com/soda' }
    },
    {
      name: 'Justin',
      role: '3D Artist',
      avatar: 'https://cdn.discordapp.com/avatars/359199438759002112/f46ce7173faad7ef47d1e7201f810600.webp?size=80',
      description: 'Currently locked in on a other project',
      social: { discord: 'https://discord.com/users/359199438759002112' }
    }
  ];

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">Let Us</span>
            <span className="gradient-text"> Cook</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals behind (wired-in), 
            dedicated to creating the ultimate gaming experience.
          </p>
        </div>

        {/* Team Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            // Define offline status for team members
            const offlineMembers = ['soda', 'Gavin', 'xxalem', 'Justin'];
            const isOffline = offlineMembers.includes(member.name);
            
            return (
              <div
                key={index}
                className="card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Member Avatar */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-border-primary group-hover:ring-brand-primary transition-all duration-300">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      isOffline 
                        ? 'bg-gray-500' 
                        : 'bg-brand-primary'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isOffline 
                          ? 'bg-black' 
                          : 'bg-black'
                      }`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                    <p className="text-brand-primary font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Member Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface-tertiary rounded-lg hover:bg-brand-primary hover:text-black transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.discord && (
                    <a
                      href={member.social.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-surface-tertiary rounded-lg hover:bg-brand-primary hover:text-black transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Statistics */}
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-text-secondary">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-text-secondary">Dedication</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-text-secondary">The Motive</div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="relative rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Glassmorphic Background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-text-secondary mb-8 text-lg">
                We&apos;re always looking for passionate individuals who share our vision.
              </p>
              <button className="btn-primary text-lg px-8 py-4">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 