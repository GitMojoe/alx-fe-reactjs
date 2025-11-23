import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',          // search input from user
  filteredRecipes: [],     // filtered results

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Update an existing recipe by ID
  updateRecipe: (id, updatedData) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),

  // Replace the whole recipe list
  setRecipes: (recipes) => set({ recipes }),

  // Set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Compute filtered recipes based on searchTerm
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }))
}));

export default useRecipeStore;