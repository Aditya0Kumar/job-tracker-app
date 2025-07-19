import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.png';
import Wrapper from '../assets/wrappers/ErrorPage';

export default function Error() {
  return (
    <Wrapper className='full-page'>
      <div style={{ textAlign: 'center' }}>
        <img src={img} alt="404 not found" style={{ maxWidth: '400px', width: '100%', marginBottom: '2rem' }} />
        <Link to='/' style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 2rem',
          background: '#2cb1bc',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Back Home
        </Link>
      </div>
    </Wrapper>
  )
}
