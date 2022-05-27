import express from "express";
import asyncHandler from "express-async-handler";
import Movie from "../Models/MovieModel.js"; 

const movieRoute =express.Router();
// http://localhost:5000/api/movies 
movieRoute.get("/",
asyncHandler(async(req,res)=>{
 const movies=await Movie.find({});
 res.json(movies)   
})

);  

/*// http://localhost:5000/api/movies 
movieRoute.get("/:id",
asyncHandler(async(req,res)=>{
 const movie=await Movie.findById(req.params.id);
 if(movie) {res.json(movie)}
 else {res.status(404);
     throw new Error("Movie not Found")}
 //res.json(movies)   
})

);  */

export default movieRoute