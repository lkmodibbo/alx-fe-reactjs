// store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  // Setters
  setSearchTerm: (term) => set({ searchTerm: term }),
  setRecipes: (recipes) => set({ recipes }),

  // Derived state (filter dynamically)
  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
