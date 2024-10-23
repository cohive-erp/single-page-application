import React from 'react'
import BarChart from '@tremor/react/dist/components/chart-elements/BarChart/BarChart'
import Paragraph from '../Paragraph/Paragraph'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

type BarChartProps = {
  data?: {
    month: string
    Vendido: number
    'Em estoque': number
  }[]
}

function BarChartComponent(props: BarChartProps) {
  const { data } = props

  return (
    <div className='card w-full h-full bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <div className='flex justify-between'>
          <Paragraph size='h2'>📦 Relatório de Produtos</Paragraph>
          <div className='flex gap-4'>
            <div className='flex gap-1'>
              <Paragraph size='content' className='border-b-4 border-purple-500'>Qtd. Vendido</Paragraph>
            </div>
            <div className='flex gap-1'>
              <Paragraph size='content' className=' border-b-4 border-violet-300'>Qtd. Em estoque</Paragraph>
            </div>
          </div>
        </div>
        <BarChart
          showAnimation
          showLegend={false}
          customTooltip={CustomTooltip}
          barCategoryGap={2}
          data={data ?? []}
          index='month'
          categories={['Vendido', 'Em estoque']}
          colors={['purple', 'violet-300']}
          yAxisWidth={45}
          className='mt-6 hidden h-60 sm:block' />
      </div>
    </div>
  )
}

export default BarChartComponent
