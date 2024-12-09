import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ProdutoResult } from '../../lib/types/product-result'
import { PieChart } from '@mui/x-charts/PieChart'

type DonutChartComponentProps = {
  products: ProdutoResult[]
}

function DonutChartComponent(props: DonutChartComponentProps) {
  const { products } = props

  const totalSellingPrice = products && products.reduce((acc, produto) => acc + produto.produto.precoVenda, 0)
  const totalPurchasePrice = products && products.reduce((acc, produto) => acc + produto.produto.precoCompra, 0)

  const newData = [{
    id: 0,
    label: 'Preço para vendas',
    value: totalSellingPrice
  },
  {
    id: 1,
    label: 'Preço investido',
    value: totalPurchasePrice
  }]

  return (
    <div className='card w-[33%] bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <div>
          <Paragraph size='h2'>📊 Análise de lucro</Paragraph>
        </div>

        {totalSellingPrice && totalPurchasePrice && (
          <PieChart
            colors={['#7A1CAC', '#AD49E1']}
            series={[{
              data: newData,
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              highlightScope: { fade: 'global', highlight: 'item' }
            }]}
            width={400}
            height={300}
            slotProps={{ legend: { hidden: true } }}
          />
        )}

        {!totalSellingPrice && !totalPurchasePrice && (
          <div className='w-full h-full bg-gray-200 p-4 rounded-md shadow-sm text-center'>
            <span className='text-black'>Não há dados disponíveis!</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonutChartComponent
