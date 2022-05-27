import React from "react";
 import './cstyle.css'  
const Card = ( { movie }) => {
   return(
    (
        <div className="card">
            <img
        src={
          movie.image
        }
        alt="affiche film"
      />
      <h2>{movie.title}</h2>
        <h2>test</h2>
        </div>
        )

   )
  }

  

export default Card