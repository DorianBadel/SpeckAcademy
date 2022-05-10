import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {colors, breakpoints} from "../../lib/style/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg"

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  ${(props) => props.isSecondary && `
        position:initial;
        background-color: ${colors.textPrimary};
  `}

    @media (${breakpoints.desktop}) {
        padding: 32px 0;
    }
`;

export const HeaderInner = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (${breakpoints.desktop}){
            width: 960px;
            margin: 0 auto;
            padding: 32px 0;
        }

        @media (${breakpoints.desktopLarge}){ width: 1270px; }
`;
export const LogoLink = styled(Link)``;


export const LogoImg = styled.img`
    width: 140px;
`;

export const Hamburger = styled(HamburgerIcon)`
    width: 30px;
    height: auto;

    @media (${breakpoints.desktop}){ display: none; }

    path{ fill: ${colors.bgPrimary}; }

    
`;

export const Nav = styled.nav`
    //display: none;
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 80px;
    right: 0px;
    width: 100%;
    border-top: 2px solid ${colors.bgPrimary};
    text-align: center;

    @media (${breakpoints.desktop}){ 
        display: inline-flex;
        flex-direction: initial;
        align-items: center;
        top: 50px;

        right: 30px;

        width: auto;
        background: none;
        border-top: none;
        text-align: left;
    }

`;

export const HeaderNavLink = styled(NavLink)`
    color: ${colors.secondary};
    padding: 10px;
    background-color: ${colors.overlaySecondary};
    

    @media (${breakpoints.desktop}){ 
        padding: 0px;
        letter-spacing: 1px;
        margin-right: 48px;
        transition: text-shadow 0.3s ease-out;
        background-color: transparent;
        position: relative;
        cursor: pointer;
    }

    &:hover {
        text-shadow: 0.7px 0 0 ${colors.bgSecondary};
    }

    &.Header-Active{
        color: ${colors.primary};
        border-color: ${colors.primary};

    }
`;

export const ButtonLink = styled(Link)`
    border-radius: 0px;
    background-color: transparent;

    @media (${breakpoints.desktop}){ 
        display: inline-block;
        margin-right: 24px;
    }

    & .Button{
        

        @media (${breakpoints.maxDesktop}){ 
            color: ${colors.secondary};
            background-color: ${colors.overlaySecondary};
        }
    }
    

    &:last-child {
        margin-right: 0;
    }
`;


/*&-LogoLink{
    padding: 7px 20px 7px 20px;
    background-color: th.$colorPrimary;
    border-radius: 30px;

    &.Header-Active{
        padding: 0px;
        background-color: #ffffff00;
        border-radius: 0px;
    }
}*/

/*&-Active{
    border-style:  none none solid none ;
    border-color: th.$colorSecondary;
}*/
