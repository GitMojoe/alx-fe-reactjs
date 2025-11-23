import React, { useEffect, useMemo } from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  // Get raw arrays from the store (stable reference)
  const recommendations = useRecipeStore(state => state.recommendations);
  const recipes = useRecipeStore(state => state.recipes);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Compute full recipe objects using useMemo to cache result
  const recommendedRecipes = useMemo(() => {
    return recommendations
      .map(rec => recipes.find(r => r.id === rec.id))
      .filter(Boolean); // remove nulls
  }, [recommendations, recipes]);

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendedRecipes.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendedRecipes.map(recipe => (
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

export default RecommendationsList;
