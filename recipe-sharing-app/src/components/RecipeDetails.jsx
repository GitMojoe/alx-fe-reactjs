import React from 'react';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        style={{
          backgroundColor: isFavorite ? '#ffc107' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        {isFavorite ? 'Unfavorite' : 'Add to Favorites'}
      </button>

      {/* Edit and Delete */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
