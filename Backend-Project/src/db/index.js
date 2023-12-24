import mongoose from "mongoose";
import { DB_NAme } from "../constants.js";




const connectDb = async ()=>{
    try {
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAme}`)
        console.log(`\n MongoDb connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error occured :",error );
        process.exit(1);
    }
}

export default connectDb;