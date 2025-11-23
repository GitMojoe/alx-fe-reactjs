// Wrapper component to get the recipeId from URL and pass to RecipeDetails
import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10); // Convert id to number if IDs are numbers
  return <RecipeDetails recipeId={recipeId} />;
};

export default RecipeDetailsWrapper;