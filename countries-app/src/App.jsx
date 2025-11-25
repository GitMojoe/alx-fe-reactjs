import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div>
      <h1>Movies App</h1>
      <p>Total Movies: {movies.length}</p>

      <div className="movies-grid">
      {movies.map((movie)=>(
        <div key={movie.id} className="movie-card">
          <img src={movie.imag?.medium} alt={movie.name} />
          <h3>{movie.name}</h3>
          <p>Rating: {movie.raing?.average || "N/A"}</p>
      </div>
      ))}
      
    
    </div>
    </div>
  );
}

export default App;
