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
export const LogoLink = styled(Link)`

    ${props => props.isHeaderActive === true &&`
        display: block;
        padding: 5px;
        border-bottom: 5px solid ${colors.secondary};
    `}
`;


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
    display: none;


    ${props => props.isMobile === true && `
      display: flex;
      flex-direction: column;

      position: absolute;
      top: 80px;
      right: 0px;
      width: 100%;
      border-top: 2px solid ${colors.bgPrimary};
      text-align: center;
    `}

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
    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: ${colors.overlayPrimary};
      filter: drop-shadow(0 3px 3px ${colors.textPrimary});

    }

    @media (${breakpoints.desktop}){
      padding: 0px;
      letter-spacing: 1px;
      margin-right: 48px;
      transition: text-shadow 0.3s ease-out;
      background-color: transparent;
      position: relative;
      cursor: pointer;

      &:hover {
          background-color: transparent;
          text-shadow: 0.7px 0 0 ${colors.bgSecondary};
      }

      ${props => props.isActive === true &&`
          color: ${colors.secondary};
          border-style:  none none solid none ;
          border-color: th.$colorSecondary;
      `}
    }

    ${props => props.isActive === true &&`
        color: ${colors.primary};
        font-weight: 700;
    `}


`;

export const ButtonLink = styled(Link)`
    @media(${breakpoints.maxDesktop}){
      & button{
        background-color: ${colors.overlaySecondary};
        color: ${colors.secondary};

          &:hover{
            background-color: ${colors.overlayPrimary};
          }
        }

      ${props => props.isActive === true &&`
        & button{
          color: ${colors.primary};
          font-weight: 700;
        }
      `}
    }

    @media (${breakpoints.desktop}){
      display: inline-block;
      margin-right: 24px;


      &:last-child {
          margin-right: 0;
      }

      ${props => props.isActive === true &&`
        & button{
          filter: drop-shadow(0 7px 3px ${colors.black});
        }
      `}
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

/////////////////////////////////////////////////
    @media (${breakpoints.maxDesktop}){
        color: ${colors.secondary};
        background-color: ${colors.overlaySecondary};

        &:Hover{
            background-color: ${colors.primary};
            transition: all 0.4s ease-in-out;
            filter: drop-shadow(0 0px 0px transparent);
        }
    }
}*/

/*&-Active{
    border-style:  none none solid none ;
    border-color: th.$colorSecondary;
}*/
