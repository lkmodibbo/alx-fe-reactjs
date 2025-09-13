import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

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
              <RecipeDetails />
              <FavoritesList />
              <RecommendationsList />
            </div>
          }
        />
    </Routes>  
  </BrowserRouter>
  )
}

export default App
