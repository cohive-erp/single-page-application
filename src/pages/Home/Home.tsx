import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import SectionOne from '../../components/SectionOne/SectionOne.tsx'
import SectionTwo from '../../components/SectionTwo/SectionTwo.tsx'
import SectionThree from '../../components/SectionThree/SectionThree.tsx'
import SectionFour from '../../components/SectionFour/SectionFour.tsx'
import SectionFive from '../../components/SectionFive/SectionFive.tsx'
import { Helmet } from 'react-helmet'
import Hero from '../../components/Hero/Hero.tsx'

function Home() {
  return (
    <div className='bg-slate-200'>
      <Helmet>
        <title>Início | Cohive</title>
      </Helmet>
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
