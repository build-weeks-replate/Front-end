import React from 'react';
import logo from '../images/replate-rgb.svg';
import icon from '../images/foodPlate.svg';
import styled from 'styled-components';
import { Button, Card, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomePage = () => {
  return (
    <MainContent>
      <img src={logo} className="logoRGB" alt="Replate Logo RGB" />
      <h3>HELP END HUNGER IN YOUR COMMUNITY. SIGN UP FOR REPLATE TO JOIN THE FIGHT.</h3>
      <Card.Group>
        <Card as={Link} to="/business_part1" className="card">
          <Card.Content>
            <img src={icon} className="icon-home" alt="Dish Icon" />
            <Card.Header>I'M A BUSINESS</Card.Header>
            <Button type="Submit">I want to donate food</Button>
          </Card.Content>
        </Card>
        <Card as={Link} to="/volunteer" className="card">
          <Card.Content>
            <Icon name='handshake' className="icon-handshake" size="massive" />
            <Card.Header>I'M A VOLUNTEER</Card.Header>
            <Button type="submit">I want to receive donations</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </MainContent>
  )
}

export default HomePage;