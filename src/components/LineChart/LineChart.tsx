import React from 'react'
import LineChart from '@tremor/react/dist/components/chart-elements/LineChart/LineChart'
import Paragraph from '../Paragraph/Paragraph.tsx'
import CustomTooltip from '../CustomTooltip/CustomTooltip.tsx'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type LineChartProps = {
  lastSevenDaysSales: any[]
}

function LineChartComponent(props: LineChartProps) {
  const { lastSevenDaysSales } = props

  const newData = lastSevenDaysSales.map((sale) => {
    return {
      day: format(new Date(sale[0]), 'eee', { locale: ptBR }),
      Valor: sale[1]
    }
  })

  console.log(newData)

  return (
    <div className='card w-full h-[80%] bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <div className='flex justify-between'>
          <Paragraph size='h2'>📈 Relatório de Vendas</Paragraph>
          <div className='flex gap-4'>
            <div className='flex gap-1'>
              <Paragraph size='content' className='border-b-4 border-purple-500'>Valor em compra</Paragraph>
            </div>
          </div>
        </div>

        <LineChart
          showAnimation
          showLegend={false}
          customTooltip={CustomTooltip}
          data={newData}
          index='day'
          categories={['Valor']}
          colors={['purple']}
          yAxisWidth={45}
          className='mt-6 hidden h-60 sm:block'
        />
      </div>
    </div>
  )
}

export default LineChartComponent
