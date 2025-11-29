// src/services/githubService.js
import axios from "axios";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username to search
 * @returns {Object|null} - User data or null if not found/error
 */
export default async function fetchUserData(username) {
  if (!username) return null;

  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);

    // Return the user data from the API response
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error.message);
    return null; // Return null if user not found or any error occurs
  }
}
