import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import HeroComponent from '../../components/HeroComponent/HeroComponent.tsx'
import SectionOne from '../../components/SectionOne/SectionOne.tsx'
import SectionTwo from '../../components/SectionTwo/SectionTwo.tsx'
import SectionFive from '../../components/SectionFive/SectionFive.tsx'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div className='bg-slate-200'>
      <Helmet>
        <title>Início | Cohive</title>
      </Helmet>
      <NavBar />
      <HeroComponent />
      <SectionOne />
      <SectionTwo />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default Home
