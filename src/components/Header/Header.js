import React, {useState} from 'react';
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Hamburger,
  Nav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";

import LogoImg from "../../assets/images/logo.svg"
import Button from "../Button/Button"



const Header = ({ isSecondary }) => {

  const [navOpen, openTheNav] = useState(false);

  function checkIfIsActive(to){
    if(window.location.pathname === to){
      return true;
    } else return false;
  }

  return(
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/" isHeaderActive={checkIfIsActive("/")}>
          <LogoElement src={LogoImg} alt="Academy logo"/>
        </LogoLink>
        <Hamburger
        onClick={() => openTheNav(!navOpen)} />
        <Nav isMobile={navOpen}>
            <HeaderNavLink to="/courses" isActive={checkIfIsActive("/courses")}>
              Courses
            </HeaderNavLink>
            <HeaderNavLink to="/profile" isActive={checkIfIsActive("/profile")}>
              Profile
            </HeaderNavLink>
            <ButtonLink to="/sign-in" isActive={checkIfIsActive("/sign-in")}>
              <Button isNav > Sign in </Button>
            </ButtonLink>
            <ButtonLink to="/register" isActive={checkIfIsActive("/register")}>
              <Button isNav isSecondary  > Register </Button>
            </ButtonLink>
          </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;


//ES7+ React/Redux/React-Native snippets
