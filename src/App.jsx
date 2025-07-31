import React from 'react'
import MovieCard from './Components/MovieCard'

const App = () => {
  return (
    <>
    <MovieCard movie={{title: "Tim's Film",release_data: "2024"}}/>
    <MovieCard movie={{title: "Tim's Film",release_data: "2024"}}/>
    </>
  )
}

export default App
