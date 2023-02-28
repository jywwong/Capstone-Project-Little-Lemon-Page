import React from 'react'
import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import Specials from './components/Specials.js';
import BookingPage from './components/BookingPage.js';
import './index.css';

function App() {
  return (
    <>
  <Nav/>
  <Landing/>
<Specials/>
<BookingPage/>
  </>
  );
}

export default App;