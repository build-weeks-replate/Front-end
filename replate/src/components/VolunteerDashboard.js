import React from 'react';
import { Search, Grid, Header, Card } from 'semantic-ui-react';

const VolunteerDashboard = (props) => {
  
  return(
    <div className="searchbar">
      <Header as='h1'>Volunteer Dashboard</Header>
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
    </div>
  )
}

export default VolunteerDashboard;