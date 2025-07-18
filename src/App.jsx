import React from 'react'
import Navbar from './componets/Navbar'
import SignIn from './pages/SignIn'
import { Route, Routes } from 'react-router'
import MovieList from './componets/MovieList'
import MovieSearch from './componets/MovieSearch'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/list' element={<MovieList/>}/>
      <Route path='/search' element={<MovieSearch/>}/>
    </Routes>
    </>
  )
}

export default App
