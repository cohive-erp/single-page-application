import React from 'react'
import LineChart from '@tremor/react/dist/components/chart-elements/LineChart/LineChart'
import Paragraph from '../Paragraph/Paragraph'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

type LineChartProps = {
  data: {
    month: string
    Vendido: number
    'Em estoque': number
  }[]
  section: string
}

function LineChartComponent(props: LineChartProps) {
  const { data, section } = props

  return (
    <div className='card w-full h-[400px] bg-base-100 shadow-xl'>
      <div className='card-body'>
        <Paragraph size='h2'>Relatório de {section}</Paragraph>
        {data && data.length > 1 &&
          <LineChart
            showAnimation
            showLegend={false}
            customTooltip={CustomTooltip}
            data={data}
            index='month'
            categories={['Vendido', 'Em estoque']}
            colors={['purple', 'violet-300']}
            yAxisWidth={45}
            className='mt-6 hidden h-60 sm:block'
          />}
      </div>
    </div>
  )
}

export default LineChartComponent
