import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function App() {

  const [username , setUsername] = useState("");

  const handleClick =  async function fetchData(){
    try {

      const url = await axios.get(`https://api.github.com/users/${username}`);
      console.log(url.data);
      
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div>

      <div className='bg-gray-100 min-h-screen flex flex-col items-center p-6'>
          <h1 className='text-2xl md:text-4xl mb-6 font-bold text-center p-4'>GitHub Profile Search</h1>

          <div className='flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto '>
            <input type="text" placeholder='Enter Username...' 
            className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e)=> setUsername(e.target.value)}
            />
            <button onClick={handleClick}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Search</button>
          </div>



      </div>

    </div>
  )
}


