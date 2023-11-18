import React from 'react';
import cs2logl from './random-files/cs2.png'
import nuke from './random-files/nuke.png'
import CS2small from './CS2small';


function SCounterStrike2() {
    return (
        <div class="flex flex-col">
            <div class="md:hidden w-80 p-6 rounded-xl shadow-lg" style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={cs2logl} alt="cs2"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Counter-Strike 2 </p>
                            <p class="text-zinc-400">cs.wiredin.gg</p>
                            <p class="text-zinc-400">[coming soon]</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col pt-4">
                    <div class="outline outline-1 rounded-xl outline-white overflow-hidden">
                        <img class="rounded-xl" src={nuke} alt="map"></img>
                    </div>
                </div>
            </div>
            <div class="hidden md:block w[33.5rem] h[37rem] max-w-[33.5rem] p-6 rounded-xl shadow-lg mx-2" style={{ backgroundColor: "rgba(27, 27, 27, 0.66)", backdropFilter: "blur(10px)"}}>
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={cs2logl} alt="cs2"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Counter-Strike 2</p>
                            <p class="text-zinc-400">cs.wiredin.gg</p>
                        </div>
                    </div>
                    <div class="inline-flex flex-col items-end text-right">
                    <CS2small apiKey="B1743EF5E55BA2C323B1A7D0045E3370" serverIP="cs.wiredin.gg" appId="730" />
                        <p class="text-green-400 text-sm">[TST ENV]</p>
                    </div>
                </div>
                <div class="flex flex-col pt-4">
                    <div class="outline outline-1 rounded-xl outline-white overflow-hidden">
                        <img class="rounded-xl" src={nuke} alt="map"></img>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SCounterStrike2;