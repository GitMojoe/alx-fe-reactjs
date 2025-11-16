import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
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
}));
