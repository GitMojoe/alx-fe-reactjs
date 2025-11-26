const BASE = "https://api.github.com";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // optional

export async function fetchGithubUser(username) {
  if (!username) throw new Error("Username is required");

  const headers = API_KEY
    ? { Authorization: `Bearer ${API_KEY}` }
    : {};

  const res = await fetch(`${BASE}/users/${encodeURIComponent(username)}`, {
    headers,
  });

  if (!res.ok) {
    const error = new Error("GitHub user not found");
    error.status = res.status;
    throw error;
  }

  return res.json();
}
