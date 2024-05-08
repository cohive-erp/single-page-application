import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import HeroComponent from '../../components/HeroComponent/HeroComponent.tsx'
import SectionOne from '../../components/SectionOne/SectionOne.tsx'
import SectionTwo from '../../components/SectionTwo/SectionTwo.tsx'

function Home() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
      <HeroComponent />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  )
}

export default Home
