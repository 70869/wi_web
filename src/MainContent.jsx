import React from 'react';
import Header from './Header';
import Picture from './images/logo.png';
import ServerStatus from './ServerStatus';
import Team from './TeamContent';
import Footer from './Footer';
import ServerContent from './ServerContent';
import HeroBackground from './images/damn.png';
import FadeInSection from './FadeInSection'; 

function MainContent() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Header />

      {/* Full-Screen Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          className="w-full h-full object-cover"
          src={HeroBackground}
          alt="Hero Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      </div>

      {/* Hero Content */}
      <FadeInSection>
        <div className="relative flex items-center justify-center h-screen">
          <div className="max-w-2xl mt-19 mb-20 items-center animate-fadein px-9 text-center relative z-10">
            <h1 className="text-8xl font-extrabold leading-tight mb-6 text-gradient">
              <span className="text-green-400">[</span>
              <span className="text-white">wi</span>
              <span className="text-green-400">]</span> 2024
            </h1>

            <p className="text-xl mb-9 text-zinc-400">
              We are (wired-in) - a community designed for passionate gamers and storage enthhusiasts. Explore top-tier game servers, exclusive file hosting services, and a vibrant community.
            </p>
            <ServerStatus />
          </div>
        </div>
      </FadeInSection>

      {/* About Us Section */}
      <FadeInSection>
        <div className="container mx-auto mt-11 px-8 py-24 lg:py-32" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fadein text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                The Motive
              </h2>
              <p className="text-lg lg:text-xl mb-10 text-zinc-400">
                (wired-in) is more than just game servers; it's a community. Our mission is to provide high-performance game servers for titles like Minecraft and Counter-Strike. We also offer an exclusive, invite-only file hosting service with end-to-end encryption to ensure the security of your important files.
                <br /><br />
                We strive to bridge the gap between gaming and security, enhancing your digital experience. Our tiered subscription model offers flexibility, providing different perks and advantages to meet your unique needs.
                <br /><br />
                (wired-in), where we're more than just servers - we're a growing community.
              </p>
            </div>
            <div className={`relative z-10`}>
              <img className="mx-auto object-cover rounded-xl z-10" src={Picture} alt="logo" />
            </div>
          </div>
          <div>
            <FadeInSection>
            <ServerContent />
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Team Section */}
      <FadeInSection>
        <Team />
      </FadeInSection>

      {/* Footer Section */}
        <Footer />
    </div>
  );
}

export default MainContent;
