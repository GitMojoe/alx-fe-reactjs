import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';


function App() {
  return (
    
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Search Input */}
                <SearchBar />

                {/* Add Recipe */}
                <AddRecipeForm />

                {/* Recipe List */}
                <RecipeList />

                {/* Favorites & Recommendations */}
                <div style={{ marginTop: '30px' }}>
                  <FavoritesList />
                  <RecommendationsList />
                </div>
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

export default App;
