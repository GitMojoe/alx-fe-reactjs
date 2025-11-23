import {BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css'
function App() {
  return (
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe Details Page */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
  );
}

// Wrapper component to get the recipeId from URL and pass to RecipeDetails
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10); // Convert id to number if IDs are numbers
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
