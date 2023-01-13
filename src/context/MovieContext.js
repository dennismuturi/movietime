import React,{useState} from "react";

const [favorites,setFavorites]=useState([]);
const MovieContext = React.createContext({
    favorites,
    setFavorites,
    addToFavorite: () => {}
});
