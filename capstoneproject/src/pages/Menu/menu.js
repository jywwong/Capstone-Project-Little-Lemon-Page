import React from 'react';
import './menu.css';

function Menu() {
    return (
        <section className='container-menu'>
            <section className='title'><h2>Menu</h2></section>
            <section className='container-upper'>
                <section className='Appetizer'>
                    <h2 className='appetizer-title'>Appetiser</h2>
                    <p>Bruchetta...£5</p>
                    <p>Tzatziki...£6</p>
                    <p>Arancini...£6</p>
                </section>
                <section className='Main'>
                    <h2 className='main-title'>Main</h2>
                    <p>Lemon Herb Chicken...£17</p>
                    <p>Vegetable Moussaka...£15</p>
                    <p>Shrimp Scampi...£15</p>
                </section>
                <section className='Salad'>
                    <h2 className='salad-title'>Salad</h2>
                    <p>Greek Salad...£12</p>
                    <p>Fennel and Orange Salad...£11</p>
                    <p>Tabouleh...£10.5</p>
                </section>
            </section>
            <section className='container-lower'>
                <section className='Dessert'>
                    <h2 className='dessert-title'>Dessert</h2>
                    <p>Baklava...£6.5</p>
                    <p>Lemon Semolina Cake...£7</p>
                    <p>Gelato...£4.5</p>
                </section>
                <section className='Drinks'>
                    <h2 className='drinks-title'>Drinks</h2>
                    <p>Limoncello...£4</p>
                    <p>Mediterranean Herbal Tea...£5</p>
                    <p>Bellini...£7</p>
                </section>
            </section>
        </section>
    )
}

export default Menu;