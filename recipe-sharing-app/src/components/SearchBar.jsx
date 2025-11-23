import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // update filtered recipes dynamically
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '14px'
      }}
    />
  );
};

export default SearchBar;
