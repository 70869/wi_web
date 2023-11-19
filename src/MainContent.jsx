import React from 'react';
import Header from './Header';
import Picture from "./images/gg.png";
import ServerStatus from "./ServerStatus";
import Team from "./TeamContent";
import Footer from "./Footer";
import ServerContent from './ServerContent';

function MainContent() {
  return (
    <div className="bg-gradient-to-b from-black to-emerald-600 min-h-screen text-white">
      <Header />
      <div className="flex items-center justify-center pb-32">
        <div className="mt-20 mb-20 items-center max-w-2xl">
          <div className="animate-fadein px-8">
            <h1 className="text-5xl text-center font-extrabold leading-tight mb-6">
              (wired-in)
            </h1>
            <p className="text-xl mb-9 text-center px-8">
              Elevate your gaming experience with (wired-in) - a community-centered brand designed for passionate gamers. Discover top-tier game servers, exclusive file hosting services, and a vibrant community.
            </p>
            <ServerStatus />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-fadein text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" id="about">
              About Us
            </h2>
            <p className="text-lg lg:text-xl mb-20">
              (wired-in) is not just server hosting; it's a gaming community. Our mission is to provide high-performance game servers for titles like Minecraft and Counter-Strike. We also offer an exclusive, invite-only file hosting service with end-to-end encryption to ensure the security of your important files.
              <br /><br />
              We strive to bridge the gap between gaming and security, enhancing your digital experience. Our tiered subscription model offers flexibility, providing different perks and advantages to meet your unique needs.
              <br /><br />
              Join (wired-in), where we're more than just servers - we're a thriving community.
            </p>
          </div>
          <div>
            <img className="mx-auto object-cover rounded-xl" src={Picture} alt="logo" />
          </div>
        </div>
        <ServerContent />
      </div>
      <Team />
      <Footer />
    </div>
  );
}

export default MainContent;
