import React from 'react';
import styled from 'styled-components';
import logo from '../images/replate-white.svg';
<<<<<<< HEAD:replate/src/components/Navigation.js
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Header = styled.header`
=======
import { Link } from 'react-router-dom';

const Heading = styled.header`
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7:replate/src/components/Header.js
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
<<<<<<< HEAD:replate/src/components/Navigation.js
  a{
    
  }
`
const NavMenu = styled.div`
  a{
=======
`
const NavMenu = styled.div`
  a{
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7:replate/src/components/Header.js
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

<<<<<<< HEAD:replate/src/components/Navigation.js
const Navigation = () => {
=======
const Header = () => {
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7:replate/src/components/Header.js
  return (
    <Heading>
      <Nav>
<<<<<<< HEAD:replate/src/components/Navigation.js
        <Link exact to="/"><img src={logo} className="logo" alt="Replate Logo" /></Link>
        <NavMenu>
          <Link exact to="/">Home</Link>
=======
        <Link to=""><img src={logo} className="logo" alt="Replate Logo" /></Link>
        <NavMenu>
          <Link to="">Home</Link>
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7:replate/src/components/Header.js
          <Link to="">About</Link>
          <Link to="/signup">Sign&nbsp;Up</Link>
        </NavMenu>
      </Nav>
    </Heading>
  )
}

export default Header;