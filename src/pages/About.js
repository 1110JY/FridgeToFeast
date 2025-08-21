import React from "react";
import "./../styles/About.css";
/* Icons */
import recycleIcon from "../assets/recycle-svgrepo-com.svg";
import chefHatIcon from "../assets/chef-hat-svgrepo-com.svg";
import designStudioIcon from "../assets/design-studio-svgrepo-com.svg";
import forkKnifeIcon from "../assets/ForkKnife.svg";
import leafIcon from "../assets/leaf-svgrepo-com.svg";
import magnifyingGlassIcon from "../assets/magnifying-glass-backup-svgrepo-com.svg";
import mapPinIcon from "../assets/map-pin-svgrepo-com (1).svg";

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1 className="about-title">
          Reimagining <span className="about-highlight">East Asian</span> Cooking
        </h1>
        <p className="about-subtitle">
          Welcome to Fridge to Feast, where technology meets tradition to create delicious, sustainable, and authentic East Asian meals from the ingredients you already have.
        </p>
      </header>

      {/* Mission Section */}
      <section className="about-mission">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          Every year, millions of households struggle with food waste and authentic meal preparation. We're here to bridge this gap with innovative solutions.
        </p>
        <div className="mission-cards">
          <div className="mission-card">
            <img src={recycleIcon} alt="Recycle Icon" className="mission-icon" width="40" height="40" />
            <h3>Reducing Food Waste</h3>
            <p>Our innovative ingredient-matching algorithm generates personalised recipes using ingredients you already have.</p>
          </div>
          <div className="mission-card">
            <img src={forkKnifeIcon} alt="Fork and Knife Icon" className="mission-icon" width="40" height="40" />
            <h3>Celebrating East Asian Cuisine</h3>
            <p>Explore rich flavors and traditions with recipes tailored for authenticity and health.</p>
          </div>
          <div className="mission-card">
            <img src={chefHatIcon} alt="Chef Hat Icon" className="mission-icon" width="40" height="40" />
            <h3>Making Cooking Accessible</h3>
            <p>Whether you're a beginner or experienced, cook delicious meals using what's in your fridge.</p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="about-offer">
        <h2 className="section-title">What We Offer</h2>
        <div className="offer-cards">
          <div className="offer-card">
            <img src={magnifyingGlassIcon} alt="Magnifying Glass Icon" className="offer-icon" width="40" height="40" />
            <h3>Recipe Generator</h3>
            <p>Our smart algorithm suggests recipes based on your ingredients, providing substitutions for hard-to-find items while maintaining authenticity.</p>
          </div>
          <div className="offer-card">
            <img src={mapPinIcon} alt="Map Pin Icon" className="offer-icon" width="40" height="40" />
            <h3>Ingredient Finder</h3>
            <p>Use our location-based tool to discover nearby stores that stock East Asian staples.</p>
          </div>
          <div className="offer-card">
            <img src={leafIcon} alt="Leaf Icon" className="offer-icon" width="40" height="40" />
            <h3>Sustainability Focus</h3>
            <p>We encourage the use of perishable items and leftovers to help reduce food waste and contribute to a healthier planet.</p>
          </div>
          <div className="offer-card">
            <img src={designStudioIcon} alt="Design Studio Icon" className="offer-icon" width="40" height="40" />
            <h3>User-Centric Design</h3>
            <p>Enjoy an intuitive interface designed for both desktop and mobile platforms, ensuring a seamless cooking experience.</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <div className="vision-content">
          <h2 className="vision-section-title">Our Vision</h2>
          <p>
            We envision a world where cooking is joyful, sustainable, and inclusive. By expanding our platform to include meal planning, calorie tracking, and a broader range of cuisines, we aim to inspire a global community of home cooks to embrace healthier and more sustainable lifestyles.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
