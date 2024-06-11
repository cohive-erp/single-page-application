/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LogoCohive from '../LogoCohive/LogoCohive.tsx'
import MenuHeader from './components/MenuHeader/MenuHeader.tsx'
import Avatar from './components/Avatar/Avatar.tsx'
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
  name: string
  totalProducts: number
}

function Header(props: HeaderProps) {
  const navigate = useNavigate()
  const { name, totalProducts } = props

  return (
    <div className='navbar w-full items-center inline-flex gap-4 px-8 shadow-sm'>
      <div className='navbar-start items-center'>
        <a onClick={() => navigate('/')}>
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
