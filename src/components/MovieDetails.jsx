import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
export default function MovieDetails ()  {
    const {movies} =useContext(MovieContext);

    const {id} =useParams()
    
    const movie = movies.find(movie => movie.id === id)

    return (
        <MovieCard
            id={movie.id}
            titleText={movie.titleText}
            titleType={movie.titleType}
            url={movie.url}
            releaseDate={movie.releaseDate}
             
            />
    );
}