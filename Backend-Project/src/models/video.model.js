import mongoose ,{Schema} from "mongoose";

const videoSchema=mongoose.Schema(
    {
      videoFile:{
        type:String,
        required:true
      },
      thumbnail:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      duration:{
        type:Number,
        required:true
      },
      views:{
        type:Number,
        required:true
      },
      isPublished:{
        type:Boolean,
        required:true
      },
      owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
        required:true
      },
    },{timestamp:true}
)


export const Video = mongoose.model('Video',videoSchema);