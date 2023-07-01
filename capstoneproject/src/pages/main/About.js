import React from "react";
import './css/About.css';

function About() {
    return (
        <>
        <section className="about-container">
        <section className="about-container-left">
        <img className="about-image" src='https://images.unsplash.com/photo-1629407119384-d42320c3e576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='Our founders' />
        </section>
        <section className="about-container-right">
        <h2>Our Story</h2>
        <p className="about-desc">Little Lemon is owned by two Italian brothers, Mario and Adrian. Focusing on traditional recipes served with a modern twist, the chefs draw inspiration from Italian, Greek, and Turkish culture.
        <br/><br/>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
        </section>
        </section>
        </>
    )
}

export default About;