import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header/Header'
import Paragraph from '../../components/Paragraph/Paragraph'

function Loading() {
  const userData = JSON.parse(sessionStorage.getItem('userData') ?? '')

  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>Carregando... | Cohive</title>
      </Helmet>
      <Header name={userData.nome} totalProducts={0} />
      <div className='w-[90%] h-[80%] flex flex-col gap-4 justify-center items-center text-center'>
        <Paragraph size='h2'>Loading...</Paragraph>
      </div>
      <Footer />
    </div>
  )
}

export default Loading
