import {
   createSlice,
   createAsyncThunk,
} from '@reduxjs/toolkit'
import movieApi from '../../api/movieApi'
import { key } from '../../api/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
   'movies/fetchAsyncMovies',
   async () => {
      const sample = 'london'

      const response = await movieApi.get(
         `?apikey=${key}&s=${sample}&type=series`
      )
      return response.data
   }
)

const initialState = {
   movies: {},
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
         console.log('success')
         return { ...state, movies: payload }
      },
      [fetchAsyncMovies.rejected]: () => {
         console.log('failed')
      },
   },
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer
