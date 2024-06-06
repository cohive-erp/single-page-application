import React from 'react'
import Table from './Table'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Table'
}

const data = {
  head: ['Nome', 'Categoria', 'Valor (R$)', 'Quantidade', 'Ações'],
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
  head: ['Nome', 'Categoria', 'Valor (R$)', 'Quantidade', 'Ações'],
  rows: []
}

export const Example = () => {
  return (
    <Table tableResult={data} />
  )
}

export const NoDataExample = () => {
  return (
    <Table tableResult={noData} />
  )
}
