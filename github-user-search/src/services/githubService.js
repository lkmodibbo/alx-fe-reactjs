import axios from "axios";

// Fetch detailed info for a single user (used for profile display)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

// Advanced search users by username, location, and min repos
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Build GitHub search query
    let query = "";
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
    );

    // response.data.items is the array of users
    return response.data.items || [];
  } catch (error) {
    console.error("Error searching users", error);
    throw error;
  }
};
