import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import './index.css'
import RecipeDetail from './components/RecipeDetail'
import { useState } from 'react'
import recipeData from '../src/data.json'
import AddRecipeFom from './components/AddRecipeForm'

function App() {
  const [recipes, setRecipes] = useState(recipeData)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipe={recipes}/>} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path='/add' element={<AddRecipeFom setRecipe={setRecipes}/>}/>
      </Routes>
    </Router>
  )
}

export default App
