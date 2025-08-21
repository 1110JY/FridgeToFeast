import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/Logo.PNG';
import chefHatIcon from "../assets/chef-hat-svgrepo-com.svg";
import forkKnifeIcon from "../assets/ForkKnife.svg";
import mapPinIcon from "../assets/map-pin-svgrepo-com (1).svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Fridge to Feast Logo" className="footer-logo" />
      </div>
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
    </footer>
  );
}

export default Footer;
