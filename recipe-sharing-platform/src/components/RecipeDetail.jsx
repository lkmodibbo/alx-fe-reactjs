import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import recipeData from '../data.json'

  const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams();
  

  useEffect(() => {
    const Foundrecipe = recipeData.find(r => r.id === parseInt(id))
    setRecipe(Foundrecipe)
  }, [id])

  if (!recipeData) {
    return <h2 className='text-center text-red-500 text-2xl mt-10'>Recipe not Found</h2>
  }

  return (
    <div className='max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10'>
      <h1 
        className='text-3xl font-bold text-gray-800 mb-4 text-center'>{recipe.title}</h1>
      <img 
        className="w-full h-64 object-cover rounded-lg mb-4"
        src={recipe.image} alt="recipe image" />
      <p className='text-gray-600 text-lg leading-relaxed'>{recipe.summary}</p>
      <h2 className='text-2xl font-semibold mb-2'>Ingredients:</h2>
      <ul className='list-disc list-inside mb-4'>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className='text-2xl font-semibold mb-2'>Instructions</h2>
      <ol className='list-decimal list-inside'>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetail