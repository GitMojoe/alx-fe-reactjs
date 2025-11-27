// src/pages/SearchPage.jsx
import React from "react";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
  return (
    <div>
      <h1>Search for a GitHub user</h1>
      <SearchBar />
      <p style={{ marginTop: 12, color: "#555" }}>
        Type a username (e.g. "torvalds" or "octocat") and press Search.
      </p>
    </div>
  );
}