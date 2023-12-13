import express from "express";

const app = express()

app.get('/',(req,res)=>{
res.send('server is ready')
})

app.get('/api/jokes' , (req ,res)=>{
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:"this is a joke"
        },
        {
            id:2,
            title:"Another joke",
            content:"this is a 2 joke"
        },
        {
            id:3,
            title:"another joke",
            content:"this is a 3 joke"
        }
  ,      {
            id:4,
            title:"A another joke",
            content:"this is a 4 joke"
        },
        {
            id:5,
            title:"Aanother joke",
            content:"this is a 5 joke"
        }
    ]
    res.send(jokes)
})
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at https:/localhost:${port}`);
})