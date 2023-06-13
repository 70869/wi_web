import React from 'react';
import bg from './images/bgblur.png'
import Header from './Header';
import picture from "./images/logo.png";
import Footer from "./Footer";

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
                                <h1 class="max-w-xl mx-auto text-start text-7xl font-bold tracking-tight text-gray-300 leading-normal">(wired-in)</h1>
                                <p class="max-w-xl text-start text-gray-300 text-lg mb-4 tracking-wide">The next step for game servers and file hosting.</p>
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
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-zinc-600 dark:text-zinc-400">placeholder text.</p>
                            </div>
                        </div>
                    </div>
                    <div id="server" class="container mx-auto px-32 py-32" >
                        <div class="flex flex-row justify-center items-center">
                            <div class="flex flex-col mx-auto">
                                <h2 class="max-w-2xl text-5xl font-extrabold tracking-tight text-center text-zinc-800 dark:text-zinc-200 leading-tight">High quality game servers</h2>
                                <p class="max-w-xl text-start mt-6 text-xl leading-6 text-zinc-600 dark:text-zinc-400">yep.</p>
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
