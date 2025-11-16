import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import {Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={
        <>
          <RecipeList />
          <AddRecipeForm />
        </>
      } />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
    </Router>
  );
}

export default App;
