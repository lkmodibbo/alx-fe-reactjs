import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const searchTerm = useRecipeStore(state => state.searchTerm)

  // If there's a search term, use filteredRecipes; otherwise, show all recipes
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      {recipesToDisplay.length > 0 ? (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )
}

export default RecipeList
