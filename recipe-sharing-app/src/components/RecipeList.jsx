import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const searchTerm = useRecipeStore(state => state.searchTerm)

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      {recipesToDisplay.length > 0 ? (
        recipesToDisplay.map(recipe => (
          <div key={recipe.id} className="border p-4 mb-3 rounded bg-gray-100">
            <h3 className="font-bold text-lg">{recipe.title}</h3>
            <p>{recipe.description}</p>
            
            {/* 👇 Link to recipe details page */}
            <Link 
              to={`/recipes/${recipe.id}`} 
              className="text-blue-500 underline"
            >
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  )
}

export default RecipeList
