import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
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
  return(
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Academy logo"/>
        </LogoLink>
        <Hamburger />
        <Nav>
          <HeaderNavLink to="/courses">
            Courses
          </HeaderNavLink>
          <ButtonLink to="/">
            <Button modifiers={['nav']}> Sign in </Button>
          </ButtonLink>
          <ButtonLink to="/">
            <Button modifiers={['nav','secondary']}> Register </Button>
          </ButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;


//ES7+ React/Redux/React-Native snippets
