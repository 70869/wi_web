import React from 'react';
import logo from './images/logo.png';
import Header from './Header.js'; 
import Footer from './Footer.js';

function MainContent() {
  return (
    <div className="relative h-screen w-full flex flex-col">
      <div style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/1075065323860009020/1117415687963549858/2023-06-09_17.40.02.png)'}} className="absolute top-0 left-0 h-full w-full bg-center bg-no-repeat bg-cover z-[-1]" />
      <Header className="z-10" /> {/* set the z-index to a higher value */}
      <main className="flex-1 flex justify-center items-center">
        <div className="bg-white bg-opacity-30 p-7 rounded-lg flex flex-col items-center">
          <img src={logo} alt="(wired-in) logo" className="max-w-[75%]" />
          <p className="text-white text-xl font-semibold">Coming This Summer</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainContent;
