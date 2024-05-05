import React from 'react'
import BarChartComponent from './BarChart'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/BarChart'
}

const data = [
  {
    month: 'Jan',
    vendido: 6856,
    'Em estoque': 2856,
  },
  {
    month: 'Feb',
    vendido: 7032,
    'Em estoque': 3032,
  },
  {
    month: 'Mar',
    vendido: 8023,
    'Em estoque': 7033,
  },
  {
    month: 'Apr',
    vendido: 5512,
    'Em estoque': 4512,
  },
  {
    month: 'May',
    vendido: 5600,
    'Em estoque': 8060,
  },
  {
    month: 'Jun',
    vendido: 1000,
    'Em estoque': 8539,
  },
  {
    month: 'Jul',
    vendido: 8590,
    'Em estoque': 5340,
  },
  {
    month: 'Aug',
    vendido: 8010,
    'Em estoque': 7010,
  },
  {
    month: 'Sep',
    vendido: 7590,
    'Em estoque': 6950,
  },
  {
    month: 'Oct',
    vendido: 7180,
    'Em estoque': 3345,
  },
  {
    month: 'Nov',
    vendido: 1210,
    'Em estoque': 1330,
  },
  {
    month: 'Dec',
    vendido: 6013,
    'Em estoque': 5321,
  },
]

export const Example = () => {
  return (
    <BarChartComponent
      data={data}
      section='Produtos'
      variant={['Quant. Vendida', 'Quant. em Estoque']} />
  )
}
