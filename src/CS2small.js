import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CS2small({ apiKey, serverIP, appId }) {
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

    if (status === null || status.players === undefined) {
        return <p className="text-zinc-400">Offline</p>;
    }

    const { online } = status.players;
    const maxPlayers = 10; // Set the maximum number of players here

    return (
        <p className="text-zinc-200">{online}/{maxPlayers} players</p>
    );
}


export default CS2small;
