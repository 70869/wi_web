import React from 'react';
import Background from './images/bgblur.png'
import Header from './Header';
import CardTest from './ServerMinecraft';
import CardTest2 from './ServerCS2';
import picture from "./images/logo.png";
import Footer from "./Footer";
import ServerStatus from "./ServerStatus";

function MainContent() {
    return (
        <div>
            <div class="flex flex-col relative min-h-screen">
                <div class="absolute top-0 left-0 h-full w-full bg-center bg-no-repeat bg-cover z-[-1]"
                    style={{ backgroundImage: "url(" + Background + ")" }}
                />
                <Header />
                <div class="flex flex-col items-center justify-center flex-1 md:ml-32 md:mt-64 md:flex-row md:space-x-24 md:items-start md:justify-start">
                    <div class="overflow-hidden bg-transparent">
                        <div class="relative max-w-xl px-8 mx-auto sm:px-6 md:max-w-7xl items-center">
                            <div class="animate-fadein">
                                <h1 class="max-w-xl mx-auto text-center text-4xl md:text-7xl font-bold tracking-tight text-zinc-300 leading-normal">(wired-in)</h1>
                                <p class="max-w-xl text-start text-gray-300 text-itext-lg my-2 tracking-wide">The next step for game servers and file hosting.</p>
                                <ServerStatus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="flex flex-col md:w-full md:items-center bg-gradient-to-b from-black to-emerald-800">
                    <div id="about" class="container mx-auto md:px-32 py-32">
                        <div class="flex justify-center items-center">
                            <div class="hidden md:block">
                                <img class="mx-auto object-cover" src={picture} alt="placeholder" />
                            </div>
                            <div class="flex flex-col mx-auto md:bg-zinc-800 rounded-lg p-4 md:p-8">
                                <div class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight">
                                    <h2 class="inline-flex">
                                        <p class="text-white">About</p>
                                        <p class="text-customGreen">&nbsp;(</p>
                                        <p class="text-white">wired-in</p>
                                        <p class="text-customGreen">)</p>
                                    </h2>
                                </div>
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-white">
                                    (wired-in) is a community-centered brand designed with gamers in mind. We are dedicated to providing top-tier, high-performance game servers, hosting popular titles like Minecraft, Counter-Strike, and many more. We are driven by our passion for gaming and the desire to create an unparalleled multiplayer experience.
                                    <br /><br />
                                    But we're more than just game servers. Recognizing the need for secure, private storage solutions, we are proud to offer an exclusive, invite-only file hosting service. With end-to-end encryption, we're ensuring a secure space for all your important files.
                                    <br /><br />
                                    Our mission is to bridge the gap between gaming and security, enhancing your digital experience. We're set to launch in the Fall of 2023, and we can't wait for you to join our community.
                                    <br /><br />
                                    We operate on a tiered subscription model, which gives you the freedom to choose the level of service that suits your needs. Each tier offers different perks and advantages, from server access to increased storage space.
                                    <br /><br />
                                    At (wired-in), we're more than a brand - we're a community. Join us and become a part of our journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="server" class="container mx-auto md:px-32 py-32">
                        <div class="flex justify-center items-center">
                            <div class="flex flex-col p-4 md:p-8">
                                <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight text-white">Our Servers</h2>
                                <div class="flex flex-col md:flex-row pt-8">
                                    <CardTest />
                                    <div class="py-4"></div>
                                    <CardTest2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="team" class="container mx-auto md:px-32 py-32" >
                        <div class="flex justify-center items-center">
                            <div class="flex flex-col p-4 md:p-8">
                                <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight text-white">The Team</h2>
                                <div class="flex flex-col md:flex-row">
                                    <div class="flex bg-zinc-800 py-8 px-8 md:py-16 md:px-16 max-w-sm mx-3 my-6 rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                                        <img class="block mx-auto h-24 md:h-32 rounded-full sm:mx-0 sm:shrink-0" src="https://cdn.discordapp.com/avatars/1004937727172673578/7f65cff1bdb57c1b837cfd4082b0beb6.png?size=512&width=0&height=0" alt="etebong"></img>
                                        <div class="text-center space-y-2 sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg md:text-2xl text-zinc-200 font-semibold">etebong</p>
                                                <p class=" text-zinc-400 font-medium md:text-lg">some guy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex bg-zinc-800 py-8 px-8 md:py-16 md:px-16 max-w-sm mx-3 my-6 rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                                        <img class="block mx-auto h-24 md:h-32 rounded-full sm:mx-0 sm:shrink-0" src="https://cdn.discordapp.com/avatars/1004937727172673578/7f65cff1bdb57c1b837cfd4082b0beb6.png?size=512&width=0&height=0" alt="etebong"></img>
                                        <div class="text-center space-y-2 sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg md:text-2xl text-zinc-200 font-semibold">shie</p>
                                                <p class=" text-zinc-400 font-medium md:text-lg">some cool guy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
