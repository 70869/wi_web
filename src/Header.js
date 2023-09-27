import React from 'react';
import discordIcon from './images/discord.svg';
import youtubeIcon from './images/youtube.svg';

function Header() {
    return (
        <header class="md:flex md:flex-row md:items-center md:justify-center md:w-full p-4 pb-0 shadow-lg md:pb-4" style={{ backgroundColor: "rgba(27, 27, 27, 0.425)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
            <div class="flex md:flex-row items-center justify-between mb-4 md:w-full lg:max-w-7xl md:mb-0">
                <div class="flex">
                    <h1 class="md:flex md:items-center leading-none text-2xl text-white">
                        <p class="no-underline text-lg font-bold">
                            (wired-in)
                        </p>
                    </h1>
                </div>
                <nav>
                    <ul class="hidden md:visible md:inline-flex items-center text-center cusror-pointer transition-all">
                        <li class="md:ml-8">
                            <a class="hover:opacity-80 text-zinc-300" href="#about">
                                About
                            </a>
                        </li>
                        <li class="md:ml-8">
                            <a class="hover:opacity-80 text-zinc-300" href="#server">
                                Servers
                            </a>
                        </li>
                        <li class="md:ml-8">
                            <a class="hover:opacity-80 text-zinc-300" href="#team">
                                Team
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="md:inline-flex items-center text-center hidden md:visible">
                    <div class="flex">
                        <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-white" href="https://youtube.com/@wiredin" target="_blank" rel="noreferrer">
                            <img src={youtubeIcon} alt="YouTube" />
                        </a>
                        <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-zinc-300" href="https://discord.gg/y6kb6a9CcG" target="_blank" rel="noreferrer">
                            <img src={discordIcon} alt="Discord" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;