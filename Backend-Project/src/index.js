// import mongoose from "mongoose";
// import { DB_NAme } from "./constants";
import  connectDb from "./db/index.js"

import dotenv from "dotenv"

dotenv.config({
    path:'/env'
})
connectDb()











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