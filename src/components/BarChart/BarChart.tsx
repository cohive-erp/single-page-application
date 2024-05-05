import React from 'react'
import Card from '@tremor/react/dist/components/layout-elements/Card/Card'
import BarChart from '@tremor/react/dist/components/chart-elements/BarChart/BarChart'
import Paragraph from '../Paragraph/Paragraph'

type BarChartProps = {
  data: {
    month: string
    vendido: number
    'Em estoque': number
  }[]
  section: string
  variant: string[]
}

function BarChartComponent(props: BarChartProps) {
  const { data, section, variant } = props

  return (
    <Card className='sm:mx-auto sm:max-w-2xl'>
      <Paragraph size='h2'>Relatório de {section}</Paragraph>
      <BarChart
        data={data}
        index='date'
        categories={[variant[0], variant[1]]}
        colors={['purple', 'violet-300']}
        yAxisWidth={45}
        className='mt-6 hidden h-60 sm:block'
      />
    </Card>
  )
}

export default BarChartComponent
