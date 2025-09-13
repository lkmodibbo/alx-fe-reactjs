import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useRecipeStore = create(
  persist(

    (set) => ({   
      recipes: [],

      addRecipe: (newRecipe) => 
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),
      
      deleteRecipe: (id) =>
        set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


      updateRecipe: (id, updates) => 
        set((state) => ({
          recipes:state.recipes.map((r) => (r.id === id ? {...r, ...updates} : r))
        })),

        setRecipes: (recipes) => set({ recipes }),
        clearRecipes: () => set({recipes: []})
      
    }), 
    {
      name: 'recipe-storage',
      getStorage: () => localStorage
    }
  
  )
  );
 