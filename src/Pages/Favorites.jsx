import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Components/MovieCard';
const Favorites = () => {
  const {favorites} = useMovieContext();
   if (Favorites) {
    return(
      <div className='favorites'>
        <h2>Your favorites movies</h2>
        <div className='movies-grid'>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key= {movie.id}/>
          ))}
        </div>
      </div>
    )
   }

  return (
    <div className='favorites-empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to favorites and they will appear here!</p>
    </div>
  )
}

export default Favorites