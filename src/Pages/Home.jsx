import React from 'react'
import MovieCard from '../Components/MovieCard';
import "../css/Home.css"
import { getPopularMovies,searchMovies } from '../Services/api';
import { useState,useEffect,useContext } from 'react';

const Home = () => {
    const [searchQuery , setSearchQuery] = useState("")
    const [movies,setMovies] = useState([])
    const [error,setError] = useState(null)
    const [loading,setloading] = useState(true)


    useEffect(() =>{
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setloading(false)
            }
        }
        loadPopularMovies(

        )
    },[])
        
    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim())return
        if (loading) return
    
    setloading(true)
    try{
       const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    }
    catch (err){
        console.log(err)
        setError("Failed to search movies...")
        }
    finally{
                setloading(false)
            }

        }       
  return (
    <div className='home'>
        <form onSubmit ={handleSearch} className='search-form'>
            <input type ="text" placeholder='Search for movies....'className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>  
             <button type="submit" className='search-button'>Search</button>   
              </form>
              {error && <div className='error-message'>{error}</div>}
              {loading ?(<div className='loading'>Loading...</div>):(<div className='movies-grid'>
            {movies.map((movie)=>(
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>)}
        
    </div>
  )
}

export default Home