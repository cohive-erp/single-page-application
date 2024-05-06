import React from 'react'
import BarChartComponent from './BarChart'
import BarChartSkeleton from './BarChartSkeleton'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/BarChart'
}

const data = [
  {
    month: 'Jan',
    Vendido: 6856,
    'Em estoque': 2856,
  },
  {
    month: 'Feb',
    Vendido: 7032,
    'Em estoque': 3032,
  },
  {
    month: 'Mar',
    Vendido: 8023,
    'Em estoque': 7033,
  },
  {
    month: 'Apr',
    Vendido: 5512,
    'Em estoque': 4512,
  },
  {
    month: 'May',
    Vendido: 5600,
    'Em estoque': 8060,
  },
  {
    month: 'Jun',
    Vendido: 1000,
    'Em estoque': 8539,
  },
  {
    month: 'Jul',
    Vendido: 8590,
    'Em estoque': 5340,
  },
  {
    month: 'Aug',
    Vendido: 8010,
    'Em estoque': 7010,
  },
  {
    month: 'Sep',
    Vendido: 7590,
    'Em estoque': 6950,
  },
  {
    month: 'Oct',
    Vendido: 7180,
    'Em estoque': 3345,
  },
  {
    month: 'Nov',
    Vendido: 1210,
    'Em estoque': 1330,
  },
  {
    month: 'Dec',
    Vendido: 6013,
    'Em estoque': 5321,
  },
]

export const Example = () => {
  return (
    <BarChartComponent
      data={data}
      section='Produtos' />
  )
}

export const NoData = () => {
  return (
    <BarChartComponent
      data={[]}
      section='Produtos' />
  )
}

export const Loading = () => {
  return (
    <BarChartSkeleton section='Produtos' />
  )
}

export const MultiCharts = () => {
  return (
      <div className='flex flex-col gap-4'>
        <BarChartComponent data={data} section='Produtos' />
        <div className='flex flex-row gap-4'>
          <BarChartComponent data={data} section='Produtos' />
          <BarChartComponent data={data} section='Produtos' />
        </div>
      </div>
  )
}
