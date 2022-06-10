import styled from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const LandingInner = styled.div`
    height:100vh;
    position: relative;


`;

export const LandingImg = styled.img`
    height:100%;
    width:100%;
    object-fit: cover;
`;

export const LandingOverlayContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
`;

export const LandingOverlayPrimary = styled.div`
    height: 100%;
    width:27%;
    position:absolute;
    left:0;

    background-color: ${colors.overlayPrimary};
`;

export const LandingOverlaySecondary = styled.div`
    height:100%;
    width:73%;
    position:absolute;
    right:0;

    background: ${colors.overlaySecondary};
`;

export const LandingContent = styled.div`
    position: absolute;
    top: 0;
    left: calc((100% - 1300px) / 2);
    width: 1300px;
    display: flex;
    height: 100%;
    align-items: center;

`;

export const LandingContentInner = styled.div`
    margin: 0 auto;

    @media (${breakpoints.tabletSmall}){
      width: 450px;
    }

    @media (${breakpoints.tablet}){
      width: 550px;
    }

    @media (${breakpoints.desktop}){
      width: 960px;
    }

    @media (${breakpoints.desktopLarge}){
      width: 1280px;
    }

`;

export const LandingTitle = styled.h1`
    color: ${colors.secondary}; //might be off
    font-size: 56px;
    width: 550px;
    margin-bottom: 24px;

    @media (${breakpoints.tabletSmall}){
      width: 450px;
      font-size: 56px;
    }

`;

export const LandingSubtitle = styled.p`
    color: ${colors.secondary}; //might be off
    font-size: 16px;
    width: 440px;
    margin-bottom: 48px;

    @media (${breakpoints.tabletSmall}){
      font-size: 16;
    }
`;
