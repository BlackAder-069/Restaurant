import React from "react";
import Navbar from "./navbar";
import './header.css'; // Assuming you have a header.css file

function Header() {
  return (
    <header className="site-header">
        <div className="header-content">
          <div className="site-logo">
            <a href="/">
              <img src="./site_logo.png" alt="Site Logo" />
            </a>
          </div>
          <Navbar />
        </div>
    </header>
  );
}

export default Header;