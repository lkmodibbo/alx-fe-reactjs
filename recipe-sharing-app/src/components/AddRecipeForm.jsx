import React, { useState } from "react";
import useRecipeStore from "./recipeStore";


const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required!");
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-black text-white shadow-2xl rounded-2xl p-8 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center tracking-wide text-yellow-400">
        🍳 Add a New Recipe
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title ✨"
        className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description 📝"
        className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition min-h-[120px]"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition transform duration-300 shadow-lg"
      >
        🚀 Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
