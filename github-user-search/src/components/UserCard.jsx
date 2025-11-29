// src/components/UserCard.jsx

export default function UserCard({ user }) {
  if (!user) return null; // safety check

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        maxWidth: "400px",
        textAlign: "center",
      }}
    >
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />

      {/* Username + Real Name */}
      <h2>{user.name || user.login}</h2>
      <p style={{ color: "gray" }}>@{user.login}</p>

      {/* Bio */}
      {user.bio && <p style={{ marginTop: "10px" }}>{user.bio}</p>}

      <hr style={{ margin: "20px 0" }} />

      {/* Stats */}
      <p>
        <strong>Followers:</strong> {user.followers} &nbsp;•&nbsp;
        <strong>Following:</strong> {user.following}
      </p>

      <p>
        <strong>Public Repos:</strong> {user.public_repos}
      </p>

      {/* Location (optional) */}
      {user.location && <p>📍 {user.location}</p>}

      {/* Blog link (if exists) */}
      {user.blog && (
        <p>
          🔗{" "}
          <a href={user.blog} target="_blank" rel="noreferrer">
            Website
          </a>
        </p>
      )}
    </div>
  );
}
