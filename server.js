import express from "express"
import movies from "./data/Movieset.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import connectDatabase from "./Mongodb.js";
import movieRoute from "./Routes/MovieRoutes.js"
connectDatabase();
const app=express(); 
app.use("/api/import",ImportData) 
app.use("/api/movies",movieRoute) 
app.use(notFound)
app.use(errorHandler)
/*app.get('/', (req,res)=>{
    try{
        //async
          // await Thing.find({})
    
         res.send("API is running")
         //.then(result=>{res.send(result)})
    }
    catch(err){
        console.log(err)
    }
}) */

//get all 
/*
app.get('/api/movies', (req,res)=>{
    try{
        //async
          // await Thing.find({})
    
         res.json(movies)
         //.then(result=>{res.send(result)})
    }
    catch(err){
        console.log(err)
    }
}) */
//get one
/*app.get('/api/movies/:id', (req,res)=>{
    try{ const movie=movies.find((p)=>p._id===req.params.id);

        //async
          // await Thing.find({})
    
         res.json(movie)
         //.then(result=>{res.send(result)})
    }
    catch(err){
        console.log(err)
    }
})*/
app.listen(5000,(req,res)=>{console.log("Serveu en marche!")

})