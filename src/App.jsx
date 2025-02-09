import './App.css'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Pages/Home'
import ToastNotifications from './Components/ToastNotifications'
import { useContext } from 'react'
import { MoviesContext } from './Context/MoviesContext'
import MoviesSection from './Components/Movies/MoviesSection'
import { Element } from "react-scroll"; // Import react-scroll
import MovieDetails from './Components/Pages/MovieDetails'
import ScrollTop from './Components/ScrollTop'
import ErrorBoundary from './Components/ErrorBoundary'
import Error from './Components/Error'
import About from './Components/Pages/About'
function App() {
  const { movies } = useContext(MoviesContext);
  return (
    <>
      <ScrollTop />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {
              movies.length > 0 &&
              (
                <ErrorBoundary>
                  <Element name="movies-section">
                    <MoviesSection />
                  </Element>
                </ErrorBoundary>

              )
            }
          </>
        } />
        <Route path="/movie-details/:slug/:id" element={<MovieDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Toaster />
      <ToastNotifications />
    </>
  )
}

export default App
