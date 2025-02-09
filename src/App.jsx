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
function App() {
  const { movies } = useContext(MoviesContext);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {
              movies.length > 0 &&
              (
                <Element name="movies-section">
                  <MoviesSection />
                </Element>
              )
            }
          </>
        } />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Toaster />
      <ToastNotifications />
    </>
  )
}

export default App
