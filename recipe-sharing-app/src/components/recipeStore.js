import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),
  filteredRecipes: [],
  filterRecipes: () => set(state => {
    return {
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe].filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.recipes.filter(recipe => recipe.id !== id).filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
