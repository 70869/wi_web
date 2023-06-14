import React, { useState, useEffect } from 'react';
import bg from './images/bgblur.png'
import Header from './Header';
import picture from "./images/logo.png";
import Footer from "./Footer";
import axios from 'axios';

function ServerStatus() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        axios.get('https://api.mcsrvstat.us/2/mc.wiredin.gg')
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    if (status === null || status.players === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div class="flex justify-between items-center bg-white dark:bg-white w-full p-4 mt-6">
            <div class="text-xl font-bold">Test Environment</div>
            <div>{status.players.online} players online</div>
        </div>
    );
}


function MainContent() {
    return (
        <div>
            <div class="flex flex-col relative min-h-screen">
                <div class="absolute top-0 left-0 h-full w-full bg-center bg-no-repeat bg-cover z-[-1]"
                    style={{ backgroundImage: "url(" + bg + ")" }}
                />
                <Header />
                <div class="flex flex-col items-center justify-center flex-1 ml-32 mt-64 xl:flex-row xl:space-x-24 xl:items-start xl:justify-start">
                    <div class="overflow-hidden bg-transparent">
                        <div class="relative max-w-xl px-8 mx-auto sm:px-6 lg:max-w-7xl items-center">
                            <div>
                            <h1 class="animate-fadein max-w-xl mx-auto text-start text-7xl font-bold tracking-tight text-gray-300 leading-normal">(wired-in)</h1>
                            <p class="animate-fadein max-w-xl text-start text-gray-300 text-lg mb-4 tracking-wide">The next step for game servers and file hosting.</p>
                            <ServerStatus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="flex flex-col w-full items-center bg-white dark:bg-black">
                    <div id="about" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <img class="mx-auto max-w-[35%] object-cover" src={picture} alt="placeholder" />
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-xl text-5xl font-extrabold tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">About (wired-in)</h2>
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-zinc-600 dark:text-zinc-400">
                                 (wired-in) is a community-centered brand designed with gamers in mind. We are dedicated to providing top-tier, high-performance game servers, hosting popular titles like Minecraft, Counter-Strike, and many more. We are driven by our passion for gaming and the desire to create an unparalleled multiplayer experience.
                                 <br/><br/>
                                 But we're more than just game servers. Recognizing the need for secure, private storage solutions, we are proud to offer an exclusive, invite-only file hosting service. With end-to-end encryption, we're ensuring a secure space for all your important files.
                                 <br/><br/>
                                 Our mission is to bridge the gap between gaming and security, enhancing your digital experience. We're set to launch in the Fall of 2023, and we can't wait for you to join our community.
                                 <br/><br/>
                                 We operate on a tiered subscription model, which gives you the freedom to choose the level of service that suits your needs. Each tier offers different perks and advantages, from server access to increased storage space.
                                 <br/><br/>
                                 To solidify our community, we also offer (wired-in) branded merchandise. Show off your gamer spirit and become a part of our story.
                                 <br/><br/>
                                 At (wired-in), we're more than a brand - we're a community. Join us and become a part of our journey.</p>
                            </div>
                        </div>
                    </div>
                    <div id="server" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-2xl text-5xl font-extrabold tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">High quality game servers</h2>
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-zinc-600 dark:text-zinc-400">yep.</p>
                                <ServerStatus />    
                            </div>
                        </div>
                    </div>
                    <div id="team" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-xl text-5xl font-extrabold tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">The team</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;
