<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Logo.PNG";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

=======
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Logo.PNG';

function Navbar() {
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Fridge to Feast Logo" className="logo" />
        </Link>
      </div>
<<<<<<< HEAD
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/ingredients">Ingredients Finder</Link></li>
        <li className="faq-button-container">
          <Link to="/faq" className="faq-button">
            <svg className="question-icon" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg>
            <span className="tooltip">FAQ</span>
          </Link>
        </li>
      </ul>
=======
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/ingredients">Ingredients Finder</Link>
      </div>
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
    </nav>
  );
}

export default Navbar;