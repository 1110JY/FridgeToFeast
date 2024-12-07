import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Logo.PNG';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Fridge to Feast Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/ingredients">Ingredients Finder</Link>
      </div>
    </nav>
  );
}

export default Navbar;