import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchGithubUsers } from "../services/githubService";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const username = searchParams.get("username") || "";
  const location = searchParams.get("location") || "";
  const minRepos = searchParams.get("minRepos") || "";

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);

      const results = await searchGithubUsers({
        username,
        location,
        minRepos,
      });

      setUsers(results);
      setLoading(false);
    }

    fetchResults();
  }, [username, location, minRepos]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        GitHub User Search Results
      </h1>

      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      )}

      {!loading && users.length === 0 && (
        <p className="text-center text-gray-600 text-lg mt-10">
          No users found. Try adjusting your search filters.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />

            <h2 className="font-bold text-lg">{user.login}</h2>

            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
