import React from 'react';
import cs2logl from './random-files/cs2.png'
import nuke from './random-files/nuke.png'

function CardTest2() {
    return (
        <div class="flex flex-col">
            <div class="md:hidden w-80 bg-zinc-800 p-6 rounded-xl shadow-lg">
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2  w-12 h-12" src={cs2logl} alt="cs2"></img>
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
            <div class="hidden md:block w[33.5rem] h[37rem] max-w-[33.5rem] bg-zinc-800 p-6 rounded-xl shadow-lg mx-2">
                <div class="flex items-center justify-between">
                    <div class="flex">
                        <img class="block mr-2 w-12 h-12" src={cs2logl} alt="cs2"></img>
                        <div>
                            <p class="text-lg text-zinc-200">Counter-Strike 2</p>
                            <p class="text-zinc-400">cs.wiredin.gg</p>
                        </div>
                    </div>
                    <div class="inline-flex flex-col items-end text-right">
                        <p class="text-zinc-600">[coming soon]</p>
                        <p></p>
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

export default CardTest2;