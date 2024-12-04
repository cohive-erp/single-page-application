/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import InventoryIcon from '@mui/icons-material/Inventory'
import TimelineIcon from '@mui/icons-material/Timeline'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type MenuHeaderProps = {
  totalProducts: number
}

function MenuHeader(props: MenuHeaderProps) {
  const { totalProducts } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  const countProducts = totalProducts > 99 ? '99+' : totalProducts

  return (
    <ul className='menu bg-slate-200 lg:menu-horizontal rounded-box text-black'>
      <li>
        <a onClick={() => navigate('/dashboard')}>
          <TimelineIcon fontSize='small' />
          {t('Dashboard')}
          <span className='badge badge-xs badge-info'></span>
        </a>
      </li>
      <li>
        <a onClick={() => navigate('/estoque')}>
          <InventoryIcon fontSize='small' />
          {t('Stock')}
          <span className='badge badge-sm'>{countProducts}</span>
        </a>
      </li>
    </ul>
  )
}

export default MenuHeader
