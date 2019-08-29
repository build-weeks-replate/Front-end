import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {

    });
  }

  render() {
    return (
      <div>
        <button onMouseOver={this.showMenu}>Show menu</button>
        {
          this.state.showMenu ? (
            <div className="menu">
              <button> Business Log In </button>
              <button> Donar Log In </button>
            </div>
          ) : null}
      </div>
    );
  }
}

export default Sidebar;