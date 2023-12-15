import mongoose from "mongoose"

const medicalSchema= new mongoose.Schema({

  name:{
    type:String,
    required:true
  }
  },{timestamps:true} )

  export const Medical = new mongoose.model("Medical",medicalSchema)