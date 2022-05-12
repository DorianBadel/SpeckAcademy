import React, {useState} from 'react';
import {
  Header as HeaderWrapper, 
  HeaderInner, 
  LogoLink, 
  LogoImg as LogoElement, 
  Hamburger, 
  Nav, 
  HeaderNavLink, 
  ButtonLink
} from "./HeaderStyle";

import LogoImg from "../../assets/images/logo.svg"
import Button from "../Button/Button"



const Header = ({ isSecondary }) => {

  const [navOpen, openTheNav] = useState(true);
  
  window.addEventListener('load', function (){
    widthCheck();
  });

  window.addEventListener('resize', function (){
    widthCheck();    
  });

  function widthCheck(){
    if(window.innerWidth > 1024){openTheNav(true); return true;}
    else{ openTheNav(false); return false; }
  }




  return(
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Academy logo"/>
        </LogoLink>
        <Hamburger
        onClick={() => openTheNav(!navOpen)} />
        {navOpen  &&
          <Nav>
            <HeaderNavLink to="/courses" >
              Courses
            </HeaderNavLink>
            <ButtonLink to="/sign-in" >
              <Button isNav> Sign in </Button>
            </ButtonLink>
            <ButtonLink to="/register">
              <Button isNav isSecondary doStuff={widthCheck}> Register </Button>
            </ButtonLink>
          </Nav> 
        }
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;


//ES7+ React/Redux/React-Native snippets
