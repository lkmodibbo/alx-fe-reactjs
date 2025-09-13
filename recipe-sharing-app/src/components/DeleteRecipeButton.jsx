// components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(id);
      navigate("/"); // back to homepage
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
    >
      🗑️ Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
