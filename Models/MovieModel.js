import mongoose from "mongoose"; 
/*const mongoose=require('mongoose')
const thingSchema=mongoose.Schema ({
title:{type:String,required:true},
description: {type:String,required:true},
imageurl:{type:String,required:true},
userid :{type:String,required:true},
price:{type:Number,required:true},



})
const Thing=mongoose.model('thing',thingSchema)
module.exports=Thing*/
const userSchema=mongoose.Schema(
{ 
    _id:{type:String,
  require:true,

       },
rank:{type:Number,
require:true,
      
         },
title:{type:String,
require:true,
     
      },
year:{type:Number,
        require:true,
     
       },
image:{type:String,
        require:true,
              
       },

            }
 
   
)

const Movie=mongoose.model("Movie",userSchema)
export default Movie