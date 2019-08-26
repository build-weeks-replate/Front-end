import React from 'react';
import { Button, Form, Icon, Header, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  color: #1F5C70;
  border: 2px solid yellow;


`
const StyledH1 = styled.h1`
  display: flex;
  color: #1F5C70;
  font-size: 3rem; 
  justify-content: center;
  border: 2px solid blue;
`
const DashboardCard = styled.div`
  width: 100%;
  text-align: center;
  // margin-right: 10%;
`
const Add = styled.div `
  border: 2px solid red;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-evenly;
  
`
const BottomContent = styled.div `
  border: 2px solid green;
  color: #1F5C70;
`
const Calendar = styled.div `
  color: #1F5C70;
  width: 100%
  border: 2px solid paleturquoise;
  display: flex;
  justify-content: center;

`

const BusinessDashboard = () => {
    return (
        <div>
            <StyledH1>Donor Dashboard</StyledH1>
            <MainContent className="main">
                <Card>
                    <DashboardCard>
                        <Card.Content>
                            <h3>Office Location</h3>
                            <Icon name="building outline" className="icon-building-outline" size="huge" />
                            <h4>Name</h4>
                            <h4>Address</h4>
                        </Card.Content>
                    </DashboardCard>
                </Card>
                <Add>
                  <Icon name = "plus circle" className = "plus-circle-link-icon" size = "big" />
                  <h4> Add Another Location</h4>
                </Add>
            </MainContent>
            <BottomContent>
              <h3> Pick Up Schedule </h3>
              <Add>
                  <Icon name = "plus circle" className = "plus-circle-link-icon" size = "big" />
                  <h4> Make your first donation</h4>
              </Add>
                <Calendar class ="calendar">
                  <h3>Next Weeks Schedule</h3>
                  <h5>Insert Calendar Here</h5>
                </Calendar>
            </BottomContent>
        </div>
    )
}

export default BusinessDashboard; 