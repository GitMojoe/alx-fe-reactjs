import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  // Hooks must be called at the top level
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // Determine which recipes to display
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.length === 0 && <p>No recipes found.</p>}

      {displayRecipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* View Details Button */}
          <Link to={`/recipe/${recipe.id}`}>
            <button style={{ marginTop: '5px' }}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
