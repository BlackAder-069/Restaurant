import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";  

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" target="_blank" className="navbar-link">
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" target="_blank" className="navbar-link">
            Contact
          </Link>
        </li>
        <li className="navbar-item reservation">
          <Link to="/reservation" target="_blank" className="navbar-link button-74">
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
