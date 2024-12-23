import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/Login/Login'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation()
  return (
    <div className='bg-slate-200 flex flex-col justify-center items-center'>
      <Helmet>
        <title>{t('LoginPage')}</title>
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
