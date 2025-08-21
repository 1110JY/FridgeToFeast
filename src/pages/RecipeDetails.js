import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/RecipeDetails.css";

// RecipeDetails component to display the details of a recipe
const RecipeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const recipe = location.state;

  useEffect(() => {
    if (!recipe || !recipe.id) {
      setLoading(false);
      return;
    }

    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipe.id}/information`,
          {
            params: { apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY },
          }
        );
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipe]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipeDetails) {
    return (
      <div className="error-page">
        <h1>Recipe Not Found</h1>
        <button
          className="recipe-detail-back-button"
          onClick={() => navigate("/recipes")}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Display the recipe details
  return (
    <div className="recipe-detail-page">
      <button
        className="back-button"
        onClick={() => navigate("/recipes")}
      >
        ← Go back
      </button>
      <h1>{recipeDetails.title}</h1>
      <div className="tags">
        {recipeDetails.dishTypes.map((type, index) => (
          <span key={index} className="tag">
            {type}
          </span>
        ))}
        {recipeDetails.cuisines.map((cuisine, index) => (
          <span key={index} className="tag">
            {cuisine}
          </span>
        ))}
      </div>
      <img
        src={recipeDetails.image}
        alt={recipeDetails.title}
        className="recipe-image"
      />
      <div className="recipe-stats">
        <div>
          <p>Prep Time</p>
          <p>{recipeDetails.preparationMinutes || "N/A"} mins</p>
        </div>
        <div>
          <p>Cook Time</p>
          <p>{recipeDetails.cookingMinutes || "N/A"} mins</p>
        </div>
        <div>
          <p>Servings</p>
          <p>{recipeDetails.servings}</p>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ul className="card">
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.original}
          </li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol className="card">
        {recipeDetails.analyzedInstructions.length > 0 &&
          recipeDetails.analyzedInstructions[0].steps.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
