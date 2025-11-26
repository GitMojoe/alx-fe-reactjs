// src/components/SearchBar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const username = input.trim();
    if (!username) return;
    // navigate to a route that will show the user details, e.g. /user/:username
    navigate(`/user/${encodeURIComponent(username)}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        aria-label="GitHub username"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 8, flex: 1 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>Search</button>
    </form>
  );
}
