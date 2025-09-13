import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const getRecommendations = useRecipeStore((state) => state.getRecommendations);
  const recommendations = getRecommendations();

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-3">📌 Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-3 mb-2 rounded bg-white">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
