import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MinecraftLogl from './random-files/MinecraftLogl.png'
import Rectangle from './random-files/rect.png'

function ServerStatusSmall() {
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
        return <p class="text-zinc-400">Offline</p>;
    }

    return (
        <p class="text-zinc-600">{status.players.online} players</p>
    )
}

function SMineCraft() {
    return (
        <div class="flex flex-col">
            <div class="md:hidden w-80 p-6 rounded-xl shadow-lg" style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)" }}>
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={MinecraftLogl} alt="mc"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Minecraft</p>
                            <p class="text-zinc-400">mc.wiredin.gg</p>
                        </div>
                    </div>
                </div>
                <div class=" my-4">
                    <p class="text-sm text-yellow-300 my-0.5">Anarchy Style Survival</p>
                    <p class="text-sm text-yellow-300 my-0.5">Creative World with Plots</p>
                    <p class="text-sm text-yellow-300 my-0.5">Various PVP Modes</p>
                    <p class="text-sm text-yellow-300">Unlock Ranks</p>
                    <p class="inline-flex text-sm text-yellow-300">Experience more with</p>
                    <p class="inline-flex text-sm text-green-400">&nbsp;(turbo)</p>
                </div>
                <div class="flex flex-col pt-2 pb-2">
                    <div class="outline outline-1 rounded-xl outline-white">
                        <img class="rounded-xl" src={Rectangle} alt="rectangle"></img>
                    </div>
                </div>

            </div>

            <div class="hidden md:block w[33.5rem] h[37rem] max-w-[33.5rem] p-6 rounded-xl shadow-lg mx-2" style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)" }}>
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={MinecraftLogl} alt="mc"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Minecraft</p>
                            <p class="text-zinc-400">mc.wiredin.gg</p>
                        </div>
                    </div>
                    <div class="inline-flex flex-col items-end text-right">
                        <ServerStatusSmall />
                        <p class="text-green-400 text-sm">[TST ENV]</p>
                    </div>
                </div>
                <div class="flex flex-col pt-4 pb-4">
                    <div class="outline outline-1 rounded-xl outline-white ">
                        <img class="rounded-xl" src={Rectangle} alt="rectangle"></img>
                    </div>
                </div>
                <p class="flex text-left text-yellow-300 my-0.5">Anarchy Survival Multiplayer:</p>
                <p class="flex text-left text-zinc-300">Embark on a journey of unbridled freedom and survival in our Anarchy
                    SMP world. Forge your path, build, and conquer the challenges that await.</p>
                <p class="flex text-left text-yellow-300 my-0.5">Arena PVP:</p>
                <p class="flex text-left text-zinc-300">Engage in thrilling PVP battles in our Arena PVP realm. Test your combat
                    skills. strategize with your team, and emerge victorious.</p>
                <p class="flex text-left text-yellow-300 my-0.5">Creative World with Plots:</p>
                <p class="flex text-left text-zinc-300">Unleash your creativity in our Creative World. Build your dreams without
                    limits in your designated plot, collaborating with fellow builders and artists.</p>
                <p class="inline-flex text-left text-yellow-300">Unlock Ranks and get more with</p>
                <p class="inline-flex text-green-400 my-0.5">&nbsp;(turbo)</p>
                <p class="flex text-left text-zinc-300">Turbo
                    users enjoy the added benefits of flashy trails, adorable pets. and more
                    plots to express themselves.</p>
            </div>
        </div>
    );
}

export default SMineCraft;