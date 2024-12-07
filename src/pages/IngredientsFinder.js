import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/IngredientFinder.css';

const IngredientFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleStores = [
    {
      id: 1,
      name: "Asian Grocery",
      address: "123 Main St, Anytown",
      distance: "0.5",
      rating: "4.5"
    },
    {
      id: 2,
      name: "East Meets West Market",
      address: "456 Oak Ave, Somewhere",
      distance: "1.2",
      rating: "4.2"
    },
    {
      id: 3,
      name: "Fusion Food Supplies",
      address: "789 Elm St, Someplace",
      distance: "2.0",
      rating: "4.7"
    }
  ];

  return (
    <motion.div
      className="finder-container"
      initial={{ opacity: 0, y: 50 }}  // Start invisible, slide up
      animate={{ opacity: 1, y: 0 }}   // Animate to visible
      exit={{ opacity: 0, y: 50 }}     // Exit by sliding down and fading out
      transition={{ duration: 0.5 }}   // Transition duration of 0.5 seconds
    >
      <motion.h1 
        className="finder-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}  // Title fades in with a delay
      >
        Find East Asian Ingredients
      </motion.h1>

      <motion.p 
        className="finder-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}  // Subtitle fades in with a delay
      >
        Looking for a specific East Asian ingredient? Enter it below and we'll show you nearby stores that carry it.
      </motion.p>

      <motion.div 
        className="search-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}  // Search bar fades in with upward motion
      >
        <input
          type="text"
          placeholder="Enter an ingredient (e.g., mirin, gochujang)"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          Find Stores
        </button>
      </motion.div>

      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}  // Map placeholder fades in
      >
        <p className="map-placeholder">Interactive map will be displayed here</p>
      </motion.div>

      <motion.p 
        className="location-notice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}  // Notice fades in
      >
        Note: To use the ingredient finder, allow location access when prompted. This helps us find stores near you.
      </motion.p>

      <motion.div
        className="stores-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },     // Stores start out hidden
          visible: {
            opacity: 1, y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 }  // Stagger the reveal of each store card
          }
        }}
      >
        {sampleStores.map((store) => (
          <motion.div 
            key={store.id} 
            className="store-card"
            initial={{ opacity: 0, y: 50 }}   // Each store card starts invisible and below
            animate={{ opacity: 1, y: 0 }}    // Animate to visible and in place
            transition={{ duration: 0.5 }}    // Each store card fades in and slides up
          >
            <h3 className="store-name">{store.name}</h3>
            <div className="store-details">
              <div className="store-location">
                <span className="location-icon">📍</span>
                <span>{store.address}</span>
              </div>
              <div className="store-info">
                <span>{store.distance} Miles</span>
                <span className="rating">
                  <span className="star">⭐</span>
                  {store.rating}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default IngredientFinder;
