import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory'
import TimelineIcon from '@mui/icons-material/Timeline'

type MenuHeaderProps = {
  totalProducts: number
}

function MenuHeader(props: MenuHeaderProps) {
  const { totalProducts } = props
  // TODO: Ter uma props que vai receber a quantidade de alertas, dependendo da quantidade de alertas, ele vai mostrar azul se tiver de boa, amarelo se tiver com alguns alertas e vermelho se tiver muitos

  const countProducts = totalProducts > 99 ? '99+' : totalProducts
  return (
    <ul className='menu bg-base-200 lg:menu-horizontal rounded-box'>
      <li>
        <a href='/dashboard'>
          <TimelineIcon fontSize='small' />
          Dashboard
          <span className='badge badge-xs badge-info'></span>
        </a>
      </li>
      <li>
        <a href='/estoque'>
          <InventoryIcon fontSize='small' />
          Estoque
          <span className='badge badge-sm'>{countProducts}</span>
        </a>
      </li>
    </ul>
  )
}

export default MenuHeader