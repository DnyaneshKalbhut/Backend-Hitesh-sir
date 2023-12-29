// import mongoose from "mongoose";
// import { DB_NAme } from "./constants";
import express from "express";
import  connectDb from "./db/index.js"
const app =express();
import dotenv from "dotenv"

dotenv.config({
    path:'/env'
})
connectDb()
.then(()=>{

    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`a server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("connection is break with Database",err);
})










// import express from "express";
// const app =express();

// (async()=>{
// try {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAme}`)
//   app.on("error",(error)=>{
//   console.log("error ",error);
//   throw error;
//   })

//   app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on port ${process.env.PORT}`);
//   })
// } catch (error) {
//     console.error("Error" , error);
//     throw error;
// }
// })()