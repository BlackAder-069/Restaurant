import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Menu from "./components/Pages/menu";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Reservation from "./components/Pages/Reservation";
import Terms from "./components/Pages/Terms";
import Privacy from "./components/Pages/Privacy";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home /> } /> 
          <Route path="/home" element={<Home /> } /> 
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
