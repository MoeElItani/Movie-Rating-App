// Imports
import React from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollTop'
// Styles
import './App.scss'

function App() {
   return (
      <div className='App'>
         <Router>
            <ScrollToTop />
            <Header />
            <div className='container'>
               <Routes>
                  {/* Home Page */}
                  <Route
                     path='/'
                     exact
                     element={<Home />}
                  />
                  {/* Movie Details Page */}
                  <Route
                     path='/movie/:imdbID'
                     element={<MovieDetails />}
                  />
                  {/* 404 Page Not Found  / Wrong URL */}
                  <Route
                     path='*'
                     element={<PageNotFound />}
                  />
               </Routes>
            </div>
            <Footer />
         </Router>
      </div>
   )
}

export default App
