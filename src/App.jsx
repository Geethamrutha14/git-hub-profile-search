import { useState } from 'react'
import axios from 'axios'
import SearchResults from './components/SearchResults';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';


export default function App() {

  const [query , setQuery] = useState("");
  const [results , setResults] = useState([]);
  const [error , setError] = useState("");
  const [loading , setLoading] = useState(false);

  const handleClick =  async ()=> {
    if(query.trim() === ""){
      setLoading(false);
      setResults([]);
      setError("");
      return;
    }
    try {
      setLoading(true);
      const url = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setResults(url.data.items || []);
      setError("");
      
    } catch (error) {
      setError("No User Found"+"\n"+error.message);
      setResults([]);
    }
    finally{
      setLoading(false);
    }
  }

  const handleSearchClick = ()=> {
    handleClick();
  }

  useEffect(()=>{
    if(query.trim() === ""){
      setResults([]);
      setError("");
      return;
    }
    
    const delay = setTimeout( ()=>{
      handleClick()
    } , 500)

    return ()=> clearTimeout(delay)


  },[query]);

  return (
    <div>

      <div className='bg-gray-100 min-h-screen flex flex-col items-center p-6'>
          <h1 className='text-2xl md:text-4xl mb-6 font-bold text-center p-4'>GitHub Profile Search</h1>

          <div className='flex flex-col sm:flex-row gap-2 w-full max-w-md mx-auto '>
            <input type="text" placeholder='Enter Username...' 
            className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e)=> setQuery(e.target.value)}
            />
            <button onClick={handleSearchClick}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
              {
                loading ? <LoaderCircle className='w-5 h-5 animate-spin'/> : "Search"
              }
            </button>

           
          </div>

           {error && (<p> {error} </p>)}
  

          {
            query.length === 0 ? <p></p> : <SearchResults results={results}/>
          }

          

      </div>


      

    </div>
  )
}


