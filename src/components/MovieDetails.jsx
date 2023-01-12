import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
export default function MovieDetails ({movies})  {
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