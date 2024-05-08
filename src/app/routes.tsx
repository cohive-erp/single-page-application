import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import LoginPage from '../pages/Login/Login.tsx'
import SignUp from '../pages/Cadastro/Cadastro.tsx'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
