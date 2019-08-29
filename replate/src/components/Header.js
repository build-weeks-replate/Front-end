import React from 'react';
import styled from 'styled-components';
import logo from '../images/replate-white.svg';
import { Link } from 'react-router-dom';

const Heading = styled.header`
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
  height: 100px;
`
const NavMenu = styled.div`
  a{
    color: #FFF;
    font-weight: bold;
    font-size: 1.4em;
    padding: 39px;
    &:hover{
      color: #FFF;
      background: #FBA01D;
    }
  }
`

const Header = () => {
  return (
    <Heading>
      <Nav>
        <Link to=""><img src={logo} className="logo" alt="Replate Logo" /></Link>
        <NavMenu className="nav">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="/signup">Sign&nbsp;Up</Link>
        </NavMenu>
      </Nav>
    </Heading>
  )
}

export default Header;