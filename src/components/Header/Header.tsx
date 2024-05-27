import React from 'react'
import LogoCohive from '../LogoCohive/LogoCohive.tsx'
import MenuHeader from './components/MenuHeader/MenuHeader.tsx'
import Avatar from './components/Avatar/Avatar.tsx'

type HeaderProps = {
  name: string
  totalProducts: number
}

function Header(props: HeaderProps) {
  const { name, totalProducts } = props

  return (
    <div className='navbar w-full items-center inline-flex gap-4 px-8 shadow-sm'>
      <div className='navbar-start items-center'>
        <a href='/'>
          <LogoCohive width={200} height={84} />
        </a>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <MenuHeader totalProducts={totalProducts} />
      </div>

      <div className='navbar-end gap-4'>
        <Avatar name={name} />
      </div>
    </div>
  )
}

export default Header
