import './global.css'
import React from 'react'
import Rotas from './routes.tsx'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/png' href='./logoCohive.svg' sizes='16x16' />
        <title>Cohive: Organize mais melhorando o sistema de gestão da sua empresa.</title>
      </Helmet>
      <Rotas />
      <ToastContainer />
    </>
  )
}

export default App
