import React from 'react';
import '../styles/Footer.css';
<<<<<<< HEAD
import logo from '../assets/Logo.PNG';
import chefHatIcon from "../assets/chef-hat-svgrepo-com.svg";
import forkKnifeIcon from "../assets/ForkKnife.svg";
import mapPinIcon from "../assets/map-pin-svgrepo-com (1).svg";
=======
import logo from '../Logo.PNG';
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Fridge to Feast Logo" className="footer-logo" />
      </div>
<<<<<<< HEAD
      <p className="footer-slogan">
        <em>Minimise Waste, Maximise Flavour.</em>
      </p>
      <div className="footer-icons">
        <img src={chefHatIcon} alt="Chef Hat Icon" className="footer-icon" />
        <span className="divider"></span>
        <img src={forkKnifeIcon} alt="Fork and Knife Icon" className="footer-icon" />
        <span className="divider"></span>
        <img src={mapPinIcon} alt="Map Pin Icon" className="footer-icon" />
      </div>
      <p className="copyright">
        © 2025 Fridge to Feast. All rights reserved. 
      </p>
=======
      <p className="copyright">© 2024 Fridge to Feast. All rights reserved.</p>
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
    </footer>
  );
}

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
