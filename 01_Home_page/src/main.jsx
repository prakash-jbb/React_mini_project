import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Hero_Section'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <HeroSection/>
  </React.StrictMode>,
)
