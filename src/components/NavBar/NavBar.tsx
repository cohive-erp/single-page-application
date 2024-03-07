import React from 'react'
import LogoCohive from '../LogoCohive/LogoCohive'
import NavBarAnchor from './NavBarAnchor'

function NavBar() {
  return (
    <header className='w-full justify-between items-center inline-flex'>
      <div className='w-60 h-20 items-center'>
        <LogoCohive />
      </div>
      <NavBarAnchor section='inicio' />
      <NavBarAnchor section='sobre' />
      <NavBarAnchor section='funcionalidade' />
      <NavBarAnchor section='contato' />
    </header>
  )
}

export default NavBar
