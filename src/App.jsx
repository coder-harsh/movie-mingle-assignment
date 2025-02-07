import './App.css'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Toaster />
    </>
  )
}

export default App
