// Imports
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Loader
import { DotWave } from '@uiball/loaders'
// Redux Toolkit
import { useDispatch, useSelector } from 'react-redux'
import {
   fetchAsyncMovieOrShowDetails,
   getSelectedMovieOrShow,
   removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice'
// Styles
import './MovieDetails.scss'

const MovieDetails = () => {
   const dispatch = useDispatch()
   const { imdbID } = useParams()
   const data = useSelector(getSelectedMovieOrShow)
   console.log(data)
   useEffect(() => {
      dispatch(fetchAsyncMovieOrShowDetails(imdbID))
      return () => {
         dispatch(removeSelectedMovieOrShow())
      }
   }, [dispatch, imdbID])

   return (
      <div className='movie-section'>
         {Object.keys(data).length === 0 ? (
            <DotWave size={47} speed={1} color='white' />
         ) : (
            <>
               <div className='section-left'>
                  <div className='movie-title'>
                     <h1>{data.Title}</h1>
                  </div>
                  <div className='movie-rating'>
                     <div>
                        <span>
                           <i className='fa fa-star' /> IMDB
                           Rating:{' '}
                        </span>
                        <span>{data.imdbRating}</span>
                     </div>
                     <div>
                        <span>
                           <i className='fa fa-thumbs-up' />{' '}
                           IMDB Votes:
                        </span>
                        <span>{data.imdbVotes}</span>
                     </div>
                     <div>
                        <span>
                           <i className='fa fa-film' />{' '}
                           Runtime:
                        </span>
                        <span>{data.Runtime}</span>
                     </div>
                     <div>
                        <span>
                           <i className='fa fa-calendar' />{' '}
                           Year:
                        </span>
                        {data.Year}
                        <span></span>
                     </div>
                  </div>
                  <div className='movie-plot'>
                     <p>{data.Plot}</p>
                  </div>
                  <div className='movie-info'>
                     <div>
                        <span>Director: </span>
                        <span>{data.Director}</span>
                     </div>
                     <div>
                        <span>Stars: </span>
                        <span>{data.Actors}</span>
                     </div>
                     <div>
                        <span>Genres: </span>
                        <span>{data.Genre}</span>
                     </div>
                     <div>
                        <span>Languages: </span>
                        <span>{data.Language}</span>
                     </div>
                     <div>
                        <span>Awards: </span>
                        <span>{data.Awards}</span>
                     </div>
                  </div>
               </div>
               <div className='section-right'>
                  <img src={data.Poster} alt={data.Title} />
               </div>
            </>
         )}
      </div>
   )
}

export default MovieDetails
