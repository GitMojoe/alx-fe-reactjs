// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>GitHub User Search</h1>
      <p>Search GitHub users by username and view basic profile info.</p>
      <nav style={{ marginTop: 12 }}>
        <Link to="/search">Go to Search</Link>
      </nav>
    </div>
  );
}
