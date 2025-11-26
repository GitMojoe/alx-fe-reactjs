import { create } from "zustand";

export const useGithubStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  // --- Advanced Search Function ---
  advancedSearch: async ({ username, location, minRepos }) => {
    set({ loading: true, error: null });

    try {
      // Build dynamic GitHub query
      let query = "";

      if (username) query += `${username} in:login `;
      if (location) query += `location:${location} `;
      if (minRepos) query += `repos:>=${minRepos} `;

      const url = `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&per_page=30`;

      const res = await fetch(url, {
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_API_KEY
            ? `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`
            : undefined,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to search users");
      }

      const data = await res.json();

      set({
        users: data.items || [],
        loading: false,
        error: null,
      });
    } catch (error) {
      set({
        users: [],
        loading: false,
        error: error.message,
      });
    }
  },
}));
