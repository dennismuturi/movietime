import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import MovieDetails from './MovieDetails';
import Movies from "./Movies";
import NavBar from "./NavBar";



export default function HomePage (){
    const [movies, setMovies]=useState([]);

    
    
   
    useEffect (()=>{
      const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ede024d95msh74b9ff22d949bc2p1c012fjsn18e6eb670044',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
   
        fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
        .then(response => response.json())
        .then(data =>  setMovies(data.results))
        .catch(err => console.error(err));   

    },[])

    return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Movies movies={movies}/>}/>
        <Route path= "/movie/:id" element={<MovieDetails movies={movies}/>}/>
      </Routes>
     
    </>

    );
}