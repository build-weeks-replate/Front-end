import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp';
import BusinessSignUp from './Business/BusinessSignUp';
import BusinessLogin from "./Business/BusinessLogin";
import BusinessDashboard from "./Business/BusinessDashboard";
import VolunteerSignUp from './Volunteer/VolunteerSignUp';
import VolunteerLogin from "./Volunteer/VolunteerLogin";
import VolunteerDashboard from "./Volunteer/VolunteerDashboard";


const Routes = () => {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/business_signup" component={BusinessSignUp} />
      <Route path="/business_login" component={BusinessLogin} />
      <Route path="/business_dashboard" component={BusinessDashboard} />
      <Route path="/volunteer_signup" component={VolunteerSignUp} />
      <Route path="/volunteer_login" component={VolunteerLogin} />
      <Route path="/volunteer_dashboard" component={VolunteerDashboard} />
    </div>
  )
}

export default Routes;

