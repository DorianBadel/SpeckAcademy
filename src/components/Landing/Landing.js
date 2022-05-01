import React from 'react';
import './Landing.scss';
import {Link} from 'react-router-dom';
//Components
import Button from '../Button/Button';
//Images
import LandingImg from '../../assets/images/landing.jpg';

const Landing = () => {
  return (
    <div class="Landing">
        <img class="Landing-Img" src={LandingImg} alt="Landing_img"/>
        <div class="Landing-Overlay">
          <div class="Landing-OverlayPrimary"></div>
          <div class="Landing-OverlaySecondary"></div>
        </div>
        <div class="Landing-Content">
          <div class="Landing-ContentInner">
            <h1 class="Landing-Title"> Learn what matters, Speck Academy powered by FOI </h1>
            <p class="Landing-Subtitle"> Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT practice. </p>
            <Link to="/courses"><Button modifiers={['landing']}> Explore Courses </Button></Link>
          </div>
        </div>
    </div>
  );
};

export default Landing;


//ES7+ React/Redux/React-Native snippets
