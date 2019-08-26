import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Routes from './components/Routes';
<<<<<<< HEAD
import Navigation from './components/Navigation';
=======
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Container>
        <Routes />
      </Container>
<<<<<<< HEAD
=======
      {/*<Footer />*/}
>>>>>>> 0eadf2a86f9955075c932ac8f506093cbb0ac5a7
    </div>
  );
}

export default App;
