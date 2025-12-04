// src/components/UserCard.jsx
export default function UserCard({ user }) {
  return (
    <div className="border rounded p-4 text-center shadow hover:shadow-lg transition">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 mx-auto rounded-full mb-2"
      />
      <h2 className="text-xl font-semibold">{user.login}</h2>
      {user.type && <p className="text-gray-500">{user.type}</p>}

      {user.html_url && (
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Profile
        </a>
      )}
    </div>
  );
}
