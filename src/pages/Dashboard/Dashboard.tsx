import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import RedefinirSenha from '../../components/RedefinirSenha/RedefinirSenha.tsx'
import { Helmet } from 'react-helmet'

function DashboardPage() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Painel de {sessionStorage.getItem('nome')} | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
      </Helmet>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pr-32 pl-32 pt-[8%] pb-[8%]'>
        <RedefinirSenha />
      </div>
      <Footer />
    </div>
  )
}

export default DashboardPage
