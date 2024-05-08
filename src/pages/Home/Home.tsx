import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import HeroComponent from '../../components/HeroComponent/HeroComponent.tsx'

function Home() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
        <HeroComponent />
      <Footer />
    </div>
  )
}

export default Home
