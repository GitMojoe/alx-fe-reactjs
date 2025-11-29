
function MovieCard({movie}){

    return(
        <div className="movie-card">
        <img src={movie.image?.medium} alt={movie.name} />
        <h3>{movie.name}</h3>
        <p>Rating: {movie.rating?.average || "N/A"}</p>

        </div>
    );
}
export default MovieCard;