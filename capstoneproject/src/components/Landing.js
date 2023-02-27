import React from 'react';
import HeroImage from '../images/restauranfood.jpg';
import './css/Landing.css';

function Landing() {
    return (
        <span className={'landing'}>
            <span className={'landing-text'}>
            <h1 className={'title'}>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean resturant, focused on traditional recipes served with a modern twist.</p>
            <a href="/book"><button>Book a table</button></a>
        </span>
        <span className={'landing-image'}>
                <img src={HeroImage} alt='littlelemon-heroimage' />
            </span>
            </span>
)
    }
    export default Landing