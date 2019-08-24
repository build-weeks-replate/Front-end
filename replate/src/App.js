import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Routes from './components/Routes';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
