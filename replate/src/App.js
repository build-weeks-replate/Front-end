import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import VolunteerSignUp from "./components/VolunteerSignUp";
import Navigation from './components/Navigation';
// import DonorSignUp from './components/DonorSignUp';

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        {/* <DonorSignUp /> */}
        <VolunteerSignUp />
      </Container>

    </div>
  );
}

export default App;
