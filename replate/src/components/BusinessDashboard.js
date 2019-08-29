import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  color: #1F5C70;
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
  return (
    <div>
      <StyledH1>Donor Dashboard</StyledH1>
      <Heading><Icon name="building" />Office Location</Heading>
      <MainContent className="main">
        <Card className="dashboard-office-location">
          <Card.Content>
            <Icon name="building outline" className="icon-building-outline" size="huge" />
            <h4>{props.username}</h4>
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
        <Heading><Icon name="truck" />  Pick Up Schedule</Heading>
        <Add>
          <Icon name="plus circle" className="plus-circle-link-icon" size="big" />
          <h4 className="first-donation-text">Make your first donation</h4>
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