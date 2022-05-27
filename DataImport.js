import  express from "express";
import User from "./Models/UserModel.js"; 
import users  from "./data/users.js";
import Movie from "./Models/MovieModel.js";
import movies from "./data/Movieset.js";
import asyncHandler from "express-async-handler"
const ImportData=express.Router() 

ImportData.post("/user",asyncHandler(
    async(req,res)=>{await User.remove({})
const importUser=await User.insertMany(users) 
res.send({importUser})
})) 

ImportData.post("/movies",asyncHandler(
    async(req,res)=>{await Movie.remove({})
const importMovie=await Movie.insertMany(movie) 
res.send({importMovie})
})) 

export default ImportData