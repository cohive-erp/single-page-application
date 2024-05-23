import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import LoginPage from '../pages/Login/Login.tsx'
import SignUp from '../pages/Cadastro/Cadastro.tsx'
import RedefinirSenhaPage from '../pages/RedefinirSenha/RedefinirSenha.tsx'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/redefinir-senha' element={<RedefinirSenhaPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
