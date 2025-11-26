// src/pages/UserPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGithubUser } from "../services/githubService";
import UserCard from "../components/UserCard";

export default function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError(null);
    setUser(null);

    fetchGithubUser(username)
      .then((data) => setUser(data))
      .catch((err) => {
        setError(err.message || "Error fetching user");
      })
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div>
      <h1>Profile: {username}</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}
