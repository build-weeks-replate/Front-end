import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import BusinessSignUp from './Business/BusinessSignUp';
import BusinessLogin from "./Business/BusinessLogin";
import BusinessDashboard from "./Business/BusinessDashboard";
import VolunteerSignUp from './Volunteer/VolunteerSignUp';
import VolunteerLogin from "./Volunteer/VolunteerLogin";
import VolunteerDashboard from "./Volunteer/VolunteerDashboard";

const Routes = () => {
  const PrivateRouteVolunteer = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
            <Redirect to="/volunteer_login" />
          )
      }
    />
  );
  const PrivateRouteBusiness = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
            <Redirect to="/business_login" />
          )
      }
    />
  );
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/business_signup" component={BusinessSignUp} />
      <Route path="/business_login" component={BusinessLogin} />
      <PrivateRouteBusiness path="/business_dashboard" component={BusinessDashboard} />
      <Route path="/volunteer_signup" component={VolunteerSignUp} />
      <Route path="/volunteer_login" component={VolunteerLogin} />
      <PrivateRouteVolunteer path="/volunteer_dashboard" component={VolunteerDashboard} />
    </div>
  )
}

export default Routes;