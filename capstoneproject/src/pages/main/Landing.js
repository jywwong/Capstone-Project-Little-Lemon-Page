import React from 'react';
import HeroImage from '../../assets/landing_image.jpg';
import './css/Landing.css';
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <section className={'landing'}>
            <section className={'landing-text-left'}>
            <h1 className={'landing-title'}>Little Lemon</h1>
            <h2 className={'landing-location'}>Shoreditch</h2>
            <p className={'landing-description'}>We are a family-owned Mediterranean resturant, focused on traditional recipes served with a modern twist. Opened in 2011 by the two brothers Adrian and Mario, Little Lemon brings a taste of the Mediterranean to Shoreditch.</p>
            <Link to="/reservations"><button>Book a table</button></Link>
        </section>
        {/*<section className={'landing-image-right'}>
         <img className="heroimage" src={HeroImage} alt='littlelemon-heroimage' />
            </section>*/}
            </section>
)
    }
    export default Landing;