import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { searchIngredients, getEastAsianRecipes } from "../api/spoonacular";
import "../styles/Recipe.css";

// Recipes page component
const Recipes = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [generatedRecipes, setGeneratedRecipes] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    protein: false,
    vegetables: false,
    grains_and_noodles: false,
    sauces_and_condiments: false,
    spices_and_seasonings: false,
  });

  const navigate = useNavigate();

  // Ingredient library for browsing
  const ingredientLibrary = {
    protein: ["Chicken", "Pork", "Beef", "Duck", "Shrimp", "White Fish", "Salmon", "Tofu (Firm)", "Tofu (Silken)", "Edamame", "Eggs"],
    vegetables: ["Bok Choy", "Napa Cabbage", "Spinach", "Carrot", "Onion", "Radish", "Potato", "Shiitake Mushrooms", "Button Mushrooms", "Garlic", "Ginger", "Scallions"],
    grains_and_noodles: ["Jasmine Rice", "Sushi Rice", "Brown Rice", "Rice Noodles", "Udon", "Ramen", "Egg Noodles", "Dumpling Wrappers", "Rice Paper"],
    sauces_and_condiments: ["Light Soy Sauce", "Dark Soy Sauce", "Oyster Sauce", "Fish Sauce", "Hoisin Sauce", "Gochujang", "Miso", "Rice Vinegar", "Sesame Oil", "Honey"],
    spices_and_seasonings: ["White Pepper", "Sea Salt", "Five-Spice Powder", "Cinnamon", "Chili Flakes", "Chili Powder", "Sesame Seeds", "Cornstarch"],
  };

  // Event handler for searching ingredients
  const handleSearch = async (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 1) {
      try {
        const results = await searchIngredients(e.target.value);
        setSearchResults(results.map((item) => item.name));
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients((prev) => [...prev, ingredient]);
    }
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients((prev) => prev.filter((item) => item !== ingredient));
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Generate recipes based on selected ingredients
  const generateRecipes = async () => {
    if (selectedIngredients.length === 0) return;
    console.log("Selected Ingredients:", selectedIngredients);
    try {
      const recipes = await getEastAsianRecipes(selectedIngredients);
      console.log("Fetched Recipes:", recipes);
      if (recipes.length > 0) {
        setGeneratedRecipes(recipes);
      } else {
        alert("No East Asian recipes found for your selected ingredients. Try adding more!");
      }
    } catch (error) {
      console.error("Error generating recipes:", error);
    }
  };

  const viewRecipeDetails = (recipe) => {
    navigate("/recipe-details", { state: recipe });
  };

  const formatCategoryName = (category) => {
    return category
      .replace(/_/g, " ") 
      .replace(/\b[aA]nd\b/g, "&")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    // Framer Motion animations
    // Page container
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
        <motion.h1 className="recipe-title">Recipe Generator</motion.h1>
        <motion.p className="recipe-description">
          Enter the ingredients you have and we'll find the matching East Asian
          recipes for you. Use the search bar below or browse categories to
          select your ingredients.
        </motion.p>

        {/* Search Bar */}
        <form className="form">
          <button>
            <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <input
            className="input"
            placeholder="Search for ingredients (e.g., Chicken, Soy Sauce, Ginger)"
            required
            type="text"
            value={searchInput}
            onChange={handleSearch}
          />

          <button className="reset" type="button" onClick={() => setSearchInput("")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <motion.div className="search-results">
            <h2>Search Results</h2>
            <div className="result-list">
              {searchResults.map((ingredient) => (
                <motion.div
                  key={ingredient}
                  className={`result-item ${selectedIngredients.includes(ingredient) ? "selected" : ""}`}
                  onClick={() => addIngredient(ingredient)}
                >
                  {ingredient}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Selected Ingredients */}
        <motion.div className="selected-ingredients">
          <h2 className="selected-ingredients-title">Selected Ingredients</h2>
          <div className="ingredient-tags">
            {selectedIngredients.map((ingredient) => (
              <motion.span key={ingredient} className="ingredient-tag">
                {ingredient}
                <button onClick={() => removeIngredient(ingredient)}>×</button>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Browse Ingredients Section */}
        <motion.div className="browse-ingredients-container">
          {Object.entries(ingredientLibrary).map(([category, ingredients]) => (
            <div key={category} className="category-section">
              <motion.button className="category-button" onClick={() => toggleSection(category)}>
                <div className="title-container">
                  <span>{formatCategoryName(category)}</span>
                  <em>(Select at least one)</em>
                </div>
                <span className="arrow">{expandedSections[category] ? "▼" : "▶"}</span>
              </motion.button>

              {expandedSections[category] && (
                <motion.div className="category-content">
                  {ingredients.map((ingredient) => (
                    <label key={ingredient} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedIngredients.includes(ingredient)}
                        onChange={() =>
                          selectedIngredients.includes(ingredient)
                            ? removeIngredient(ingredient)
                            : addIngredient(ingredient)
                        }
                      />
                      {ingredient}
                    </label>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Generate Button */}
        <button className="generateButton" onClick={generateRecipes}>
          Generate Recipes
          <div className="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 16.172l5.364-5.364 1.414 1.414L12 19 5.222 12.222l1.414-1.414L12 16.172z" fill="currentColor"></path>
            </svg>
          </div>
        </button>

        {/* Display Generated Recipes */}
        {generatedRecipes.length > 0 ? (
          <motion.div className="generated-recipes">
            <h2>Recipes You Can Make</h2>
            <div className="recipes-grid">
              {generatedRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <img
                    src={recipe.image || "placeholder-image.jpg"}
                    alt={recipe.title}
                    className="recipe-img"
                  />
                  <div className="recipe-content">
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <p className="recipe-description">{recipe.summary}</p>
                    <button className="recipe-button" onClick={() => viewRecipeDetails(recipe)}>
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          generatedRecipes.length === 0 &&
          selectedIngredients.length > 0 && (
            <motion.div className="no-recipes">
              <p>No recipes match your ingredients. Try adding more!</p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Recipes;