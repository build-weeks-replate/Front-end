import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './SignUp';
import { BusinessSignUp1, BusinessSignUp2 } from './BusinessSignUp';
import VolunteerSignUp from './VolunteerSignUp';

const Routes = () => {
  return (
    <div>
      <Route path="/signup" component={SignUp} />
      <Route path="/business_part1" component={BusinessSignUp1} />
      <Route path="/business_part2" component={BusinessSignUp2} />
      <Route path="/volunteer" component={VolunteerSignUp} />
    </div>
  )
}

export default Routes;