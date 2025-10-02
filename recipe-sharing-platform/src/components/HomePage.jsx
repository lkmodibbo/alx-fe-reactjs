import React, { useEffect, useState } from 'react'
import recipeData from '../data.json'

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData)
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='bg-white rounded-lg shadow-md p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300'>
          <h1 className='text-lg font-bold mt-2'>{recipe.title}</h1>
          <img src={recipe.image} className='w-full rounded-t-lg' />
          <p className='text-gray-600'>{recipe.summary}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage