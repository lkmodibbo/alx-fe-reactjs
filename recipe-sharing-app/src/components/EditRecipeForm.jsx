// components/EditRecipeForm.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  // Find recipe by ID
  const recipe = recipes.find((r) => r.id === Number(id));

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(Number(id), { title, description });
    navigate(`/recipes/${id}`); // go back to details page
  };

  if (!recipe) return <p className="text-red-500 text-center">Recipe not found!</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-black text-white shadow-xl rounded-3xl p-8 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">✏️ Edit Recipe</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-900"
        placeholder="Edit Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-3 border border-gray-600 rounded-xl bg-gray-900"
        placeholder="Edit Description"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-600"
      >
        ✅ Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
