import React from 'react';
import Logo from '../assets/Little Lemon Logo.png';
import './css/Nav.css';
import {Link} from 'react-router-dom';


function Nav () {
    return (
    <nav className="main-nav">
    <img src={Logo} alt='logo'/>
    <ul className="links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/reservations">Reservations</Link></li>
   {/*<li><Link to="/orderonline">Order Online</Link></li>
    <li><Link to="/login">Login</Link></li>*/}
    </ul>
    </nav>
    )
}
export default Nav;