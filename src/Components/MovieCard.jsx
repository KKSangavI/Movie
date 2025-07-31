import React from 'react'

const MovieCard = () => {
    function onFavoriteClick(){
        alert("clicked")
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={MovieCard.url} alt='{movie.titel}'/>
            <div className='movie-overlay'>
               <button className='favorite-btn'onClick={onFavoriteClick}>❤️ </button> 
            </div>

        </div>
        <div className='movie-info'>
            <h3>{MovieCard.title}</h3>
            <p>{MovieCard.release_date}</p>
        </div>
    </div>

  )
}

export default MovieCard