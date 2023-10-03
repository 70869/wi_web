import React from "react";

function Team() {
    return (
        <div id="team" class="container mx-auto py-32">
            <div class="flex justify-center items-center">
                <div class="flex flex-col">
                    <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight text-white">The Team</h2>
                    <div class="flex flex-col md:flex-row py-4 md:py-8">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 1 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/1004937727172673578/cd32387915c2a2826eb5374315c44d4f.png?size=2048&width=0&height=256" alt="etebong"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">Bong</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Founder</p>


                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 2 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/162811806543249408/2b10ac882c5ccb2fc8f10485902dbd49.png?size=2048&width=0&height=256" alt="xxalem"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">xxalem</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Creative Director</p>
                                    </div>

                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 3 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/229400859287617536/9103e9453957a7011af58a9bf8a695bd.png?size=2048&width=0&height=256" alt="gavin"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">Gavin</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 4 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/257689851216789514/a_3e117317b87a141111c4b398ff674ca3.gif?size=2048&width=0&height=256" alt="soda"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">soda</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Admin</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 5 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/359199438759002112/f46ce7173faad7ef47d1e7201f810600.png?size=2048&width=0&height=256" alt="bobby jones"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">Lyde</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">3D Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 6 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/126742625221869568/7a4441f0f9e0d5dbc39a6ebe523092fd.png?size=2048&width=0&height=256" alt="grace"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">shie</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg break-words">Lead Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;