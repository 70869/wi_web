import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MinecrafIcon from './images/minecraft_icon.png';
import Banner from './images/minecraft_banner.png';

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
        return <p className="text-zinc-400">Offline</p>;
    }

    return (
        <p className="text-zinc-600">{status.players.online} players</p>
    );
}

function SMineCraft() {
    return (
        <div className="flex flex-col">
            <div className="md:hidden w-80 p-6 rounded-xl shadow-lg bg-zinc-900 bg-opacity-75 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <img className="block mr-2 w-12 h-12" src={MinecrafIcon} alt="mc"></img>
                        <div>
                            <p className="text-lg text-zinc-200">Minecraft</p>
                            <p className="text-zinc-400">mc.wiredin.gg</p>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-sm text-yellow-300 my-0.5">Anarchy Style Survival</p>
                    <p className="text-sm text-yellow-300 my-0.5">Creative World with Plots</p>
                    <p className="text-sm text-yellow-300 my-0.5">Various PVP Modes</p>
                    <p className="text-sm text-yellow-300">Unlock Ranks</p>
                    <p className="inline-flex text-sm text-yellow-300">Experience more with</p>
                    <p className="inline-flex text-sm text-green-400">&nbsp;(turbo)</p>
                </div>
                <div className="flex flex-col pb-2">
                    <div className="outline outline-1 rounded-xl outline-white">
                        <img className="rounded-xl" src={Banner} alt="rectangle"></img>
                    </div>
                </div>
            </div>

            <div className="hidden md:block w-fit h-fit max-w-[33.5rem] p-6 rounded-xl shadow-lg mx-2 bg-zinc-900 bg-opacity-75 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <img className="block mr-2 w-12 h-12" src={MinecrafIcon} alt="mc"></img>
                        <div>
                            <p className="text-lg text-zinc-200">Minecraft</p>
                            <p className="text-zinc-400">mc.wiredin.gg</p>
                        </div>
                    </div>
                    <div className="inline-flex flex-col items-end text-right">
                        <ServerStatusSmall />
                        <p className="text-green-400 text-sm">[TST ENV]</p>
                    </div>
                </div>
                <div className="flex flex-col pt-4 pb-4">
                    <div className="outline outline-1 rounded-xl outline-white ">
                        <img className="rounded-xl" src={Banner} alt="rectangle"></img>
                    </div>
                </div>
                <p className="flex text-left text-yellow-300 my-0.5">Anarchy Survival Multiplayer:</p>
                <p className="flex text-left text-zinc-300">Embark on a journey of unbridled freedom and survival in our Anarchy
                    SMP world. Forge your path, build, and conquer the challenges that await.</p>
                <p className="flex text-left text-yellow-300 my-0.5">Arena PVP:</p>
                <p className="flex text-left text-zinc-300">Engage in thrilling PVP battles in our Arena PVP realm. Test your combat
                    skills. strategize with your team, and emerge victorious.</p>
                <p className="flex text-left text-yellow-300 my-0.5">Creative World with Plots:</p>
                <p className="flex text-left text-zinc-300">Unleash your creativity in our Creative World. Build your dreams without
                    limits in your designated plot, collaborating with fellow builders and artists.</p>
                <p className="inline-flex text-left text-yellow-300">Unlock Ranks and get more with</p>
                <p className="inline-flex text-green-400 my-0.5">&nbsp;(turbo)</p>
                <p className="flex text-left text-zinc-300">Turbo
                    users enjoy the added benefits of flashy trails, adorable pets, and more
                    plots to express themselves.</p>
            </div>
        </div>
    );
}

export default SMineCraft;
