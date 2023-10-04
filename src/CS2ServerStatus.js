import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cs2Icon from './random-files/cs2.png'; // CS2 logo image

function CSStatus() {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const apiKey = 'B1743EF5E55BA2C323B1A7D0045E3370'; // Replace with your Steam Web API key
        const serverIP = 'cs.wiredin.gg';
        const appId = '730'; 

        axios.get(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${730}`)
            .then(response => {
                setStatus({ players: { online: response.data.response.player_count } });
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
    const statusTextColor = isOffline ? 'text-red-500' : 'text-green-500';

    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.308)',
            color: 'white',
            borderRadius: '10px',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={cs2Icon} alt="CS2 Icon" style={{ width: '2.5rem', height: '2.5rem' }} />
                <p style={{ marginLeft: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>cs.wiredin.gg</p>
            </div>
            <p style={{
                fontSize: '0.875rem',
                color: statusText === 'Offline' ? 'text-red-500' : 'text-green-500',
                marginLeft: 'auto'
            }}>{statusText}</p>
        </div>
    );
}

export default CSStatus;
