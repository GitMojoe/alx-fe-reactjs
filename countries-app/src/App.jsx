import { useEffect } from 'react';
import { useMovieStore } from './store/movieStore';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MovieList';

import './App.css'

function App() {
  const setMovies = useMovieStore((state)=>state.setMovies)

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [setMovies]);

  return (
    <div>
      <h1>Movies App</h1>
      <SearchBar />
      <MoviesList />

      </div>
  );
}

export default App;
