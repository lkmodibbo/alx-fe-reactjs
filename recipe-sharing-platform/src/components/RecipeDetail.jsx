import React from 'react'
import { useParams } from 'react-router-dom'
import recipeData from '../data.json'

  const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find(r => r.id === parseInt(id))

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
    </div>
  )
}

export default RecipeDetail