import React from 'react';
import {Link} from 'react-router-dom';

//Styled
import {
  LandingInner,
  LandingImg as Img,
  LandingOverlayContainer,
  LandingOverlayPrimary,
  LandingOverlaySecondary,
  LandingContent,
  LandingContentInner,
  LandingTitle,
  LandingSubtitle
} from  './LandingStyle';

//Components
import Button from '../Button/Button';

//Images
import LandingImg from '../../assets/images/landing.jpg';

const Landing = () => {
  return (
    <LandingInner>
        <Img src={LandingImg} alt="Landing_img"/>
        <LandingOverlayContainer>
          <LandingOverlayPrimary/>
          <LandingOverlaySecondary/>
        </LandingOverlayContainer>
        <LandingContent>
          <LandingContentInner>
            <LandingTitle> Learn what matters, Speck Academy powered by FOI </LandingTitle>
            <LandingSubtitle> Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT practice. </LandingSubtitle>
            <Link to="/courses"><Button modifiers={['landing']}> Explore Courses </Button></Link>
          </LandingContentInner>
        </LandingContent>
    </LandingInner>
  );
};

export default Landing;


//ES7+ React/Redux/React-Native snippets
