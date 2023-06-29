import React, { useState } from "react";

function BookingForm () {
const [date, setDate] = useState();
const [time, setTime] = useState();
const [guests, setGuests] = useState("10");
const [occasion, setOccasion] = useState();

 const handleSubmit = (e) => {
 e.preventDefault();
   alert("Booking complete.");
 };

return (
<div className="Booking">
<form onSubmit={handleSubmit}>
<fieldset>
   <div className="Field">
      <label>Choose date</label>
         <input
         type = "date"
         value={date}
      onChange={(e) => {setDate(e.target.value);}}
      placeholder="res-date"
      />
</div>
<div className="Field">
   <label>Choose time</label>
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
      </div>
<div className="Field">
   <label>Number of guests</label>
   <input
   type="number"
   min="1"
   max="10"
   value={guests}
   onChange={(e) => setGuests(e.target.value)}
   placeholder="1"
   />
</div>
<div className="Field">
   <label>Occasion</label>
   <select
   value={occasion}
   onChange={(e) => setOccasion(e.target.value)}>
      <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
      </select>
      </div>
<button type="submit">Make Your reservation</button>
</fieldset>
</form>
</div>
)
}
export default BookingForm;