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
            });
    }, []);

    const loadingStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.171)',
        color: 'white',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        display: '',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px', // or whatever height you prefer
        fontSize: '1.5rem', // or whatever font size you prefer
    };

    if (status === null || status.players === undefined) {
        return <div style={loadingStyle}>Server Offline</div>;
    }

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
                <p style={{ marginLeft: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', }}>mc.wiredin.gg</p>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--zinc-300)', marginLeft: 'auto' }}>{status.players.online} Players Online</p>
        </div>
        
    );
    
}

export default ServerStatus;