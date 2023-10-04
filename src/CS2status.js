import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cs2Icon from './random-files/cs2.png';

function CS2status({ apiKey, serverIP, appId }) {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        axios.get(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${730}`)
            .then(response => {
                setStatus({ players: { online: response.data.response.player_count } });
            })
            .catch(error => {
                console.error('There was an error!', error);
                setStatus({ players: { online: 0 } });
            });
    }, [appId]);

    const isOffline = status === null || status.players === undefined || status.players.online === undefined;


    const statusText = isOffline ? 'Offline' : `${status.players.online} Online`;


    return (
        <div className="bg-opacity-30 bg-black text-white rounded-2xl backdrop-blur-md p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={cs2Icon} alt="CS2 Icon" className="w-10 h-10" />
                <p className="ml-2 text-xl font-bold">{serverIP}</p>
            </div>
            <p className={`text-sm ${statusText === 'Offline' ? 'text-zinc-500' : 'text-customGreen'}`}>{statusText}</p>
        </div>
    );
}

export default CS2status;