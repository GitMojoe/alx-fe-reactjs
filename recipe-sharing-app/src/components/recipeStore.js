import {create} from 'zustand';

const useRecipeStore = create(set => ({
  // Recipes
  recipes: [],

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId]
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set(state => {
      // Simple mock: pick recipes from favorites randomly
      const recommended = state.recipes.filter(
        recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Existing actions
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedData) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      favorites: state.favorites.filter(favId => favId !== id) // remove deleted from favorites
    })),

  // Search / Filter
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  // Replace all recipes
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
