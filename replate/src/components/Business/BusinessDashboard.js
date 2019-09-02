import React, { useState, useEffect } from 'react';
import { Icon, Card, Button, Modal, Form, Divider, Label } from 'semantic-ui-react';
import styled from 'styled-components';
import axiosWithAuth from "../axiosWithAuth";

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
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`
const BusinessDashboard = (props) => {
  const [newFood, setNewFood] = useState({
    user: "",
    foods: [],
    visible: false,
    id: ""
  });

  useEffect(() => {
    axiosWithAuth().get("https://bw-replate.herokuapp.com/api/food/business")
      .then(res => {
        setNewFood({
          ...newFood,
          foods: res.data
        })
        console.log(res)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const handleChange = e => {
    setNewFood({
      ...newFood,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    const food = {
      name: newFood.name,
      pickup_date: newFood.pickup_date,
      time: newFood.time,
      description: newFood.description,
      is_claimed: newFood.is_claimed,
    }

    e.preventDefault();
    axiosWithAuth().post(
      "https://bw-replate.herokuapp.com/api/food", food
    )
      .then(res => {
        console.log(res);
        props.history.push("/empty");
        props.history.push("/business_dashboard");
      })
      .catch(err => {
        console.log(err);
      })
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
            <h4>User</h4>
            <h4>Address</h4>
          </Card.Content>
        </Card>
        <Card className="dashboard-office-location">
          <Card.Content>
            <Button className="modalBtnOffice" icon><Icon name="plus" size="large" />&nbsp;&nbsp;<span className="modalBtnTxt">Add Another Location</span></Button>
          </Card.Content>
        </Card>
      </MainContent>
      <BottomContent>
        <Heading><Icon name="truck"/>Pick Up Schedule</Heading>
        <Add>
          <Modal trigger={<Button className="modalBtn" icon><Icon name="plus" size="large" />&nbsp;&nbsp;<span className="modalBtnTxt">Make A Donation</span></Button>}>
            <Modal.Header className="modalHeader">
              <Icon name="truck" size="big" />Schedule New Pickup
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Content>
                <Modal.Description>
                  <Form.Field className="modalForm">
                    <label>Pickup Name</label>
                    <input placeholder="Pickup Name" type="text" name="name" value={newFood.name} onChange={handleChange} />
                  </Form.Field>
                  <Form.Field className="modalForm">
                    <label>Pickup Date</label>
                    <input placeholder="Pickup Date" type="date" name="pickup_date" value={newFood.pickup_date} onChange={handleChange} />
                  </Form.Field>
                  <Form.Field className="modalForm">
                    <label>Pickup Time</label>
                    <input placeholder="Pickup Time" type="time" name="time" value={newFood.time} onChange={handleChange} />
                  </Form.Field>
                  <Form.Field className="modalForm">
                    <label>Claimed</label>
                    <input placeholder="Is Claimed" type="checkbox" name="is_claimed" value={newFood.is_claimed} onChange={handleChange} />
                  </Form.Field>
                  <Form.Field className="modalForm">
                    <label>Description</label>
                    <input placeholder="Description" type="textarea" name="description" value={newFood.description} onChange={handleChange} />
                  </Form.Field>
                  <Divider className="divider" />
                  <div className="submitModalBtnContainer">
                    <Button type="submit" className="submitModalBtn" icon><Icon name='check' />&nbsp;&nbsp;Submit</Button>
                  </div>
                </Modal.Description>
              </Modal.Content>
            </Form>
          </Modal>
        </Add>
        <Donation>
          {newFood.foods.map(food => {
            const handleDelete = (e) => {
              e.preventDefault();
              axiosWithAuth().delete(`https://bw-replate.herokuapp.com/api/food/${food.id}`)
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                  props.history.push("/empty");
                  props.history.push("/business_dashboard");
                })

            }
            return (
              <Card className="donation">
                <Card.Content>
                  <Label onClick={handleDelete} icon={{name:'delete', color:'red'}} corner="left" />
                  <div className="donationContent">
                    <p><strong>Food Item:</strong><span> {food.name}</span></p>
                    <p><strong>Pickup Date:</strong><span> {food.pickup_date}</span></p>
                    <p><strong>Pickup Time:</strong><span> {food.time}</span></p>
                    <Button.Group>
                      <Button icon><Icon name="eye" />&nbsp;&nbsp;View</Button>
                      <Button.Or />
                      <Button icon><Icon name="edit" />&nbsp;&nbsp;Edit</Button>
                    </Button.Group>
                  </div>
                </Card.Content>
              </Card>)
          })}
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