import React from 'react';
import logo from './images/logo.png';
import bg from './images/bgblur.png'
import Header from './Header.js';
import Footer from './Footer.js';

function MainContent() {
    return (
        <div class="flex flex-col relative min-h-screen">
            <div class="absolute top-0 left-0 h-full w-full bg-center bg-no-repeat bg-cover z-[-1]"
                style={{ backgroundImage: "url(" + bg + ")" }}
            />
            <Header />
            <main class="flex flex-col flex-1 justify-center items-center mx-auto mt-16 xl:flex-row xl:space-x-24 xl:items-start xl:justify-start">
                <div class="overflow-hidden bg-white bg-opacity-30 rounded-lg shadow-lg">
                    <div class="relative max-w-xl px-8 mx-auto sm:px-6 lg:max-w-7xl items-center">
                        <div class="items-center">
                            <img src={logo} alt="(wired-in) logo" class="mx-auto max-w-[75%]" />
                            <p class="text-center text-white text-md font-semibold mb-4">Coming this Summer</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainContent;
