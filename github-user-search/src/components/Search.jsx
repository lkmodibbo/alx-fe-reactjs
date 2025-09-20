import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const name = username.trim();
    if (!name) {
      setError("Please enter a username");
      setUser(null);
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(name);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-x1 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub Search</h1>

      <form onSubmit={submitForm} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-white" style={{ marginTop: 12 }}>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width="120"
            style={{ borderRadius: 8 }}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2x1 font-semibold text-center">{user.name || user.login}</h2>
          {user.bio && <p className="text-gray-600 text-center mt-2">{user.bio}</p>}
          <p className="text-center mt-2">
            <strong>Repos:</strong> {user.public_repos} &nbsp;|&nbsp;
            <strong>Followers:</strong> {user.followers}
          </p>
          <div className="text-center mt-4"> 
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            >
            View on GitHub
          </a>
          </div>
        </div>
      )}
    </div>
  );
}
