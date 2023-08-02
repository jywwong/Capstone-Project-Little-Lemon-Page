import { Routes, Route } from "react-router-dom";

import BookingPage from "../pages/BookingPage/BookingPage.js";
import Main from "../pages/main";
import About from "../pages/main/About.js";
import Menu from "../pages/Menu/menu.js";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}