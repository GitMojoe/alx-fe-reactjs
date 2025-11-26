const BASE_URL = "https://api.github.com/search/users";

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
