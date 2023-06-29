import React from 'react';
import HeroImage from '../../assets/restauranfood.jpg';
import './css/Landing.css';
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <span className={'landing'}>
            <span className={'landing-text'}>
            <h1 className={'title'}>Little Lemon</h1>
            <h2>Shoreditch</h2>
            <p>We are a family-owned Mediterranean resturant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/reservations"><button>Book a table</button></Link>
        </span>
        <span className={'landing-image'}>
                <img src={HeroImage} alt='littlelemon-heroimage' />
            </span>
            </span>
)
    }
    export default Landing