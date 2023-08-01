import React from 'react';
import './css/Specials.css';
import Card from 'react-bootstrap/Card';
import GreekSalad from '../../assets/greek salad.jpg';
import LemonDessert from '../../assets/lemon dessert.jpg';
import Bruchetta from '../../assets/bruchetta.jpg';

function Specials () {
    return (
/*Specials*/
        <>
            <>
            <section className={'specials-banner'}>
                <h1 className={'specials-title'}>SPECIALS</h1>
                </section>
                <section className={'specials-gallery'}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className={'card-image'} variant="top" src={GreekSalad} />
                    <Card.Body className="card-body">
                        <Card.Title className={'card-title'}>Greek Salad</Card.Title>
                        <Card.Subtitle className={'card-price'}>£12.99</Card.Subtitle>
                        <Card.Text className={'card-text'}>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className={'card-image'} variant="top" src={LemonDessert} />
                    <Card.Body>
                        <Card.Title className={'card-title'}>Lemon Dessert</Card.Title>
                        <Card.Subtitle className={'card-price'}>£5</Card.Subtitle>
                        <Card.Text className={'card-text'}>
                            This comes straight from grandma's recipe book, every last ingredient has been sourcedand is as authentic as can be imagined.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                <Card.Img className={'card-image'} variant="top" src={Bruchetta} />
                <Card.Body>
                    <Card.Title className={'card-title'}>Bruchetta</Card.Title>
                    <Card.Subtitle className={'card-price'}>£5.99</Card.Subtitle>
                    <Card.Text className={'card-text'}>
                    Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </Card.Text>
                </Card.Body>
            </Card>
            </section>
            </></>
    );
}
export default Specials;