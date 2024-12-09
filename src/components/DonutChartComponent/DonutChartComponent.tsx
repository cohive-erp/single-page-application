import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import { ProdutoResult } from '../../lib/types/product-result'
import DonutChart from '@tremor/react/dist/components/chart-elements/DonutChart/DonutChart'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

type DonutChartComponentProps = {
  products: ProdutoResult[]
}

function DonutChartComponent(props: DonutChartComponentProps) {
  const { products } = props

  const totalSellingPrice = products.reduce((acc, produto) => acc + produto.produto.precoVenda, 0)
  const totalSellingPriceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalSellingPrice)
  const totalPurchasePrice = products.reduce((acc, produto) => acc + produto.produto.precoCompra, 0)
  const totalPurchasePriceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPurchasePrice)

  const newData = [{
    name: 'Preço para vendas',
    valor: totalSellingPriceFormatted
  },
  {
    name: 'Preço investido',
    valor: totalPurchasePriceFormatted
  }]

  return (
    <div className='card w-[33%] bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <Paragraph size='h2'>📊 Análise de lucro</Paragraph>

        {newData && (
          <DonutChart
            data={newData}
            // showLabel={false}
            category='name'
            customTooltip={CustomTooltip}
            showAnimation
            colors={['purple']}
            className='w-full h-full'
          />
        )}

        {!newData && (
          <div className='w-full hidden h-full sm:block bg-gray-200 p-4 rounded-md shadow-sm text-center'>
            <span className='text-black'>Não há dados disponíveis!</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonutChartComponent
