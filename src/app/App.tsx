import './global.css'
import React from 'react'
import Rotas from './routes.tsx'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Rotas />
      <ToastContainer />
    </>
  )
}

export default App
