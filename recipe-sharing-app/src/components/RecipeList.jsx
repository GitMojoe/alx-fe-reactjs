import { Link } from 'react-router-dom';
import {useRecipeStore} from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {/* View Details Link */}
          <Link to={`/recipe/${recipe.id}`}>
            <button style={{ marginTop: '5px' }}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
