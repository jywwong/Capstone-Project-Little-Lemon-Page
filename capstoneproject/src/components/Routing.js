import { Routes, Route } from "react-router-dom";

import BookingPage from "../pages/BookingPage";
import Main from "../pages/main";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}