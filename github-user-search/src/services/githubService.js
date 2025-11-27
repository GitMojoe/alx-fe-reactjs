const BASE = "https://api.github.com";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // optional
import axios from "axios";

export async function searchGithubUsers({ username, location, minRepos }) {
  try {
    let query = "";

    // Username
    if (username) query += `${username} `;

    // Location
    if (location) query += `location:${location} `;

    // Minimum repositories
    if (minRepos) query += `repos:>=${minRepos}`;

    // Prepare the final query
    const url = `${BASE_URL}?q=${encodeURIComponent(query.trim())}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items; // GitHub places user results inside "items"
  } catch (error) {
    console.error("GitHub Search Error:", error);
    return [];
  }
}


// Fetch a single GitHub user's data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};