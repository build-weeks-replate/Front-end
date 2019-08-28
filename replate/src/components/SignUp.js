import React from 'react';
import logo from '../images/replate-rgb.svg';
import foodPlate from '../images/foodPlate.svg';
import handShake from '../images/hands-helping-solid@2x.png';
import styled from 'styled-components';
import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h3`
  color: #1F5C70;
  margin-bottom: 30px !important;
  text-align: center;
`

const HomePage = () => {
  return (
    <MainContent>
      <img src={logo} className="logoRGB" alt="Replate Logo RGB" />
      <Heading>HELP END HUNGER IN YOUR COMMUNITY. SIGN UP FOR REPLATE TO JOIN THE FIGHT.</Heading>
      <Card.Group>
        <Card as={Link} to="/business_part1" className="card">
          <Card.Content>
            <img src={foodPlate} className="icon-foodplate" alt="Dish Icon" />
            <Card.Header>I'M A BUSINESS</Card.Header>
            <Button type="Submit">I want to donate food</Button>
          </Card.Content>
        </Card>
        <Card as={Link} to="/volunteer" className="card">
          <Card.Content>
            <img src={handShake} className="icon-handshake" alt="Hand Shaking Icon" />
            <Card.Header>I'M A VOLUNTEER</Card.Header>
            <Button type="submit">I want to receive donations</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </MainContent>
  )
}

export default HomePage;