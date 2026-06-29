import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react";
import MovieCard from './components/MovieCard';

const App = () => {

useEffect(()=>{
  fetchMovie(search);
},[])

const [search, setSearch] = useState("")

  const [movies, setMovies] = useState([])
  const API_KEY = "dcf12cae"

  const fetchMovie = async(title)=>{
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
    );

    const data=await res.json();
    if(data.Search){
      setMovies(data.Search)
    }
    else {
    setMovies([]);
  }
  }

 return (
   <div className="min-h-screen bg-gradient-to-r from-[#13005A] via-[#4C0070] to-[#8B0000] flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white pt-7">
        Movie Space
      </h1>

<div className='flex gap-69 bg-gray-600 mt-10 w-[600px] px-5 py-3 rounded-full outline-none text-lg bg-gray-700 text-white'>
      <input
        type="text"
        placeholder="Search for movies" 
        value={search}
        onChange={(e)=>
          setSearch(e.target.value) }   
         className='flex-1 bg-transparent outline-none placeholder-gray-300'/>


       <Search className='cursor-pointer'
        onClick={()=>{
        fetchMovie(search);
       }} />
       </div>
       
       <div className="flex flex-wrap ml-9  gap-8 mt-10">
     {movies.map((movie) => (
  <MovieCard key={movie.imdbID} movie={movie} />
))}
</div>
    </div>
 )
}

export default App
