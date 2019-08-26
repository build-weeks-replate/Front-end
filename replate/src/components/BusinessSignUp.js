import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import styled from 'styled-components';
import icon from '../images/foodPlate.svg';
import { Link } from 'react-router-dom';

const Circle = styled.div`
  background: #FBA01D;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  text-align: center;
`
const CircleNumber = styled.h1`
  position: relative;
  color: #FFF;
  top: 6px;
  font-weight: bold;
`
const Heading = styled.div`
  display: flex;
`
const StyledH1 = styled.h1`
  position: relative;
  top: -18px;
  margin-left: 10px;
`
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1F5C70;

`
const LeftContent = styled.div`
  width: 35%;
  text-align: center;
  margin-right: 10%;
`
const RightContent = styled.div`
  width: 60%;
`
const BackButton = styled.div`
  display: flex;
  justify-content: center;
  // border: 2px solid black;
  margin: 1rem 0;
  width: 100%; 
`

const BusinessSignUp1 = () => {
  return (
    <MainContent className="main">
      <LeftContent>
        <img src={icon} className="dishicon" alt="Dish Icon" />
        <Header size='huge'>DONOR SIGN UP</Header>
        <p>Thank you For your interest in Replate and joining the fight to end hunger.</p>
      </LeftContent>
      <RightContent>
        <Form>
          <Heading>
            <Circle>
              <CircleNumber>1</CircleNumber>
            </Circle>
            <StyledH1>Create Your Account</StyledH1>
          </Heading>
          <Form.Field>
            <label>Company Name</label>
            <input type="text" name="companyName" placeholder='Company Name' />
          </Form.Field>
          <Form.Field>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" placeholder='Phone Number' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" name="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <label>Repeat Password</label>
            <input type="password" name="password" placeholder="Repeat Password" />
          </Form.Field>
          <Link to="/business_part2"><Button type='submit'>Continue</Button></Link>
          <BackButton>
            <Link to="/signup"><Button type="submit">Back</Button></Link>
          </BackButton>
        </Form>
      </RightContent>
    </MainContent>
  )
}

const BusinessSignUp2 = () => {
  return (
    <MainContent className="main">
      <LeftContent>
        <img src={icon} className="dishicon" alt="Dish Icon" />
        <Header size='huge'>DONOR SIGN UP</Header>
        <p>Thank you For your interest in Replate and joining the fight to end hunger.</p>
      </LeftContent>
      <RightContent>
        <Form>
          <Heading>
            <Circle>
              <CircleNumber>2</CircleNumber>
            </Circle>
            <StyledH1>Your Business Location</StyledH1>
          </Heading>
          <Form.Field>
            <label>Office Name</label>
            <input type="text" name="officeName" placeholder='Office Name' />
          </Form.Field>
          <Form.Field>
            <label>Office Address</label>
            <input type="text" name="officeAddress" placeholder='Office Address' />
          </Form.Field>
          <Form.Field>
            <label>Office Email (Optional)</label>
            <input type="email" name="email" placeholder='Office Email' />
          </Form.Field>
          <Button type='submit'>Sign&nbsp;Up</Button>
          <BackButton>
            <Link to="/business_part1"><Button type="submit">Back</Button></Link>
          </BackButton>
        </Form>
      </RightContent>
    </MainContent>
  )
}


export { BusinessSignUp1, BusinessSignUp2 };
