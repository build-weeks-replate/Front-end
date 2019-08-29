import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerLogin = (props) => {
    const axiosAuth = () => {
        axios.post(`https://bw-replate.herokuapp.com/api/auth/volunteer/login`, userCreds)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.history.push("/volunteer_dashboard");
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
        <div>
            <Link to="/dashboard">Dashboard</Link>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder="Username" type="text" name="username" value={userCreds.username} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" type="password" name="password" value={userCreds.password} onChange={handleChange} />
                </Form.Field>
                <Button type="submit">Log&nbsp;In</Button>
            </Form>
        </div>
    );
}

export default VolunteerLogin;