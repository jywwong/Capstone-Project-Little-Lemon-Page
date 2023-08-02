import React, { useState } from "react";
import './css/BookingForm.css';

function BookingForm() {
   const [date, setDate] = useState();
   const [time, setTime] = useState();
   const [guests, setGuests] = useState("10");
   const [occasion, setOccasion] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      alert("Booking complete.");
   };

   return (
      <><form className="bookingform" onSubmit={handleSubmit}>
         <section className="field-date">
            <label>Booking date</label>
            <input
               type="date"
               value={date}
               onChange={(e) => { setDate(e.target.value); }}
               placeholder="res-date" />
         </section>
         <br />
         <section className="field-time">
            <label>Booking time</label>
            <select
               value={time}
               onChange={(e) => setTime(e.target.value)}>
               <option value="17:00">17:00</option>
               <option value="18:00">18:00</option>
               <option value="19:00">19:00</option>
               <option value="20:00">20:00</option>
               <option value="21:00">21:00</option>
               <option value="22:00">22:00</option>
            </select>
         </section>
         <br />
         <section className="field-numguests">
            <label>Number of guests</label>
            <input
               type="number"
               min="1"
               max="10"
               value={guests}
               onChange={(e) => setGuests(e.target.value)}
               placeholder="1" />
         </section>
         <br />
         <section className="field-occasion">
            <label>Occasion</label>
            <select
               value={occasion}
               onChange={(e) => setOccasion(e.target.value)}>
               <option value="none">None</option>
               <option value="birthday">Birthday</option>
               <option value="anniversary">Anniversary</option>
            </select>
         </section>
         <br />
         <section className="field-email">
            <label>Your email</label>
            <input type="email" placeholder="youremailhere@mail.com" />
         </section>
         <br />
         <section className="submit">
            <button className="reserve-submit" type="submit">Make your reservation</button>
         </section>
      </form>
      </>
   )
}
export default BookingForm;