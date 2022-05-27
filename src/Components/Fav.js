import React from 'react'

const Fav = (props) => {
   

  const pl=props.favs.map( (item,index)=>(<div className="card" key={index}>  
   <div class="container"> 
  <img className="images" src={item.link} alt=""/>
   </div>
         {item.title} <br></br>{"("} {item.dateS} {")"}</div>
                 
                    /*<div className="card" key={index}> 
         <img className="images" src={item.link} alt=""> </img>
         <div>
         {item.title} {"("} {item.dateS} {")"}</div>
         

         
            
  
        
        </div> */
  
  ) 
  
  )
  return (
    <div className='favspage'>     <br></br>    <h1>Your Favorites</h1> <br></br> {pl}
    </div>
  )
}

export default Fav