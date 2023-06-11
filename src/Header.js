import React from 'react';
import discordIcon from './images/discord.svg'; // Replace with your own Discord icon
import youtubeIcon from './images/youtube.svg'; // Replace with your own YouTube icon

function Header() {
  return (
    <header>
      <div class="flex justify-between items-center py-3 px-32 text-zinc-300 relative z-auto">
        <div class="flex">
          <h1 class="text-green-300 text-lg font-semibold cursor-pointer hover:text-green-400">(wired-in)</h1>
        </div>
        <div class="inline-flex items-center text-center">
          <div class="flex">
            <a class="mx-auto w-6 mr-3 py-1 cursor-pointer" href="https://discord.gg/y6kb6a9CcG" target="_blank" rel="noreferrer">
              <img src={discordIcon} alt="Discord" />
            </a>
            <a class="mx-auto w-6 mr-3 py-1 cursor-pointer" href="https://youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
