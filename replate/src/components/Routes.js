import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp';
import BusinessSignUp from './BusinessSignUp';
import VolunteerSignUp from './VolunteerSignUp';
import BusinessDashboard from "./BusinessDashboard";
import VolunteerLogin from "./VolunteerLogin";
import BusinessLogin from "./BusinessLogin";
const Routes = () => {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/business_signUp" component={BusinessSignUp} />
      <Route path="/BusinessLogin" component={BusinessLogin} />
      <Route path="/business_dashboard" component={BusinessDashboard} />
      <Route path="/volunteer" component={VolunteerSignUp} />
      <Route path="/dashboard" component={BusinessDashboard} />
      <Route path="/VolunteerLogin" component={VolunteerLogin} />
    </div>
  )
}

export default Routes;

