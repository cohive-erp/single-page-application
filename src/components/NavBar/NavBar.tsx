/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LogoCohive from '../LogoCohive/LogoCohive.tsx'
import NavBarAnchor from '../NavBarAnchor/NavBarAnchor.tsx'
import Button from '../Button/Button.tsx'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()

  return (
    <div className='navbar w-full items-center inline-flex gap-4 px-8 shadow-sm'>
      <div className='navbar-start w-2/5 items-center'>
        <a onClick={() => navigate('/')}>
          <LogoCohive width={200} height={84} />
        </a>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='gap-12 menu-horizontal px-1'>
          <li>
            <NavBarAnchor section='Inicio' />
          </li>
          <li>
            <NavBarAnchor section='Sobre' />
          </li>
          <li>
            <NavBarAnchor section='Download' />
          </li>
          <li>
            <NavBarAnchor section='Planos' />
          </li>
        </ul>
      </div>

      <div className='navbar-end gap-4'>
          <Button content='Experimente o teste grátis' onClick={() => navigate('/signup')} />
          <Button content='Entrar' onClick={() => navigate('/login')} color='black'/>
      </div>
    </div>
  )
}

export default NavBar
