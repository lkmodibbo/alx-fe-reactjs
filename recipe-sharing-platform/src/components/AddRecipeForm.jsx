import React, { useState } from 'react'


export const AddRecipeForm = ({ setRecipes }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('')
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {}
        if (!title.trim()) tempErrors.title = "Recipe title is required";
        if (!ingredients.trim()) tempErrors.ingredients = "ingredients are required";
        if (!steps.trim()) tempErrors.steps = "Prepations Steps are required"

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === "0"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate())
            return;

        setErrors({});
    }

    if(!title || !ingredients || !setSteps ){
        setErrors('All fields are required');
        return;
    }
    const newRecipe = {
        id: Date.now(),
        title,
        summary: steps.substring(0, 50) + "...",
        image: "https://via.placeholder.com/150",
        ingredients,
        steps
    }
    setRecipes(prev => [...prev, newRecipe]);
    
    console.log('new recipe added', newRecipe)
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors('')

  return (
   <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
    <h2 className="text-2xl font-bold text-center">Add a new Recipe</h2>
    { errors && (
        <div className="text-red-600 font-medium">{errors}</div>
    )}
    <div>
        <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
        <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='Enter recipe title'
        />
    </div>
    <div>
        <label
            className="block text-gray-700 font-medium mb-1"
        >Ingredients</label>
        <textarea 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder='List ingredients'
        />
    </div>
    <div>
        <label className="block text-gray-700 font-medium mb-1">Prepation Steps</label>
        <textarea 
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder='Wrie the steps here...'
        />
    </div>
    <button 
        type='submit'
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >   
        Submit Recipe
    </button>
   </form>
  )
}
