import React from 'react';
import Header from './Header';
import Background from './images/bgblur.png'
import Picture from "./images/logo.png";
import ServerStatus from "./ServerStatus";
import Team from "./TeamContent";
import Footer from "./Footer";
import ServerContent from './ServerContent';

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
                                <h1 class="max-w-xl mx-auto text-left text-5xl my-4 md:text-7xl font-bold tracking-tight text-zinc-100 leading-normal text-shadow-md">(wired-in)</h1>
                                <p class="max-w-xl text-2xl text-start text-gray-300 text-itext-lg my-3 tracking-wide text-shadow-md">Experience Hosting Like Never Before.</p>
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
                                <img class="mx-auto object-cover" src={Picture} alt="placeholder" />
                            </div>
                            <div class="flex flex-col mx-auto rounded-xl shadow-lg p-4 md:p-8" style={{ backgroundColor: "rgba(27, 27, 27, 0.65)", backdropFilter: "blur(10px)"}} >
                                <div class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight">
                                    <h2 class="inline-flex">
                                        <p class="text-white">About</p>
                                        <p class="text-customGreen">&nbsp;(</p>
                                        <p class="text-white">Us</p>
                                        <p class="text-customGreen">)</p>
                                    </h2>
                                </div>
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-white">
                                    (wired-in) is a community-centered brand designed with gamers in mind. We are dedicated to providing top-tier, high-performance game servers, hosting popular titles like Minecraft, Counter-Strike, and many more. We are driven by our passion for gaming and the desire to create an unparalleled multiplayer experience.
                                    <br /><br />
                                    But we're more than just game servers. Recognizing the need for secure, private storage solutions, we are proud to offer an exclusive, invite-only file hosting service. With end-to-end encryption, we're ensuring a secure space for all your important files.
                                    <br /><br />
                                    Our mission is to bridge the gap between gaming and security, enhancing your digital experience. We're set to launch this Fall, and we can't wait for you to join our community.
                                    <br /><br />
                                    We operate on a tiered subscription model, which gives you the freedom to choose the level of service that suits your needs. Each tier offers different perks and advantages, from server access to increased storage space.
                                    <br /><br />
                                    At (wired-in), we're more than just servers - we're a community. Join us and become a part of our journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ServerContent />
                    <Team />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;
