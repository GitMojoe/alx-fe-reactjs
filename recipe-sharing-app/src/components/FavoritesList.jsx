import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Get raw arrays from store
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // Compute favorite recipes outside of the selector
  const favorites = favoritesIds
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // remove null if recipe was deleted

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
