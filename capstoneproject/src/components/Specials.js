import React from 'react';
import './css/Specials.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GreekSalad from '../images/greek salad.jpg';
import LemonDessert from '../images/lemon dessert.jpg';

function Specials () {
    return (
/*Specials*/
        <>
            <>
            <span className={'specials-banner'}>
                <h1 className={'specials-title'}>This week's specials!</h1>
                <a href="/onlinemenu"><button>Online Menu</button></a>
                </span>
                <span className={'specials-gallery'}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={GreekSalad} />
                    <Card.Body>
                        <Card.Title className={'title-card'}>Greek Salad</Card.Title>
                        <Card.Subtitle className={'title-price'}>£12.99</Card.Subtitle>
                        <Card.Text className={'title-text'}>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </Card.Text>
                        <Button variant="primary">Order a delivery</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={LemonDessert} />
                    <Card.Body>
                        <Card.Title className={'title-card'}>Lemon Dessert</Card.Title>
                        <Card.Subtitle className={'title-price'}>£5</Card.Subtitle>
                        <Card.Text className={'title-text'}>
                            This comes straight from grandma's recipe book, every last ingredient has been sourcedand is as authentic as can be imagined.
                        </Card.Text>
                        <Button variant="primary">Order a delivery</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={GreekSalad} />
                <Card.Body>
                    <Card.Title className={'title-card'}>Bruchetta</Card.Title>
                    <Card.Subtitle className={'title-price'}>£5.99</Card.Subtitle>
                    <Card.Text className={'title-text'}>
                    Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </Card.Text>
                    <Button variant="primary">Order a delivery</Button>
                </Card.Body>
            </Card>
            </span>
            </></>
    );
}
export default Specials