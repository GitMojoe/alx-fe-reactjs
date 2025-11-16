import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <SearchBar />
          <RecipeList />
          <AddRecipeForm />
        </>
      } />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
