import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SectionOne from '../../components/SectionOne/SectionOne'
import SectionTwo from '../../components/SectionTwo/SectionTwo'
import SectionThree from '../../components/SectionThree/SectionThree'
import SectionFour from '../../components/SectionFour/SectionFour'
import SectionFive from '../../components/SectionFive/SectionFive'
import Hero from '../../components/Hero/Hero'

function Home() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default Home
