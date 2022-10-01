// Imports
import React, { useEffect } from 'react'
// Components
import MovieListing from '../MovieListing/MovieListing'
// Redux Toolkit
import { useDispatch } from 'react-redux'
import {
   fetchAsyncMovies,
   fetchAsyncShows,
} from '../../features/movies/movieSlice'

const Home = () => {
   const dispatch = useDispatch()
   const name = 'movie'
   useEffect(() => {
      dispatch(fetchAsyncMovies(name))
      dispatch(fetchAsyncShows(name))
   }, [dispatch])

   return (
      <>
         <div className='banner-img'></div>
         <MovieListing />
      </>
   )
}

export default Home
