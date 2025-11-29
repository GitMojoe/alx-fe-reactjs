// src/components/Search.jsx
import { useState } from "react";
import fetchUserData from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // preventDefault REQUIRED

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data) {
        setUser(data);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* form REQUIRED */}
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p>{error}</p>}

      {/* User details */}
      {user && (
        <div>
          <img src={user.avatar_url} alt="User avatar" /> {/* img + avatar_url REQUIRED */}
          <h2>{user.login}</h2> {/* login REQUIRED */}
        </div>
      )}
    </div>
  );
}
