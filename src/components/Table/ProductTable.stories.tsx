import React from 'react'
import ProductTable from './ProductTable'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/ProductTable'
}

const data = {
  rows: [
    {
      id: 1,
      nome: 'Protetor de travesseiro avulso impermeável',
      categoria: 'Cama',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Protetor de mesa colorido',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 3,
      nome: 'Protetor de mesa - Verde Esmeralda',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 4,
      nome: 'Protetor de mesa - Verde Esmeralda',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 5,
      nome: 'Protetor de mesa - Verde Esmeralda',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 6,
      nome: 'Protetor de mesa - Verde Esmeralda',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 7,
      nome: 'Protetor de mesa - Verde Esmeralda',
      categoria: 'Mesa',
      valor: 75.90,
      quantidade: 5
    }
  ]
}

const noData = {
  rows: []
}

export const Example = () => {
  return (
    <ProductTable tableResult={data} />
  )
}

export const NoDataExample = () => {
  return (
    <ProductTable tableResult={noData} />
  )
}
