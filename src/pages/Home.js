import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';


const Features = () => {
  return (
    <section className="features-container">
      <div className="features">
        <h2>Why choose Fridge to Feast?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Reduce Food Waste</h3>
            <p>Our smart recipe suggestions help you use ingredients you already have, minimising waste and saving money.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2H9C8.44772 2 8 2.44772 8 3V21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21V3C16 2.44772 15.5523 2 15 2Z" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6H12.01" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18H12.01" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Explore Authentic Recipes</h3>
            <p>Dive into a world of authentic East Asian recipes, from classic dishes to fusion creations.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="#BF2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Find Rare Ingredients</h3>
            <p>Locate hard-to-find East Asian ingredients in your area with our ingredient finder feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }} // Slide in from the left
    animate={{ opacity: 1, x: 0 }}   // Fully visible
    exit={{ opacity: 0, x: -50 }}    // Slide out to the left
    transition={{ duration: 0.5 }}
  >
    <div className="home-wrapper">
      <div className="home">
        <section className="hero">
          <div className="hero-content">
            <h1>
              Discover the<br />
              Art of<br />
              <span className="highlight">East Asian</span><br />
              <span className="highlight">Cuisine</span>
            </h1>
            <p className="hero-text">
              Embark on a culinary journey that minimises waste, promotes health and
              explores the rich tapestry of East Asian flavours.
            </p>
            <div className="hero-buttons">
              <Link to="/recipes" className="btn btn-primary">Explore Recipes &gt;</Link>
              <Link to="/Ingredients" className="btn btn-secondary">Find Ingredients</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-circle coral"></div>
            <div className="placeholder-square"></div>
            <div className="placeholder-circle red"></div>
          </div>
        </section>
      </div>
      <Features />
    </div>
    </motion.div>
  );
}

export default Home;