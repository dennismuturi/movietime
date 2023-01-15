import {Routes, Route} from 'react-router-dom'
import Favorites from './Favorites';
import MovieDetails from './MovieDetails';
import Movies from "./Movies";
import NavBar from "./NavBar";



export default function HomePage (){
 

    return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Movies />}/>
        <Route path= "/movie/:id" element={<MovieDetails/>}/>
        <Route path= "/favorites" element={<Favorites/>}/>
      </Routes>
     
    </>

    );
}