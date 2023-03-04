import React from 'react'
import Routing from './components/Routing.js'
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import './index.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routing/>
      <Footer/>
  </div>
  );
}

export default App;