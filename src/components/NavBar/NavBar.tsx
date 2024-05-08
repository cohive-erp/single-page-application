import React from 'react'
import LogoCohive from '../LogoCohive/LogoCohive.tsx'
import NavBarAnchor from '../NavBarAnchor/NavBarAnchor.tsx'
import Button from '../Button/Button.tsx'

function NavBar() {
  return (
    <div className='navbar w-full items-center inline-flex gap-4 px-8 shadow-sm'>
      <div className='navbar-start w-2/5 items-center'>
        <a href='/'>
          <LogoCohive width={200} height={84} />
        </a>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='gap-12 menu-horizontal px-1'>
          <li>
            <NavBarAnchor section='inicio' />
          </li>
          <li>
            <NavBarAnchor section='sobre' />
          </li>
          <li>
            <NavBarAnchor section='funcionalidade' />
          </li>
          <li>
            <NavBarAnchor section='contato' />
          </li>
        </ul>
      </div>

      <div className='navbar-end gap-4'>
          <Button content='Experimente o teste grátis' href='/signup' />
          <Button content='Entrar' href='/login' color='black'/>
      </div>
    </div>
  )
}

export default NavBar
