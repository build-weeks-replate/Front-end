import React, { useState, useEffect } from 'react';
import { Search, Grid, Card, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import axiosWithAuth from '../axiosWithAuth';

const StyledH1 = styled.h1`
  display: flex;
  color: #1F5C70;
  font-size: 3rem; 
  justify-content: center;
`

const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Donation = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const VolunteerDashboard = (props) => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    axiosWithAuth().get("https://bw-replate.herokuapp.com/api/food")
      .then(res => {
        console.log("food:", res)
        setFoodItems(res.data);
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

  return(
    <MainContent>
      <StyledH1>Volunteer Dashboard</StyledH1>
      <Button
        className="logoutBtn"
        onClick={() => {
          localStorage.removeItem("token");
          props.history.push("/volunteer_login");
        }}>Logout
      </Button>
      <SearchContent>
        <Grid>
          <Grid.Column>
            <Search />
          </Grid.Column>
        </Grid><br/>
        <Donation>
          {foodItems.map(food => {
            return (
              <Card className="donation">
                <Card.Content>
                  <div className="donationContent">
                    <p><strong>Food Item:</strong><span> {food.name}</span></p>
                    <p><strong>Pickup Date:</strong><span> {food.pickup_date}</span></p>
                    <p><strong>Pickup Time:</strong><span> {food.time}</span></p>
                    <Button.Group>
                      <Button icon><Icon name="eye" />&nbsp;&nbsp;View</Button>
                      <Button.Or />
                      <Button icon><Icon name="check circle" />&nbsp;&nbsp;Claim</Button>
                    </Button.Group>
                  </div>
                </Card.Content>
              </Card>)
          })}
        </Donation>
      </SearchContent>
    </MainContent>
  )
}

export default VolunteerDashboard;