import { useMovieStore } from "../store/movieStore";
import MovieCard from "./MovieCard";

function MoviesList(){
const movies = useMovieStore((state)=>state.movies);
const search = useMovieStore((state)=>state.search);

const filteredMovies =movies.filter((movie)=>movie.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="movies-grid">
            {filteredMovies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>

    );


}
export default MoviesList;