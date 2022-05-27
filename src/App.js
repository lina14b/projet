 
import './App.css';
import {Switch,Route, BrowserRouter} from 'react-router-dom'

import React,{ useState } from 'react'
import Home from './Components/Home';
import Add from './Components/Add';
import Fav from './Components/Fav';
import { Navbar } from './Components/Navbar';
function App() {
  const [movie,setMovie]=useState([]);   
  const [Favorite,setFavorite]=useState([]);   

  function AddMovie(title,link,dateS) {
    const newMovie = {
      
      title:title,
      link:link,
      dateS:dateS,
    };
    console.log("new"+title);
    setMovie(movie.concat(newMovie));
  }
  function AddFavorite(title,link,dateS) {
    const newFav = {
      
      title:title,
      link:link,
      dateS:dateS,
    };
    console.log("fav"+title+link+dateS);
    setFavorite(Favorite.concat(newFav));
  }
  return ( <div>
       <BrowserRouter>       
       <Navbar />
         <Switch>

           <Route    exact path="/" >  <Home  AddFavorite={AddFavorite}movies={movie}/> </Route>  
           <Route   path="/Add">    <Add AddMovie={AddMovie}/>  </Route>
           <Route   path="/Fav" >  <Fav favs={Favorite} />  </Route>
          </Switch>
         </BrowserRouter>   </div> );
  
}

export default App;
