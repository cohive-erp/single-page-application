import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import Login from '../../components/Login/Login.tsx'
import { Helmet } from 'react-helmet'

function LoginPage() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Login | Cohive</title>
      </Helmet>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pt-12 p-32'>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
