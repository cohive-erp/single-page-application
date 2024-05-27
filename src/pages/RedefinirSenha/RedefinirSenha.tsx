import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import RedefinirSenha from '../../components/RedefinirSenha/RedefinirSenha.tsx'
import { Helmet } from 'react-helmet'

function RedefinirSenhaPage() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Redefinir senha | Cohive</title>
      </Helmet>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pr-32 pl-32 pt-44 pb-44'>
        <RedefinirSenha />
      </div>
      <Footer />
    </div>
  )
}

export default RedefinirSenhaPage
