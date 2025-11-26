import { useState } from "react";
import { useGithubStore } from "../store/githubStore";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const advancedSearch = useGithubStore((state) => state.advancedSearch);

  const handleSearch = () => {
    advancedSearch({ username, location, minRepos });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        GitHub Advanced Search
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Username field */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Username</label>
          <input
            type="text"
            placeholder="e.g. torvalds"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location field */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Location</label>
          <input
            type="text"
            placeholder="e.g. Ghana"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Minimum Repositories */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Min Repositories
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="w-full mt-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
