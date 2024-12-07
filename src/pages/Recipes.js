import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Recipe.css';

const Recipes = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState(['Chicken', 'Tofu', 'Pork']);
  const [expandedSections, setExpandedSections] = useState({
    meat: true,
    vegetables: false,
    spices: false,
    grains: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(prev => prev.filter(item => item !== ingredient));
  };

  return (
    <motion.div
      className="recipe-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="recipe-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h1
          className="recipe-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Recipe Generator
        </motion.h1>
        
        <motion.p
          className="recipe-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Enter the ingredients you have and we'll find the matching recipes for you. Use the search bar below or browse categories to select your ingredients.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="search-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search for ingredients (e.g., chicken, soy sauce, ginger)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </motion.div>

        {/* Selected Ingredients */}
        <motion.div
          className="selected-ingredients"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="selected-ingredients-title">Selected Ingredients</h2>
          <div className="ingredient-tags">
            {selectedIngredients.map(ingredient => (
              <motion.span
                key={ingredient}
                className="ingredient-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {ingredient}
                <button onClick={() => removeIngredient(ingredient)}>×</button>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Ingredient Categories */}
        <motion.div
          className="categories-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Meat Section */}
          <div className="category-section">
            <motion.button 
              className="category-button"
              onClick={() => toggleSection('meat')}
              whileTap={{ scale: 0.95 }}
            >
              Meat (Select at least one)
              <span className="arrow">{expandedSections.meat ? '▼' : '▶'}</span>
            </motion.button>
            
            {expandedSections.meat && (
              <motion.div
                className="category-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedIngredients.includes('Chicken')}
                    onChange={() => {}}
                  />
                  Chicken
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedIngredients.includes('Pork')}
                    onChange={() => {}}
                  />
                  Pork
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={selectedIngredients.includes('Beef')}
                    onChange={() => {}}
                  />
                  Beef
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={selectedIngredients.includes('Tofu')}
                    onChange={() => {}}
                  />
                  Tofu
                </label>
              </motion.div>
            )}
          </div>

          {/* Other sections */}
          {['vegetables', 'spices', 'grains'].map(section => (
            <div key={section} className="category-section">
              <motion.button
                className="category-button"
                onClick={() => toggleSection(section)}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} (Select at least one)
                <span className="arrow">{expandedSections[section] ? '▼' : '▶'}</span>
              </motion.button>
            </div>
          ))}
        </motion.div>

        {/* Generate Button */}
        <motion.button
          className="generate-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Recipes
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Recipes;
