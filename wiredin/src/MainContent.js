import React from 'react';
import logo from './images/logo.png';
import Header from './Header.js'; 
import Footer from './Footer.js'


function MainContent() {
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'url(https://cdn.discordapp.com/attachments/1075065323860009020/1117415687963549858/2023-06-09_17.40.02.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backdropFilter: 'blur(20x)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <main style={{ 
        flex: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.404)', 
          padding: '50px', 
          borderRadius: '25px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <img src={logo} alt="(wired-in) logo" style={{ maxWidth: '100%' }} />
          <h2 style={{ color: 'white' }}>Autumn 23</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainContent;
