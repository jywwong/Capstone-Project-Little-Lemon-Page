import React from 'react';
import Logo from '../assets/Little Lemon Logo.png';
import { Link } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
    return (
        <>
            <section className="footer-container">
                <section className="footer-navigation">
                    <Link to="/"><img className="footer-logo" src={Logo} alt='litlelemon-logo' style={{ width: "9em" }} /></Link>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                    </ul>
                </section>
                <section className="footer-contacts">
                    <p>23 Bethnal Green Road, Shoreditch, London, E1 6GY | 1234 5678 | <a href="mailto:info@littlelemon.com">info@littlelemon.com</a> | <a href="https://www.instagram.com">Instagram</a></p>
                </section>
            </section>
        </>

    )
}

export default Footer;