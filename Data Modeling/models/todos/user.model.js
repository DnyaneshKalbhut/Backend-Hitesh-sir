import moongoose from "mongoose";

const userSchema = new moongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  
    email:{
   type:String,
   required:true,
   lowercase:true,
   unique:true
    },
    password:{
      type:String,
      required:true
    }
  },{timestamps:true});


export const User =moongoose.mode("User",userSchema )