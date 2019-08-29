import React, { useState } from 'react';
import { Icon, Card, Button, Modal, Form, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';

const MainContent = styled.div`
  display: flex;
  color: #1F5C70;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledH1 = styled.h1`
  display: flex;
  color: #1F5C70;
  font-size: 3rem; 
  justify-content: center;
`
const Add = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
const BottomContent = styled.div`
  color: #1F5C70;
  margin-top: 20px;
`
const Calendar = styled.div`
  color: #1F5C70;
  width: 100%
  margin-top: 20px;
`
const Heading = styled.h3`
  background: #1F5C70;
  border-bottom: 3px solid #FBA01D!important;
  color: #FFF;
  margin: 0;
  padding: 10px;
  width: 100%;
`
const Donation = styled.div`
  display: flex;
  margin: 10px;
`
const BusinessDashboard = (props) => {
  const axiosAuth = (token) => {
    axios.post(`https://bw-replate.herokuapp.com/api/food`, token)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push("/business_dashboard");
      })
      .catch(err => {
        console.log(err);
      })
  }
  const [newFood, setNewFood] = useState({
    name: "",
    time: "",
    description: "",
    is_claimed: "",
    pickup_date: ""
  });
  const handleChange = e => {
    setNewFood({
      ...newFood,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
    create(newFood);
  }
  const create = (food) => {
    axiosAuth("create", food);
  }
  return (
    <div>
      <Title>
        <StyledH1>Business Dashboard</StyledH1>
        <Button
          className="logoutBtn"
          onClick={() => {
            localStorage.removeItem("token");
            props.history.push("/business_login");
          }}>Logout
        </Button>
      </Title>
      <Heading><Icon name="building" />Office Location</Heading>
      <MainContent className="main">
        <Card className="dashboard-office-location">
          <Card.Content>
            <Icon name="building outline" className="icon-building-outline" size="huge" />
            <h4>Name</h4>
            <h4>Address</h4>
          </Card.Content>
        </Card>
        <Card className="dashboard-office-location">
          <Card.Content>
            <Add>
              <Icon name="plus circle" className="plus-circle-link-icon" size="big" />
              <h4 className="add-location-text">Add Another Location</h4>
            </Add>
          </Card.Content>
        </Card>
      </MainContent>
      <BottomContent>
        <Heading><Icon name="truck" />Pick Up Schedule</Heading>
        <Add>
          <Modal trigger={<Button className="modalBtn" icon><Icon name="plus" size="big" className="plus-icon" /><span className="modalBtnTxt">Make your first donation</span></Button>}>
            <Modal.Header>Schedule New Pickup</Modal.Header>
            <Form onSubmit={handleSubmit}><Modal.Content image>
              <Icon name="truck" size="huge" />
              <Modal.Description>
                <Form.Field>
                  <label>Pickup Name</label>
                  <input placeholder="Pickup Name" type="text" name="name" value={newFood.name} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Pickup Date</label>
                  <input placeholder="Pickup Date" type="date" name="date" value={newFood.date} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Pickup Time</label>
                  <input placeholder="Pickup Time" type="time" name="time" value={newFood.time} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Is Claimed</label>
                  <input placeholder="Is Claimed" type="checkbox" name="is_claimed" value={newFood.is_claimed} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input placeholder="Description" type="textarea" name="description" value={newFood.description} onChange={handleChange} />
                </Form.Field>
                <Divider className="divider" />
                <Button type="submit">Submit</Button>
              </Modal.Description>
            </Modal.Content>
            </Form>
          </Modal>
        </Add>
        <Donation>
          <Card className="donation">
            <Card.Content>
              <div>Donation example</div>
            </Card.Content>
          </Card>
          <Card className="donation">
            <Card.Content>
              <div>Donation example</div>
            </Card.Content>
          </Card>
          <Card className="donation">
            <Card.Content>
              <div>Donation example</div>
            </Card.Content>
          </Card>
          <Card className="donation">
            <Card.Content>
              <div>Donation example</div>
            </Card.Content>
          </Card>
        </Donation>
        <Calendar className="calendar">
          <Heading><Icon name="calendar alternate" /> Next Week's Schedule</Heading>
          <div className="calendar-placeholder">Calendar will go here</div>
        </Calendar>
      </BottomContent>
    </div>
  )
}

export default BusinessDashboard; 