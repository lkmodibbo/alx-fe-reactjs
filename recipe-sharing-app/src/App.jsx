import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

function App() {

  return (
  <BrowserRouter>
    <Routes>
       <Route
          path="/"
          element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
    </Routes>  
  </BrowserRouter>
  )
}

export default App
