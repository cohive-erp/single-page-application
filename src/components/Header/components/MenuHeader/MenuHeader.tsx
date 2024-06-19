/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import InventoryIcon from '@mui/icons-material/Inventory'
import TimelineIcon from '@mui/icons-material/Timeline'
import { useNavigate } from 'react-router-dom'
import getEstoque from '../../../../lib/services/Get/get-estoque.ts'
import { ProdutoResult } from '../../../../lib/types/ProdutoResult.tsx'

function MenuHeader() {
  const navigate = useNavigate()
  const [produtos, setProdutos] = useState<ProdutoResult[]>([])
  // TODO: Ter uma props que vai receber a quantidade de alertas, dependendo da quantidade de alertas, ele vai mostrar azul se tiver de boa, amarelo se tiver com alguns alertas e vermelho se tiver muitos

  const token = sessionStorage.getItem('sessionToken')

  const getAllProducts = async () => {
    await getEstoque(token)
      .then((response) => {
        setProdutos(response)
      })
      .catch((e) => {
        console.error('Erro ao tentar obter produtos', e)
      })
  }

  useEffect(() => {
    getAllProducts()
  }, [produtos])

  const countProducts = produtos.length > 99 ? '99+' : produtos.length

  return (
    <ul className='menu bg-slate-200 lg:menu-horizontal rounded-box text-black'>
      <li>
        <a onClick={() => navigate('/dashboard')}>
          <TimelineIcon fontSize='small' />
          Dashboard
          <span className='badge badge-xs badge-info'></span>
        </a>
      </li>
      <li>
        <a onClick={() => navigate('/estoque')}>
          <InventoryIcon fontSize='small' />
          Estoque
          <span className='badge badge-sm'>{countProducts}</span>
        </a>
      </li>
    </ul>
  )
}

export default MenuHeader
