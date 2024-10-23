import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import RedefinirSenha from '../../components/RedefinirSenha/RedefinirSenha'
import { Helmet } from 'react-helmet'

function MuralAlertaPage() {
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Mural de alertas | Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
      </Helmet>
      <NavBar />
      <div className='w-[50%] h-full flex justify-center items-center pr-32 pl-32 pt-[8%] pb-[8%]'>
        <RedefinirSenha />
      </div>
      <Footer />
    </div>
  )
}

export default MuralAlertaPage
