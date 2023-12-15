import mongoose from "mongoose"

const productSchema= new mongoose.Schema({
description:{
type:String,
required:true
},
name:{
  type:String,
  required:true
  },
  productImg:{
    type:String,
    required:true
    },
    price:{
      type:Number,
      required:true
      },
      category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
        },
        owner:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User",
          required:true
          }
},{timestamps:true})



export const Product = new mongoose.model("Product",productSchema)
