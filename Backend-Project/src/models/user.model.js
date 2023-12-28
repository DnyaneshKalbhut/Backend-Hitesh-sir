
import mongoose, {Schema} from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new Schema(
    {
     username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
     },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
     },
     fullname:{
        type:String,
        required:true,
        index:true,
     },
     avatar:{
        type:String,  // url cloudnary
        required:true
     },
     coverimage:{
        type:String,  // url cloudnary
     },
     watchHistory:{
        type: Schema.Types.ObjectId,
        ref:"Video"
     },
     password:{
        type:String,
        required:true
     },
     refreshToken:{
        type:String,
     }
    },{timestamps:true}
    )

    userSchema.pre("save",function (next) {
    if (!this.isModified("password")) return next();   
     this.password = bcrypt.hash(this.password,10);
      next();
    })

    userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password)
    }

      userSchema.methods.genrateAcessToken=function(){
      return jwt.sign(
            {
               _id:this._id,
               username:this.username,
               email:this.email,
               fullname:this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
               expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }
         )
      }
      userSchema.methods.genrateRefreshToken=function(){
         return jwt.sign(
            {
               _id:this._id,
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
               expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }
         )
      }

    export const User = mongoose.model('User',userSchema)  