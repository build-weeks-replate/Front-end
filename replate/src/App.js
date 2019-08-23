import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import Navigation from './components/Navigation';
import DonorSignUp from './components/DonorSignUp'; 

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <DonorSignUp />
      </Container>
    </div>
  );
}

export default App;
