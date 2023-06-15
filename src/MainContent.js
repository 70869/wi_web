import React, { useState, useEffect } from 'react';
import bg from './images/bgblur.png'
import Header from './Header';
import picture from "./images/logo.png";
import Footer from "./Footer";
import axios from 'axios';
import mcIcon from './images/mcicon.svg';

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

    const loadingStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.171)',
        color: 'white',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px', // or whatever height you prefer
        fontSize: '1.5rem', // or whatever font size you prefer
    };

    const iconStyle = {
        height: '1em', // or whatever size fits best
        width: '1em', // keep it the same as height to maintain aspect ratio
        marginRight: '0.5em' // some space between the icon and the text
    };

    if (status === null || status.players === undefined) {
        return <div style={loadingStyle}>Loading...</div>;
    }

    return (
        <div class="flex justify-between items-center w-full p-4 mt-6"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.308)',
                color: 'white',
                borderRadius: '10px',
                backdropFilter: 'blur(20px)'
            }}>
            <div class="text-xl font-bold" style={{ color: '#00FF88', display: 'flex', alignItems: 'center' }}>
                <img src={mcIcon} alt="MC Icon" style={iconStyle} />
                mc.wiredin.gg
            </div>
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
                            <div class="animate-fadein">
                                <h1 class="animate-fadein max-w-xl mx-auto text-start text-7xl font-bold tracking-tight text-gray-300 leading-normal">(wired-in)</h1>
                                <p class="animate-fadein max-w-xl text-start text-gray-300 text-itext-lg mb-4 tracking-wide">The next step for game servers and file hosting.</p>
                                <ServerStatus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="flex flex-col w-full items-center bg-white dark:bg-black">
                    <div id="about" class="container mx-auto px-32 py-32" >
                        <div class="parallax flex flex-row justify-center items-center">
                            <img class="mx-auto max-w-[35%] object-cover" src={picture} alt="placeholder" />
                            <div class="flex flex-col mx-auto bg-white bg-opacity-25 rounded-lg backdrop-blur-lg p-4 md:p-6 lg:p-8 shadow-glow">
                                <h2 class="max-w-xl text-5xl font-light tracking-tight text-center leading-tight">
                                    <h2 class="max-w-xl text-5xl font-light tracking-tight text-center leading-tight">
                                        <span class="text-white">About </span>
                                        <span class="text-customGreen">(</span>
                                        <span class="text-white">wired-in</span>
                                        <span class="text-customGreen">)</span>
                                    </h2>
                                </h2>
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
                    <div id="server" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-2xl text-5xl font-light tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">Game Servers</h2>
                                <section class="relative py-12 min-h-screen">
                                    <div class="absolute inset-0">
                                        <div class="h-1/3 sm:h-2/3"></div>
                                    </div>
                                    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                        <div class="relative shadow-xl sm:rounded-lg sm:overflow-hidden">
                                            <div class="px-4 py-5 sm:px-6 bg-opacity-25 backdrop-blur-lg">
                                                <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Join the Test Environment</h2>
                                                <p class="mt-4 max-w-3xl text-lg text-gray-300">We've set up a "Test Environment" where you can jump in, play, and give us your feedback. It's a bit like being a game tester, but without the long hours and the boss looking over your shoulder.</p>
                                            </div>
                                            <div class="px-4 py-5 sm:px-6  bg-opacity-25 backdrop-blur-lg">
                                                <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Minecraft Test Server</h2>
                                                <p class="mt-4 max-w-3xl text-lg text-gray-300">Our Minecraft Test Server is a wild and wonderful place where creativity meets combat. We've got three modes for you to choose from:</p>
                                                <ul class="list-disc pl-5 mt-4 text-gray-300">
                                                    <li>Creative: Unleash your imagination and build to your heart's content.</li>
                                                    <li>PvP: Test your combat skills against other players. May the best player win!</li>
                                                    <li>Survival Multiplayer: Can you survive in a world where danger lurks around every corner?</li>
                                                </ul>
                                                <p class="mt-4 max-w-3xl text-lg text-gray-300">And the best part? There are no rules! Well, except for one: no cheating. We're all here to have fun, after all.</p>
                                            </div>
                                            <div class="px-4 py-5 sm:px-6 bg-opacity-25 backdrop-blur-lg">
                                                <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Special Status for Test Environment Users</h2>
                                                <p class="mt-4 max-w-3xl text-lg text-gray-300">As a thank you for helping us shape the future of (wired-in), all Test Environment users will receive a special "Minecraft Tester" role on our Discord server and forums. It's our way of saying thanks for being part of our journey.</p>
                                            </div>
                                            <div class="px-4 py-5 sm:px-6  bg-opacity-25 backdrop-blur-lg">
                                                <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Join the Test Environment Today!</h2>
                                                <p class="mt-4 max-w-3xl text-lg text-gray-300">So what are you waiting for? Join the Test Environment today and help us create the best gaming experience on the web!</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                            </div>

                        </div>
                    </div>
                    <div id="team" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-xl text-5xl font-light tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">The team</h2>
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
