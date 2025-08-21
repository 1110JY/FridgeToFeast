<<<<<<< HEAD
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./../styles/IngredientFinder.css";

// IngredientFinder Component
const IngredientFinder = () => {
  const [location, setLocation] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.006 }); // Default to NYC
  const [stores, setStores] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to geocode the location entered by the user
  const geocodeLocation = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setMapCenter({ lat, lng });
        searchStores(lat, lng); // Search for stores nearby the location
        setErrorMessage("");
      } else {
        setErrorMessage("Location not found. Please try again."); 
      }
    } catch (error) {
      console.error("Error geocoding location:", error);
      setErrorMessage("Failed to fetch location. Please check your input.");
    }
  };

  // Search for stores nearby the given latitude and longitude
  const searchStores = async (lat, lng) => {
    try {
      const response = await fetch(
        `http://localhost:5000/places?lat=${lat}&lng=${lng}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setStores(
          data.results.map((store) => ({
            name: store.name,
            address: store.vicinity,
            location: store.geometry.location,
            rating: store.rating || "No rating available",
          }))
        );
        setErrorMessage("");
      } else {
        setStores([]);
        setErrorMessage("No stores found nearby.");
      }
    } catch (error) {
      console.error("Error searching for stores:", error);
      setErrorMessage("Failed to fetch store data.");
    }
  };
  
  // Return the JSX for the IngredientFinder component
  return (
    <div className="ingredient-finder">
      <h1 className="ingredient-finder-title">
        Find <span className="finder-highlight">East Asian</span> Ingredients
      </h1>
      <p>Looking for a specific East Asian ingredient? Enter it below and we'll show you nearby stores that carry it.</p>
      <div className="search-container">
        <div className="InputContainer">
          <input
            placeholder="Search for your location"
            className="input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="labelforsearch">
            <svg className="searchIcon" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </label>
        </div>
        <div className="InputContainer">
          <input
            placeholder="Search for an ingredient"
            className="input"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <label className="labelforsearch">
            <svg className="searchIcon" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </label>
        </div>
        <button onClick={geocodeLocation}>Find Ingredient</button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="map-container">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ height: "500px", width: "100%" }}
            center={mapCenter}
            zoom={12}
          >
            {stores.map((store, index) => (
              <Marker key={index} position={store.location} label={store.name} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {stores.length > 0 && (
        <div className="store-list">
          <h2>Nearby Grocery Stores:</h2>
          <div className="store-cards">
            {stores.map((store, index) => (
              <div key={index} className="store-card">
                <h3 className="store-name">{store.name}</h3>
                <p className="store-address">
                  <span role="img" aria-label="location">
                    📍
                  </span>{" "}
                  {store.address}
                </p>
                <p className="store-rating">
                  <span role="img" aria-label="star">
                    ⭐
                  </span>{" "}
                  {store.rating === "No rating available"
                    ? store.rating
                    : store.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
=======
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
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
  );
};

export default IngredientFinder;
