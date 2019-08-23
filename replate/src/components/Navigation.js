import React from 'react';
import styled from 'styled-components';
import logo from '../images/replate-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
    margin-left: 30px;
    color: #FFF;
    font-weight: bold;
    font-size: 1.4em;
  }
`
const NavMenu = styled.div`
border: 1px solid red;
  a{
    padding: 29px 12px;
    
    &:hover{
      color: #FFF;
      background: #FBA01C;
    }
  }
`



const Navigation = () => {
  return(
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