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
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://media.discordapp.net/attachments/1117244918243536956/1117245240680648734/msn-icon-17660.png" alt="etebong"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">etebong</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 2 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://cdn.discordapp.com/avatars/162811806543249408/8c3390b5ccc926b39e123c0415884d91.png" alt="xxalem"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">xxalem</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Creative Director</p>
                                    </div>

                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 3 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://media.discordapp.net/attachments/1117244918243536956/1117245121910558771/423423.png" alt="gavin"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">gavin</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 4 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://media.discordapp.net/attachments/1117244918243536956/1117245123667972106/white.png" alt="soda"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">soda</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">Community Lead</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 5 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://media.discordapp.net/attachments/1117244918243536956/1117245121608564813/999.png" alt="bobby jones"></img>
                                <div class="text-center space-y-2">
                                    <div class="space-y-0.5 text-left">
                                        <p class="text-lg md:text-2xl text-zinc-200 font-semibold">BlueMercy</p>
                                        <p class="text-zinc-400 font-medium text-base md:text-lg">3D Artist</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex bg-zinc-800 p-8 rounded-xl shadow-lg" /** 6 */ style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                                <img class="block mr-4 h-24 w-24 rounded-full" src="https://media.discordapp.net/attachments/1117244918243536956/1117245183017369640/o08.png" alt="grace"></img>
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