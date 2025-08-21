import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const searchIngredients = async (query) => {
  const response = await axios.get(`${BASE_URL}/food/ingredients/autocomplete`, {
    params: {
      apiKey: API_KEY,
      query,
      number: 10, 
    },
  });
  return response.data;
};

export const getEastAsianRecipes = async (ingredients) => {
  try {
    // List of East Asian cuisines
    const eastAsianCuisines = ['Chinese', 'Japanese', 'Korean', 'Thai', 'Vietnamese'];

    // Fetch recipes for each cuisine
    const allRecipes = await Promise.all(
      eastAsianCuisines.map(async (cuisine) => {
        const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
          params: {
            apiKey: API_KEY,
            includeIngredients: ingredients.join(','),
            cuisine, // Dynamically apply each cuisine
            number: 5, // Fetch up to 5 recipes per cuisine
          },
        });
        return response.data.results || []; // Return results or an empty array
      })
    );

    // Flatten the arrays of recipes into one array
    const combinedRecipes = allRecipes.flat();

    console.log('Fetched East Asian Recipes:', combinedRecipes);
    return combinedRecipes;
  } catch (error) {
    console.error('Error fetching East Asian recipes:', error);
    return [];
  }
};


