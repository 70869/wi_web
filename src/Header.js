import React from 'react';
import discordIcon from './images/discord.svg';
import youtubeIcon from './images/youtube.svg';

function Header() {
  return (
    <nav className="bg-zinc-900 flex flex-row md:items-center md:justify-center w-full p-2 shadow-lg sticky top-0 z-20 bg-opacity-40 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between w-full lg:max-w-7xl my-2">
        <h1 className="md:flex md:items-center leading-none text-2xl text-white">
          <a href="/" className="no-underline text-lg font-bold">
            (wired-in)
          </a>
        </h1>

        <ul className="hidden md:flex items-center text-center cursor-pointer space-x-8 transition-all">
          <li>
            <a href="#about" className="hover:opacity-80 text-zinc-300 font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#server" className="hover:opacity-80 text-zinc-300 font-bold">
              Servers
            </a>
          </li>
          <li>
            <a href="#team" className="hover:opacity-80 text-zinc-300 font-bold">
              Team
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center text-center space-x-4">
          <a
            href="https://youtube.com/@wiredin"
            target="_blank"
            rel="noreferrer"
            className="w-6 py-1 cursor-pointer hover:opacity-80 text-white"
          >
            <img src={youtubeIcon} alt="YouTube Icon" />
          </a>
          <a
            href="https://discord.gg/y6kb6a9CcG"
            target="_blank"
            rel="noreferrer"
            className="w-6 py-1 cursor-pointer hover:opacity-80 text-zinc-300"
          >
            <img src={discordIcon} alt="Discord Icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
