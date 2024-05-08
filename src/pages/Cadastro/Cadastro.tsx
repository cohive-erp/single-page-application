import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import Cadastro from '../../components/Cadastro/Cadastro.tsx'

function SignUp() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pt-8 pb-16 p-32'>
        <Cadastro />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
