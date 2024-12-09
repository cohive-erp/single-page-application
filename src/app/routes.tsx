import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import LoginPage from '../pages/Login/Login'
import SignUp from '../pages/Cadastro/Cadastro'
import RedefinirSenhaPage from '../pages/RedefinirSenha/RedefinirSenha'
import EstoquePage from '../pages/Estoque/Estoque'
import Dashboard from '../pages/Dashboard/Dashboard'
import TermosPage from 'src/pages/Termos/Termos'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/redefinir-senha' element={<RedefinirSenhaPage />} />
        <Route path='/estoque' element={<EstoquePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/termos' element={<TermosPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
