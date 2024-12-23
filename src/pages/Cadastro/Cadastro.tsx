import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Cadastro from '../../components/Cadastro/Cadastro'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function SignUp() {
  const { t } = useTranslation()
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>{t('SignUpPage')}</title>
      </Helmet>
      <NavBar />
      <div className='w-[70%] h-full flex justify-center items-center pt-8 pb-16 p-32'>
        <Cadastro />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
