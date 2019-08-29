import React from 'react';
import { Search, Grid, Header, Card, Button } from 'semantic-ui-react';
import styled from 'styled-components';

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

const VolunteerDashboard = (props) => {
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
        <Card>
          <Card.Content>
            <Header as='h3'>Search results will appear here.</Header>
          </Card.Content>
        </Card>
      </SearchContent>
    </MainContent>
  )
}

export default VolunteerDashboard;