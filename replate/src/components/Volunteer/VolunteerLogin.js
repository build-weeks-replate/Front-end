import React, { useState } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';

const MainContent = styled.div`
  width: 60%;
  margin: 0 auto;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
const LoginLink = styled.div`
  text-align: right;
  margin-top: 10px;
`

const VolunteerLogin = (props) => {
  const [credentials, setCredentials] = useState({});
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('https://bw-replate.herokuapp.com/api/auth/volunteer/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/volunteer_dashboard');
      })
  }
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }
  return (
    <MainContent>
      <Header size='huge'>Volunteer Log In</Header>
      <Form onSubmit={login}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" type="text" name="username" value={credentials.username} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" name="password" value={credentials.password} onChange={handleChange} />
        </Form.Field>
        <Buttons>
          <Link to="/volunteer_signup"><Button className="btnBack">Back</Button></Link>
          <Button type="submit">Log&nbsp;In</Button>
        </Buttons>
        <LoginLink>
          <p>Don't have a volunteer account? <Link to="/volunteer_signup">Sign Up</Link></p>
        </LoginLink>
      </Form>
    </MainContent>
  )
}

export default VolunteerLogin;