import './global.css'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import HeroComponent from '../components/HeroComponent/HeroComponent'

function App() {
  return (
    <>
      <NavBar />
        <HeroComponent />
      <Footer />
    </>
  )
}

export default App
