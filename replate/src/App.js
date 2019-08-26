import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Routes from './components/Routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
