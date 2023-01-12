import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";


export default function Movies (){
    const gradientStyle ={
        background:  "linear-gradient(to right, #434343 0%, black 100%)"
    }

    const [movies, setMovies]=useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ede024d95msh74b9ff22d949bc2p1c012fjsn18e6eb670044',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
   
    
   
    useEffect (()=>{
        fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
        .then(response => response.json())
        .then(data =>  setMovies(data.results))
        .catch(err => console.error(err));   

    },[])


      console.log(movies)



    return (
        <div className="py-20 bg-black " style={gradientStyle}>
        <div className="container mx-auto px-6 text-white ">
        
    <h1 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 p-6"> Find Movies, Series, Shorts, Tv Episodes, Music videos </h1>
     <div className="container grid grid-cols-2 gap-4">
   
       {
        movies.map((movie)=>(
            <MovieCard
            key={movie.id}
            titleText={movie.titleText}
            titleType={movie.titleType}
            url={movie.url}
            releaseDate={movie.releaseDate}
            />
        
        ))
       }
    </div>
          
        </div>
        </div>
    );
}