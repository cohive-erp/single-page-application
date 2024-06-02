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
      nome: 'Cy Ganderton',
      categoria: 'Quality Control Specialist',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Hart Hagerty',
      categoria: 'Desktop Support Technician',
      valor: 75.90,
      quantidade: 5
    },
    {
      id: 3,
      nome: 'Brice Swyre',
      categoria: 'Tax Accountant',
      valor: 75.90,
      quantidade: 5
    }
  ]
}

export const Example = () => {
  return (
    <Table tableResult={data} />
  )
}
