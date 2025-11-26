import {create} from "zustand";

export const useMovieStore=create((set)=>({
    movies: [],
    search: "",

    setMovies: (movies)=>set({movies}),
    setSearch: (value)=>set({search:value}),
}));