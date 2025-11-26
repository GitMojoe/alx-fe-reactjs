import { useMovieStore } from "../store/movieStore";

function SearchBar(){
    const search = useMovieStore((state)=>state.search)
    const setSearch= useMovieStore((state)=>state.setSearch)

    return(

        <div style={{textAlign: "center", marginBottom: "20px"}}>

            <input 
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

        </div>

    );


}
export default SearchBar;
