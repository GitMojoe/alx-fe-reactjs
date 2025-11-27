import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // required by your instruction
    if (!username.trim()) return;

    navigate(`/results/${username}`);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* Form is now included as required */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-4 rounded-md"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
