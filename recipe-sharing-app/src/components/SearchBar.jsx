// components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterRecipes(); // update filtered list
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      className="px-4 py-2 border rounded-lg w-full"
    />
  );
};

export default SearchBar;
