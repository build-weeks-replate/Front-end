import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Button } from 'semantic-ui-react';
import logo from '../images/replate-rgb.svg';

const Sidebar = (props) => {
  return (
    <Menu right>
      <Link to=""><img src={logo} className="logo-sidebar" alt="Replate Logo RGB" /></Link>
      <Link to="/signup" className="menu-item"><Button type='submit'>Sign&nbsp;Up</Button></Link>
      <Link to="" className="menu-item">Home</Link>
      <Link to="" className="menu-item">About</Link>
      <Link to="" className="menu-item">My&nbsp;Account</Link>
    </Menu>
  )
}

export default Sidebar;