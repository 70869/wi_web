import React from "react";
import SMineCraft from "./ServerContentMc";
import SCounterStrike2 from "./ServerContentCs2";

function ServerContent() {
    return (
        <div id="server" class="container py-32">
            <div class="flex justify-center items-center">
                <div class="flex flex-col">
                    <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center leading-tight text-white">Our Servers</h2>
                    <div class="flex flex-col md:flex-row py-4 md:py-8">
                        <div class="grid md:grid-cols-2 gap-4">
                            <SMineCraft />
                            <SCounterStrike2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServerContent;