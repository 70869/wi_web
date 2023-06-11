import React from 'react';
import discordIcon from './images/discord.svg';
import youtubeIcon from './images/youtube.svg';

function Header() {
    return (
        <header>
            <div class="flex flex-row items-center justify-center w-full transition-all" style={{ backgroundColor: "rgba(23, 23, 23, 0.3" }}>
                <div class="flex flex-row justify-between items-center w-full py-1 px-4 max-w lg:max-w-7xl">
                    <div class="flex">
                        <div class="flex items-center py-3 cursor-pointer hover:opacity-80 text-zinc-300 transition-all">
                            <p class="text-green-300 text-lg font-bold">(wired-in)</p>
                        </div>
                    </div>
                    <div class="inline-flex items-center text-center cusror-pointer transition-all text-zinc-200">
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="/">about</a>
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="/">servers</a>
                        <a class="py-1 mx-4 hover:opacity-80 text-zinc-300" href="/">team</a>
                    </div>
                    <div class="inline-flex items-center text-center">
                        <div class="flex"> {/** maybe put this in the footer ? */}
                            <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-zinc-300" href="https://discord.gg/y6kb6a9CcG" target="_blank" rel="noreferrer">
                                <img src={discordIcon} alt="Discord" />
                            </a>
                            <a class="w-6 mx-4 py-1 cursor-pointer hover:opacity-80 text-zinc-300" href="https://youtube.com/" target="_blank" rel="noreferrer">
                                <img src={youtubeIcon} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
