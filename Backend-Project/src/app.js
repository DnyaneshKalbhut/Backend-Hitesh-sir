import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


app.use (cors({// it is use for middlewares and configuration
    origin:process.env.CORS_ORIGIN,
     credentials:true
}))  

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))//in urls if they contains like + or %20 to encode them 
app.use(express.static("public")) //it use for public assets like pdf
app.use(cookieParser())


export {app}