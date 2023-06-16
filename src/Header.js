import React from 'react';
import discordIcon from './images/discord.svg';
import youtubeIcon from './images/youtube.svg';

function Header() {
return (
        <header>
            <div class="flex flex-row items-center justify-center w-full transition-all shadow-lg" style={{ backgroundColor: "rgba(27, 27, 27, 0.425)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
                <div class="flex flex-row justify-between items-center w-full py-1 px-4 max-w lg:max-w-7xl">
                    <div class="flex">
                        <div class="flex items-center py-3 cursor-pointer hover:opacity-80 text-zinc-300 transition-all">
                            <p class="text-white text-lg font-bold">(wired-in)</p>
                        </div>
                    </div>
                    <div class="inline-flex items-center text-center cusror-pointer transition-all text-zinc-200">
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="#about">About</a>
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="#server">Servers</a>
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="#team">Team</a>
                    </div>
                    <div class="inline-flex items-center text-center">
                        <div class="flex">
                        <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-white" href="https://youtube.com/" target="_blank" rel="noreferrer">
                                <img src={youtubeIcon} alt="YouTube" />
                            </a>
                            <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-zinc-300" href="https://discord.gg/wiredin" target="_blank" rel="noreferrer">
                                <img src={discordIcon} alt="Discord" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
