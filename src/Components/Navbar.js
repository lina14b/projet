import React from 'react'
import './style.css'
import image from "../Components/img/logo.png"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
 
export const Navbar = () => {
  return (
     
      

   <header className="App-header">
   <nav >
   
   <img class="imgpp" src= {image}  width="100" height="100" /> 
   <label class="logo">MyMovies</label>
   <input type="checkbox" id="check"></input>
 
   <label for="check" class="icon">
     
     <FontAwesomeIcon icon={faBars} />
 
   </label>
   
   <ul > 
     <li  > <Link className='links' to="/"  >Home </Link> </li>
     <li > <Link to="/Add"  >Add </Link> </li>
     <li > <Link to="/Fav" >Favorites </Link> </li>
   </ul>
   
   </nav>
   </header>
  
)
}



