import React from 'react';
import logo from '../assets/images/logo.png';

export default function Logo() {
  return (
    <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
      <img src={logo} alt="job tracker logo" className="logo" style={{ height: '50px' }} />
      {/* <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
        Job Tracker
      </span> */}
    </div>
  )
}

