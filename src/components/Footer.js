import React from 'react';
import '../styles/Footer.css';
import logo from '../Logo.PNG';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Fridge to Feast Logo" className="footer-logo" />
      </div>
      <p className="copyright">© 2024 Fridge to Feast. All rights reserved.</p>
    </footer>
  );
}

export default Footer;