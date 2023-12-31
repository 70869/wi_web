import React from 'react';
import cs2icon from './images/cs2.png'
import nuke from './images/nuke.png'
import CS2small from './CS2small';


function SCounterStrike2() {
    return (
        <div class="flex flex-col">
            <div class="md:hidden w-80 p-6 rounded-xl shadow-lg bg-zinc-900 bg-opacity-75 backdrop-blur-sm">
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={cs2icon} alt="cs2"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Counter-Strike 2 </p>
                            <p class="text-zinc-400">cs.wiredin.gg</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col pt-4">
                    <div class="outline outline-1 rounded-xl outline-white overflow-hidden">
                        <img class="rounded-xl" src={nuke} alt="map"></img>
                    </div>
                </div>
            </div>
            <div class="hidden md:block w-fit h-fit max-w-[33.5rem] p-6 rounded-xl shadow-lg mx-2 bg-zinc-900 bg-opacity-75 backdrop-blur-sm">
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={cs2icon} alt="cs2"></img>
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