import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { listMovie } from "../Redux/Actions/MovieActions";
const Home = (props) => { 
// const [moviesData, setMoviesData] = useState([]);
    
  const p1=props.movies.map( (item,index)=>(
  <div className="card" key={index}> 
         <img className="images" src={item.link} alt=""><button type = 'submit'  onClick={(e) => { e.preventDefault();props.AddFavorite(item.title,item.link,item.dateS);} } >&#10084;&#65039;
 </button></img>
         <div>
         {item.title} <br></br>{"("} {item.dateS} {")"}</div>
         

         
            
  
        
        </div>
  
  ) 
  
  )
  const dispatch=useDispatch()
  const movieList=useSelector((state)=>state.movieList)
  const {loading,console,movies}=movieList
  useEffect(() => {  
      dispatch(listMovie())},[dispatch]);
 /* movies.map((movie)=>(<div key={movie._id}>
  <img src={movie.image}></img>
  <button  type = 'submit'  onClick={(e) => {
          e.preventDefault();
         props.AddFavorite(movie.title,movie.image,movie.year);
          }
        } >fav </button>
</div>)) */
const p=movies.map((movie,index)=>( 
  <div className="card" key={index}> 
         <div class="container">
         <img className="images" src={movie.image}/>
           <button className="fav" type = 'submit'  onClick={(e) => { e.preventDefault();props.AddFavorite(movie.title,movie.image,movie.year);} } >&#10084;&#65039;
    </button >      </div>

         <div>
         {movie.title} <br></br> {"("} {movie.year} {")"}</div>
         

         
            
  
        
        </div>
  
 ))
  return (
    <div>     
        <div className="result">   </div>
        <br></br> 
        {p1}
        {p}
        </div> 
           
        
     
  )
}

export default Home