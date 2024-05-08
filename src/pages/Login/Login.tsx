import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import Login from '../../components/Login/Login.tsx'

function LoginPage() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pt-16 p-32'>
      <Login />
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
