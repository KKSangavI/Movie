import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Favorites from './Pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './Context/MovieContext'

const App = () => {
  return (
    <>
    <div>
     <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
    </div>
    </>
  )
}

export default App
