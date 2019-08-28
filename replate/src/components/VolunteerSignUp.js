import React, { useState, useEffect } from 'react';
import { Field, withFormik, Form } from 'formik';
import { Button, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import handShake from '../images/hands-helping-solid@2x.png';
import axios from 'axios';
import * as Yup from 'yup';

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
  margin-bottom: 8px;
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

const VolunteerSignUp = ({ errors, touched, values, status }) => {
  const [volunteers, setVolunteers] = useState([]);
  console.log(volunteers);

  useEffect(() => {
    if (status) {
      setVolunteers([...volunteers, status]);
    }
  }, [status]);

  return (
    <MainContent>
      <LeftContent>
        <img src={handShake} className="handshakeicon" alt="Hand Shaking Icon" />
        <Header size='huge'>Volunteer Sign Up</Header>
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
          <label>
            Volunteer Name
            <Field
              component="input"
              type="text"
              name="volunteerName"
              placeholder="Volunteer Name"
            />
          </label>
          {touched.volunteerName && errors.volunteerName && (
            <p className="error">{errors.volunteerName}</p>
          )}
          <label>
            Phone Number
            <Field
              component="input"
              type="tel"
              name="volunteerPhone"
              placeholder="Phone Number"
            />
          </label>
          {touched.volunteerPhone && errors.volunteerPhone && (
            <p className="error">{errors.volunteerPhone}</p>
          )}
          <label>
            Email
            <Field
              component="input"
              type="email"
              name="volunteerEmail"
              placeholder="Email"
            />
          </label>
          {touched.volunteerEmail && errors.volunteerEmail && (
            <p className="error">{errors.volunteerEmail}</p>
          )}
          <label>
            Password
            <Field
              component="input"
              type="password"
              name="volunteerPassword"
              placeholder="Password"
            />
          </label>
          {touched.volunteerPassword && errors.volunteerPassword && (
            <p className="error">{errors.volunteerPassword}</p>
          )}
          <label>
            Repeat Password
            <Field
              component="input"
              type="password"
              name="volunteerRepeatPassword"
              placeholder="Repeat Password"
            />
          </label>
          {touched.volunteerRepeatPassword && errors.volunteerRepeatPassword && (
            <p className="error">{errors.volunteerRepeatPassword}</p>
          )}
          <Button>Submit!</Button>
          <BackButton>
            <Link to="/signup"><Button type="submit">Back</Button></Link>
          </BackButton>
          {volunteers.map(volunteer => (
            <p key={volunteer.id}>{volunteer.volunteerName}</p>
          ))
          }
        </Form>
      </RightContent>
    </MainContent>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ volunteerName, volunteerPhone, volunteerEmail, volunteerPassword, volunteerRepeatPassword }) {
    return {
      volunteerName: volunteerName || "",
      volunteerPhone: volunteerPhone || "",
      volunteerEmail: volunteerEmail || "",
      volunteerPassword: volunteerPassword || "",
      volunteerRepeatPassword: volunteerRepeatPassword || ""
    };
  },
  validationSchema: Yup.object().shape({
    volunteerName: Yup.string().required("Please enter your name."),
    volunteerPhone: Yup.number().required("Please enter your phone number."),
    volunteerEmail: Yup.string().required("Please enter a valid email address."),
    volunteerPassword: Yup.string().required("Please enter a password"),
    volunteerRepeatPassword: Yup.string().required("Passwords must match")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const VolunteerSignUpWithFormik = formikHOC(VolunteerSignUp);

export default VolunteerSignUpWithFormik;