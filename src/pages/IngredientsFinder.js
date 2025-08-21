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
  );
};

export default IngredientFinder;
