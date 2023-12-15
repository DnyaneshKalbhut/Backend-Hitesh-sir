import mongoose from "mongoose"

const hospitalSchema= new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  address1:{
    type:String,
    required:true
  },
  address2:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true
  },
  specializedIn:[{
    type:String,
    required:true
  }],
  },{timestamps:true} )

  export const Hospital = new mongoose.model("Hospital",hospitalSchema)