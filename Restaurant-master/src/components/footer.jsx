import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <div className="container2">
      <footer className="footer-basic">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/about">About</a></li>
          <li className="list-inline-item"><a href="/services">Services</a></li>
          <li className="list-inline-item"><a href="/terms">Terms</a></li>
          <li className="list-inline-item"><a href="/privacy">Privacy Policy</a></li>
        </ul>
        <div className="copyright">© 2022 Flavor Fusion</div>
      </footer>
    </div>
  );
}

export default Footer;