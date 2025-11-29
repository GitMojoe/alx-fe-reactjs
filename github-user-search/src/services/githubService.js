// src/services/githubService.js
import axios from "axios";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`); // ✅ uses "get"
    return response.data;
  } catch (error) {
    return null;
  }
};
