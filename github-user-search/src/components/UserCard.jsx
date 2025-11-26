// src/components/UserCard.jsx
import React from "react";

export default function UserCard({ user }) {
  if (!user) return null;

  return (
    <div style={{
      marginTop: 20,
      padding: 18,
      borderRadius: 8,
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      maxWidth: 720
    }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <img src={user.avatar_url} alt="avatar" width={96} height={96} style={{ borderRadius: "50%" }} />
        <div>
          <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
          <p style={{ margin: "6px 0 0 0" }}>{user.bio}</p>
          <p style={{ margin: "6px 0 0 0", fontSize: 14, color: "#555" }}>
            <strong>Location:</strong> {user.location || "—"} • <strong>Repos:</strong> {user.public_repos}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
        <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}
