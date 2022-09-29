import {
   createSlice,
   createAsyncThunk,
} from '@reduxjs/toolkit'
import movieApi from '../../api/movieApi'
import { key } from '../../api/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
   'movies/fetchAsyncMovies',
   async () => {
      const movieText = 'hulk'
      const response = await movieApi.get(
         `?apiKey=${key}&s=${movieText}&type=movie`
      )
      return response.data
   }
)

export const fetchAsyncShows = createAsyncThunk(
   'movies/fetchAsyncShows',
   async () => {
      const seriesText = 'hulk'
      const response = await movieApi.get(
         `?apiKey=${key}&s=${seriesText}&type=series`
      )
      return response.data
   }
)

const initialState = {
   movies: {},
   shows: {},
}

const movieSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
      addMovies: (state, { payload }) => {
         state.movies = payload
      },
   },
   extraReducers: {
      [fetchAsyncMovies.pending]: () => {
         console.log('pending')
      },
      [fetchAsyncMovies.fulfilled]: (
         state,
         { payload }
      ) => {
         console.log('Movies Success')
         return { ...state, movies: payload }
      },
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
         console.log('Shows | Success')
         return { ...state, shows: payload }
      },
      [fetchAsyncMovies.rejected]: () => {
         console.log('Moves | Failed')
      },
   },
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer
