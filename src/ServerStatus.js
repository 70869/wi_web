import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mcIcon from './images/mcicon.svg';

function ServerStatus() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        axios.get('https://api.mcsrvstat.us/2/mc.hypixel.net')
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const loadingStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.171)',
        color: 'white',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px', // or whatever height you prefer
        fontSize: '1.5rem', // or whatever font size you prefer
    };

    if (status === null || status.players === undefined) {
        return <div style={loadingStyle}>Loading...</div>;
    }

    return (
        <div class="inline-flex justify-between items-center w-full p-4"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.308)',
                color: 'white',
                borderRadius: '10px',
                backdropFilter: 'blur(20px)'
            }}>
            <img src={mcIcon} alt="MC Icon" class="w-10 h-10" />
            <p class="text-lg font-bold text-customGreen">mc.wiredin.gg</p>
            <p class="mt-1 text-sm text-zinc-300">{status.players.online} players online </p>
        </div>
    );
}

export default ServerStatus;