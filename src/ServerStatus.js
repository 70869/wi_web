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
                <img src={mcIcon} alt="MC Icon" style={{ width: '2.5rem', height: '2.5rem' }} />
                <p style={{ marginLeft: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>mc.wiredin.gg</p>
            </div>
            <p style={{
                fontSize: '0.875rem',
                color: statusText === 'Offline' ? 'text-red-500' : 'text-green-500',
                marginLeft: 'auto'
            }}>{statusText}</p>
        </div>
    );
    
}

export default ServerStatus;
