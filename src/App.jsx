import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function App() {

  const [query , setQuery] = useState("");
  // const [userdata , setUserdata] = useState(null);
  const [error , setError] = useState("");



  const handleClick =  async function fetchData(){
    try {

      const url = await axios.get(`https://api.github.com/search/users?q=${query}`);
      // setUserdata(url.data);
      console.log(url.data);
      
    } catch (error) {
      // setUserdata(null);
      setError("\n"+error.message);

    }
  }


  return (
    <div>

      <div className='bg-gray-100 min-h-screen flex flex-col items-center p-6'>
          <h1 className='text-2xl md:text-4xl mb-6 font-bold text-center p-4'>GitHub Profile Search</h1>

          <div className='flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto '>
            <input type="text" placeholder='Enter Username...' 
            className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e)=> setQuery(e.target.value)}
            />
            <button onClick={handleClick}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>Search</button>

           
          </div>

           {error && (<p> {error} </p>)}

          {/* { 
            userdata && (

            <div className='mt-6 bg-white flex flex-col  items-center justify-center shadow-lg p-6 rounded-lg w-full max-w-sm mx-auto text-center'>
                <a href={userdata.html_url}>
                  <img src={userdata.avatar_url} alt="user profile image" 
                className='w-32 h-32 rounded-full'/>
                </a>
                <h2>{userdata.name || userdata.login}</h2>
                <p className='text-gray-600'> Joined : {new Date(userdata.created_at).toLocaleDateString()} </p>
                <p className='text-gray-600'>{userdata.bio}</p>

                <a href={userdata.html_url }
                rel='noreferrer'
                target='_blank'
                className='mt-3 bg-green-600 p-3 rounded-lg  px-4 text-white hover:bg-green-700'>
                  Visit Profile
                </a>


            </div>
            )
          } */}

      </div>


      

    </div>
  )
}


