import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mcIcon from '/assets/images/mcicon.svg';
import hitSound from '../../assets/sounds/hitSound.mp3'; 

function ServerStatus() {
  const [status, setStatus] = useState(null);
  const [hit, setHit] = useState(false);

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

  const isOffline = status === null || status.players === undefined || status.players.online === undefined;
  const statusText = isOffline ? 'Offline' : `${status.players.online} Online`;

  const handleHit = () => {
    setHit(true);

    // Play the hit sound
    const audio = new Audio(hitSound);
    audio.play();

    setTimeout(() => {
      setHit(false);
    }, 500); // You can adjust the duration as needed
  };

  return (
    <div
      className={`hitable ${hit ? 'hit' : ''}`}
      onClick={handleHit}
    >
      <div className={`bg-zinc-900 bg-opacity-75 backdrop-blur-sm text-white rounded-2xl p-4 flex justify-between items-center ${hit ? 'hit' : ''}`}>
        <div className="flex items-center">
          <img src={mcIcon} alt="MC Icon" className="w-10 h-10" />
          <p className="ml-2 text-xl font-bold">mc.wiredin.gg</p>
        </div>
        <p className={`text-sm ${statusText === 'Offline' ? 'text-zinc-400' : 'text-emerald-500'}`}>{statusText}</p>
      </div>
    </div>
  );
}

export default ServerStatus;
 
