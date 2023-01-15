import HomePage from "./components/HomePage";
import MovieContext from "./context/MovieContext";
import { useState, useEffect} from "react";
function App() {


const [favorites,setFavorites]=useState([]);
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



const addToFavorites = (favorite) => {
  if(favorites.find(i => i.id === favorite.id)){
    alert('Movie already in favorites');
    return;
  }
  setFavorites([...favorites,favorite])


}

const removeFromFavorites = (favoriteId) => {
  //setFavorites(favorites.filter(i => i !== favorite));

  const newFavorites = favorites.filter(i => i.id !== favoriteId)
  setFavorites(newFavorites)



}



  return (
    <MovieContext.Provider value ={{
     movies,
     favorites,
     setFavorites,
      addToFavorites,
      removeFromFavorites, 
      }}> 
   <HomePage/>
   </MovieContext.Provider>
  );
}

export default App;
