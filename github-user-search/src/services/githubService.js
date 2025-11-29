// src/services/githubService.js

export default async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return null; // user not found or API error
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
