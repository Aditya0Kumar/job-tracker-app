import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import main from '../assets/images/main.jpg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

function Landing() {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to='/' />}
      
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">

          <div className="info">
            <h1>Job Tracking App</h1>
            <h4>Track and manage all your job applications in one place.</h4>
            <p>
              Feeling overwhelmed by the job hunt? You’re not alone.
              I built this app to help bring some clarity and structure to the chaotic process of applying for jobs. It’s tough out there — rejections, ghosting, endless forms — but staying organized can make it a little less daunting.
              This tracker is for people like us — determined, hopeful, and trying to stay focused despite the uncertainty. Every application you send is a step forward. Keep going.
              <strong>"Success is the sum of small efforts, repeated day in and day out." - Robert Collier</strong>
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>

          <img src={main} alt="job hunt" className='img main-img'></img>

        </div>
      </Wrapper>
    </>
  );
}

export default Landing 