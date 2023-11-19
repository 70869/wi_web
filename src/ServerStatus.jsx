import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mcIcon from './images/mcicon.svg';

function ServerStatus() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        axios.get('https://api.mcsrvstat.us/2/mc.wiredin.gg')
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus({ players: { online: 0 } });
            });
    }, []);

    // Check if status is null or players.online is undefined
    const isOffline = status === null || status.players === undefined || status.players.online === undefined;

    // Determine the status text and its color based on the server's online status
    const statusText = isOffline ? 'Offline' : `${status.players.online} Online`;


    return (
        <div class="bg-zinc-900 bg-opacity-75 backdrop-blur-sm text-white rounded-2xl p-4 flex justify-between items-center">
            <div class="flex items-center">
                <img src={mcIcon} alt="MC Icon" class="w-10 h-10" />
                <p class="ml-2 text-xl font-bold">mc.wiredin.gg</p>
            </div>
            <p class={`text-sm ${statusText === 'Offline' ? 'text-zinc-400' : 'text-emerald-500'}`}>{statusText}</p>
        </div>
    );
}

export default ServerStatus;
