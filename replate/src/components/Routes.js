import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp';
import BusinessSignUp from './BusinessSignUp';
import VolunteerSignUp from './VolunteerSignUp';
import BusinessDashboard from "./BusinessDashboard";
import VolunteerLogin from "./VolunteerLogin";
import VolunteerDashboard from "./VolunteerDashboard";
import BusinessLogin from "./BusinessLogin";

const Routes = () => {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/business_signUp" component={BusinessSignUp} />
      <Route path="/BusinessLogin" component={BusinessLogin} />
      <Route path="/business_dashboard" component={BusinessDashboard} />
      <Route path="/volunteer_dashboard" component={VolunteerDashboard} />
      <Route path="/volunteer" component={VolunteerSignUp} />
      <Route path="/business_dashboard" component={BusinessDashboard} />
      <Route path="/volunteer_login" component={VolunteerLogin} />
    </div>
  )
}

export default Routes;

