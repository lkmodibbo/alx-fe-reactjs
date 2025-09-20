import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

export default function Search() {
  // Form state
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  // Results state
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pagination
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPage(1);

    try {
      const users = await searchUsers({ username, location, minRepos, page: 1 });

      // Fetch extra details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );

      setResults(detailedUsers);
    } catch (err) {
      setError("Error fetching search results");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);

      const users = await searchUsers({ username, location, minRepos, page: nextPage });

      // Fetch extra details for each user
      const detailedUsers = await Promise.all(
        users.map(async (user) => {
          const details = await fetchUserData(user.login);
          return { ...user, ...details };
        })
      );

      setResults((prev) => [...prev, ...detailedUsers]);
    } catch (err) {
      setError("Error loading more users");
      console.log(err)
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">GitHub Advanced Search</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="text"
          placeholder="Location (e.g., Nigeria)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="p-4 border rounded-lg shadow-sm flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
                  <p className="text-sm text-gray-600">
                    Location: {user.location || "Not specified"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Public Repos: {user.public_repos}
                  </p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}

            {/* Load More Button */}
            <button
              onClick={handleLoadMore}
              className="w-full bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900"
            >
              Load More
            </button>
          </div>
        ) : (
          !loading && <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
