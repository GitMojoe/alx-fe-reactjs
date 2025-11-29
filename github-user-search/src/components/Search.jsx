// src/components/Search.jsx
import { useState } from "react";
import fetchUserData from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    const data = await fetchUserData({
      username,
      location,
      minRepos: minRepos ? parseInt(minRepos) : 0,
    });

    if (data.length === 0) {
      setError("No users found with the given criteria.");
    } else {
      setUsers(data);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub Advanced User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />

        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-4 py-2 w-full md:w-1/6"
          min="0"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
