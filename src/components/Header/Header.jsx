// Imports
import React from 'react'
import { Link } from 'react-router-dom'
import userImage from '../../images/user.png'
//Styles
import './Header.scss'

const header = () => {
   return (
      <div className='header'>
         <Link to='/'>
            <div className='logo'>Movie Rating</div>
         </Link>
         <div className='user-image'>
            <img
               src={userImage}
               alt='userImage'
            />
         </div>
      </div>
   )
}

export default header
