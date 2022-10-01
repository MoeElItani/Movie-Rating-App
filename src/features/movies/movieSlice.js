import {
   createSlice,
   createAsyncThunk,
} from '@reduxjs/toolkit'
import movieApi from '../../api/movieApi'
import { key } from '../../api/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
   'movies/fetchAsyncMovies',
   async (name) => {
      const response = await movieApi.get(
         `?apiKey=${key}&s=${name}&type=movie`
      )
      return response.data
   }
)

export const fetchAsyncShows = createAsyncThunk(
   'movies/fetchAsyncShows',
   async (name) => {
      const response = await movieApi.get(
         `?apiKey=${key}&s=${name}&type=series`
      )
      return response.data
   }
)

export const fetchAsyncMovieOrShowDetails =
   createAsyncThunk(
      'movies/fetchAsyncMovieOrShowDetails',
      async (id) => {
         const response = await movieApi.get(
            `?apiKey=${key}&i=${id}&Plot=full`
         )
         return response.data
      }
   )

const initialState = {
   movies: {},
   shows: {},
   details: {},
}

const movieSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
      removeSelectedMovieOrShow: (state) => {
         state.details = {}
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
      [fetchAsyncMovieOrShowDetails.fulfilled]: (
         state,
         { payload }
      ) => {
         console.log('Details | Success')
         return { ...state, details: payload }
      },
      [fetchAsyncMovies.rejected]: () => {
         console.log('Moves | Failed')
      },
   },
})

export const { removeSelectedMovieOrShow } =
   movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) =>
   state.movies.details

export default movieSlice.reducer
