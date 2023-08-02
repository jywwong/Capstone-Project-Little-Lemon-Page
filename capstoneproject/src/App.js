import React from 'react'
import Routing from './components/Routing.js'
import Nav from './components/Nav.js';
import './index.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;