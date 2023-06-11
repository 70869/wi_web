import React from 'react';

function MainContent() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: 'black', color: 'white' }}>
        <div>
          <img src="logo.png" alt="logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
          <h2 style={{ textAlign: 'center' }}>Community-focused brand providing high-performance game servers and secure file hosting services.</h2>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
