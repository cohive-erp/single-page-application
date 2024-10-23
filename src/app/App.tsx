import './global.css'
import React from 'react'
import Rotas from './routes'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Helmet>
        <link rel='icon' type='image/png' href='./favicon.svg' sizes='16x16' />
        <meta property='og:image' content='./open_graph_image.png' />
        <title>Sistema ERP: Gestão rápida, prática e útil | Cohive</title>
        <meta name='description' content='Desprenda dos sistemas complexos e difíceis de usar conhecendo o melhor sistema de gestão de estoque para pequenos negócios.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='' />
        <meta name='revisit-after' content='1 day' />
        <meta name='language' content='pt-br' />
        <meta charSet='utf-8' />
      </Helmet>
      <Rotas />
      <ToastContainer />
    </>
  )
}

export default App
