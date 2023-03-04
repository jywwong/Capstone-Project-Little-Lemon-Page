import React from 'react';
import Logo from '../assets/Little Lemon Logo.png';
import './css/Nav.css';

function Nav () {
    return (
    <nav className="main-nav">
    <img src={Logo} alt='logo'/>
    <ul className="links">
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/menu">Menu</a></li>
    <li><a href="/reservations">Reservations</a></li>
    <li><a href="/orderonline">Order Online</a></li>
    <li><a href="/login">Login</a></li>
    </ul>
    </nav>
    )
}
export default Nav