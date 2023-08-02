import React from 'react';
import BookingForm from './BookingForm.js';
import './css/BookingPage.css';

function BookingPage() {
    return (
        <section className='bookingpage-container'>
            <h1>Reservations</h1>
            <p>Book your next meal or celebrate a special occasion with us!</p>
            <BookingForm />
        </section>
    )
}

export default BookingPage;