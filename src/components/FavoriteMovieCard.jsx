import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../context/MovieContext';

export default function FavoriteMovieCard({id,titleText,titleType, releaseDate}){
    const {day, month ,year} = releaseDate;

    const {removeFromFavorites} =useContext(MovieContext);

 
    return (

<div className="flex flex-wrap flex--movie" >
    
  <div className="rounded overflow-hidden shadow-lg m-4  flex-1 justify-between">
    <div className="md:flex-shrink-0">
      
    </div>
    <div className="flex flex-col flex-grow px-8 py-4 bg-purple-600">
      <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">{titleText}</h3>
      <h6 className="font-bold text-lg md:text-lg lg:text-lg  text-orange-900  ">
        {titleType} 
      </h6>
      <span className="movie--year text-xl lg:text-sm lg:mb-4">{day}/{month}/{year}</span>
      <div className="flex-grow">
      </div>
      <div className="button-container flex justify-between mb-2">
      <Link  to={`/movie/${id}`} className="text-lg mr-4 lg:text-sm text-gray-200 "
      >
        More Info</Link>
  <button 
        onClick={(event) =>{
            removeFromFavorites(id);
      
}}
className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">
  
   Remove
  
  </button>
      </div>
    </div>
  </div>
  </div>
    );
}