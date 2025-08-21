import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';
// Image and Icons
import HeroImage2 from '../assets/HeroImage2.jpg';
import magnifyingGlassIcon from "../assets/magnifying-glass-backup-svgrepo-com.svg";
import recycleIcon from "../assets/recycle-svgrepo-com.svg";
import chefHatIcon from "../assets/chef-hat-svgrepo-com.svg";

// Home Component
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="home-wrapper">
        <div className="home">
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-main-title">
                Discover the<br />
                Art of<br />
                <span className="highlight">East Asian</span><br />
                <span className="one-highlight">Cuisine</span>
              </h1>
              <p className="hero-text">
                Embark on a culinary journey that minimises waste, promotes health and
                explores the rich tapestry of East Asian flavours.
              </p>
              <div className="hero-buttons">
                <Link to="/recipes" className="btn-primary">
                  <img src="/Favicon.PNG" alt="Recipes Icon" className="btn-icon" loading="lazy" />
                  Explore Recipes
                </Link>

                <Link to="/ingredients" className="btn-secondary">
                  <svg className="svgIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  Find Ingredients
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <div className="circle coral"></div>
              <img src={HeroImage2} alt="Delicious East Asian Cuisine" className="hero-img" loading="lazy" />
              <div className="circle red"></div>
            </div>
          </section>
        </div>
        <Features />
      </div>
    </motion.div>
  );
}

// Features Component
const Features = () => {
  return (
    <section className="features-container">
      <div className="features">
        <h2>Why choose Fridge to Feast?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={recycleIcon} alt="Recycle Icon" className="mission-icon" width="40" height="40" loading="lazy" />
            <h3>Reduce Food Waste</h3>
            <p>Our smart recipe suggestions help you use ingredients you already have, minimising waste and saving money.</p>
          </div>

          <div className="feature-card">
            <img src={chefHatIcon} alt="Chef Hat Icon" className="mission-icon" width="40" height="40" loading="lazy" />
            <h3>Explore Authentic Recipes</h3>
            <p>Dive into a world of authentic East Asian recipes, from classic dishes to fusion creations.</p>
          </div>

          <div className="feature-card">
            <img src={magnifyingGlassIcon} alt="Magnifying Glass Icon" className="offer-icon" width="40" height="40" loading="lazy" />
            <h3>Find Rare Ingredients</h3>
            <p>Locate hard-to-find East Asian ingredients in your area with our ingredient finder feature.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;