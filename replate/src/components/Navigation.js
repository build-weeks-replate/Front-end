import React from 'react';
import styled from 'styled-components';
import logo from '../images/replate-white.svg';

const Header = styled.header`
  top: 0;
  width: 100%;
  background: #1F5C70;
  z-index: 999;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  height: 80px;
  a{
    color: #FFF;
    font-weight: bold;
    font-size: 1.4em;
    padding: 29px;
  }
`
const NavMenu = styled.div`
  a{
    &:hover{
      color: #FFF;
      background: #FBA01C;
    }
  }
`

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <a href="#"><img src={logo} className="logo" alt="Replate Logo" /></a>
        <NavMenu>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Sign&nbsp;Up</a>
        </NavMenu>
      </Nav>
    </Header>
  )
}

export default Navigation;