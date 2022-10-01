// Imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, redirect } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import userImage from '../../images/user.png'
//Styles
import './Header.scss'

const Header = () => {
   const [search, setSearch] = useState('')
   const dispatch = useDispatch()
   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(fetchAsyncMovies(search))
      dispatch(fetchAsyncShows(search))
   }
   return (
      <div className='header'>
         <div className='logo'>
            <Link to='/'>Movie Rating</Link>
         </div>
         <div className='search-bar'>
            <form onSubmit={submitHandler}>
               <input
                  type='text'
                  value={search}
                  onChange={(e) =>
                     setSearch(e.target.value)
                  }
                  placeholder='Search'
               />
               <button type='submit'>
                  <i className='fa fa-search'></i>
               </button>
            </form>
         </div>
         <div className='user-image'>
            <img src={userImage} alt='userImage' />
         </div>
      </div>
   )
}

export default Header
