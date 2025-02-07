import './App.css'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Pages/Home'
import ToastNotifications from './Components/ToastNotifications'
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Toaster />
      <ToastNotifications />
    </>
  )
}

export default App
