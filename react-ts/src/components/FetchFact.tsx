import axios from 'axios';
import React,{useState, useEffect} from 'react'

interface Istate{
  length: number;
  facts: string;
}

const FetchFact:React.FC = () => {
  //getting a fact
  const [first, setFirst] = useState<Istate>({
    length: 0,
    facts: ""
  })

  //getting fact
  const getFact =async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact")
     setFirst({facts: response.data.fact, length:response.data.length })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={getFact} className='btn btn-primary'>Click me</button>
      <p>Random Fact is: {first.facts}</p>
      <p>Length: {first.length}</p>
    </div>
  )
}

export default FetchFact