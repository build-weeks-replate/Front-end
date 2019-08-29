import React, { useState } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const BusinessLogin = (props) => {
    const axiosAuth = () => {
        axios.post("https://bw-replate.herokuapp.com/api/auth/business/login", userCreds)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push("/business_dashboard");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const [userCreds, setUserCreds] = useState({
        username: "",
        password: ""
    });

    const login = (userCreds) => {
        axiosAuth("register", userCreds);
    }
    const handleChange = e => {
        setUserCreds({
            ...userCreds,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        login(userCreds);
    }
    return (
      <MainContent>
        <Header size='huge'>Business Log In</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" type="text" name="username" value={userCreds.username} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" name="password" value={userCreds.password} onChange={handleChange} />
          </Form.Field>
          <Buttons>
            <Link to="/business_signup"><Button className="btnBack">Back</Button></Link>    
            <Button type="submit">Log&nbsp;In</Button>
          </Buttons>
          <LoginLink>
            <p>Don't have a business account? <Link to="/business_signup">Sign Up</Link></p>
          </LoginLink>
        </Form>
      </MainContent>
    );
}

export default BusinessLogin;