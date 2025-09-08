import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function App() {

  const [username , setUsername] = useState("");

  const handleClick =  async function fetchData(){

    const options = {
    method: 'GET',
    url: 'https://github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com/profiles',
    params: {
      profileUrl: `https://github.com/${username}`
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com'
    }
  };

    try {
	    const response = await axios.request(options);
	    console.log(response.data);
    } catch (error) {
	    console.error(error);
    }

  }
  return (
    <div>

      <h1>GitHub Profile Search</h1>

      <div>
        <input type="text" placeholder='Enter Username...' onChange={(e)=> setUsername(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
      </div>

    </div>
  )
}
