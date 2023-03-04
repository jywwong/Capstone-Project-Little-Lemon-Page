import { useState } from "react";

function AvailableTimes () {
    const availableSlots = ['17:00', '18:00', '20:00', '21:00', '22:00']
    const slotList = availableSlots.map((availableSlots) =>
    <li>{availableSlots}</li>
    );
return (
    <li>{availableSlots}</li>
)
}
export default AvailableTimes

/* available seats counter */

/*
import {useReducer} from 'react';
import AvailableTimes from './AvailableTimes.js';

const reducer = (state, action) => {
   if (action.type ==== ) return {availableSlots - 10};
}

