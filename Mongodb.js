import mongoose from "mongoose"
const connectDatabase=async()=>{
try{const connection=await mongoose.connect('mongodb+srv://lina:lina@cluster0.st42f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
,{useUnifiedTopology:true,
 useNewUrlParser:true,
})
console.log("Connected")
}
catch(error){
    console.log(`error${error.message}`)
process.exit(1)
}

} 
export default connectDatabase