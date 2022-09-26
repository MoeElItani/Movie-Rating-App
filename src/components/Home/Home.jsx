// Imports
import React from 'react'
import { useEffect } from 'react'
// Components
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../api/movieApi'
import { key } from '../../api/movieApiKey'
// Redux Toolkit
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
   const sample = 'la casa'
   const dispatch = useDispatch()
   useEffect(() => {
      const fetchMovies = async () => {
         const response = await movieApi
            .get(`?apikey=${key}&s=${sample}&type=series`)
            .catch((err) => {
               console.log('Error: ', err)
            })
         dispatch(addMovies(response.data))
      }
      fetchMovies()
   }, [dispatch])
   return (
      <>
         <div className='banner-img'></div>
         <MovieListing />
      </>
   )
}

export default Home
