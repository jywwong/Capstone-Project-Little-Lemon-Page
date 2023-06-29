import React from 'react';
import Logo from '../assets/Little Lemon Logo.png';
import {Link} from 'react-router-dom';

function Footer () {
return (
    <><div className="footer-navigation">
        <img src={Logo} alt='logo' />
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
    <div className="footer-contacts">
    <p>Find us</p>
    <p>23 Bethnal Green Road<br/>Shoreditch<br/>London, E1 6GY</p>
    <p>1234 5678</p>
    <p>info@littlelemon.com</p>
    </div >
    <div className="socials">
    <p>Let's connect on</p>
    <p>Instagram</p>
    </div>
    </>

)
}

export default Footer;