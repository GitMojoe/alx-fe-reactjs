// src/services/githubService.js
import axios from "axios";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
/**
 * Fetch GitHub users using advanced search criteria
 * @param {Object} params - { username, location, minRepos }
 * @returns {Array} - Array of user objects
 */
const fetchUserData = async ({ username = "", location = "", minRepos = 0 }) => {
  try {
    // Build query array
    const queryParts = [];

    if (username) queryParts.push(`${username} in:login`); // search in login only
    if (location) queryParts.push(`location:${location}`);
    if (minRepos > 0) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join("+");

    if (!query) return [];

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=20`;
    const response = await axios.get(url);

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error.message);
    return [];
  }
};

export default fetchUserData;