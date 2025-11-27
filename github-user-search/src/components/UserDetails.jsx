import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const data = await fetchUserData(username);
      setUser(data);
      setLoading(false);
    }

    getUser();
  }, [username]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10 text-xl">Loading user...</p>
    );
  }

  if (!user) {
    return (
      <p className="text-center text-red-500 mt-10 text-xl">
        User not found.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mb-4"
          />

          <h1 className="text-3xl font-bold">{user.name || "No Name"}</h1>
          <p className="text-gray-700">@{user.login}</p>

          {user.bio && (
            <p className="mt-3 text-center text-gray-600">{user.bio}</p>
          )}

          <div className="flex gap-6 mt-4 text-sm text-gray-700">
            <p>📍 {user.location || "Unknown"}</p>
            <p>📦 {user.public_repos} Repos</p>
            <p>👥 {user.followers} Followers</p>
            <p>🔄 {user.following} Following</p>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="mt-5 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
