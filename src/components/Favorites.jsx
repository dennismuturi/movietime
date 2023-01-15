import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import FavoriteMovieCard from "./FavoriteMovieCard";

export default function Favorites (){

    const gradientStyle ={
        background:  "linear-gradient(to right, #434343 0%, black 100%)"
    }

    
    const {favorites} =useContext(MovieContext);

return (

<div className="py-20 bg-black " style={gradientStyle}>
<div className="container mx-auto px-6 text-white ">
    
<h1 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 p-6"> My Favorites</h1>
 <div className="container grid grid-cols-2 gap-4">

   {
    favorites.map((movie)=>(
        <FavoriteMovieCard
        key={movie.id}
        id={movie.id}
        titleText={movie.titleText}
        titleType={movie.titleType}
        url={movie.url}
        releaseDate={movie.releaseDate}
        buttonId={movie.id}

        
        />
    
    ))
   }

   </div>
   </div>
   </div>
);
}