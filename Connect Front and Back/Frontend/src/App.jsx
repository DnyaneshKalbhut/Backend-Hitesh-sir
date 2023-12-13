import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes') //proxy concept
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
// cors =>  cross origin request having diffent port url considered cors
return (
  <>
    <h1>Dnyanesh & Fullstack </h1>
    <p>Jokes: {jokes.length}</p>

    {jokes.map((joke) => (
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))}
  </>
);
}
export default App
