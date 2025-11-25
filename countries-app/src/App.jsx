import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Filter movies based on search
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Movies App</h1>
      <p>Total Movies: {filteredMovies.length}</p>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "300px", borderRadius: "5px" }}
        />
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image?.medium} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>Rating: {movie.rating?.average || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
