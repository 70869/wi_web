import React from 'react';
import cs2Icon from './random-files/cs2.png';

function CS2status({ serverIP }) {
  return (
    <div className="bg-opacity-30 bg-black text-white rounded-2xl backdrop-blur-md p-4 flex justify-between items-center">
      <div className="flex items-center">
      <img src={cs2Icon} alt="CS2 Icon" className="w-10 h-10" />
        <p className="ml-2 text-xl font-bold">{serverIP}</p>
        <p class="ml- text-xl font-bold text-green-400">In active development.</p>
      </div>
      
    </div>
  );
}

export default CS2status;
