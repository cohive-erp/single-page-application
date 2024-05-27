import React from 'react'
import BarChart from '@tremor/react/dist/components/chart-elements/BarChart/BarChart'
import Paragraph from '../Paragraph/Paragraph.tsx'
import NoData from '../NoData/NoData.tsx'
import BarChartSkeleton from './BarChartSkeleton.tsx'
import CustomTooltip from '../CustomTooltip/CustomTooltip.tsx'

type BarChartProps = {
  data: {
    month: string
    Vendido: number
    'Em estoque': number
  }[]
  section: string
}

function BarChartComponent(props: BarChartProps) {
  const { data, section } = props



  return (
    <div className='card w-full h-[400px] bg-slate-100 shadow-xl'>
      <div className='card-body'>
        <Paragraph size='h2'>Relatório de {section}</Paragraph>
        {data && data.length > 1 &&
          <BarChart
            showAnimation
            showLegend={false}
            customTooltip={CustomTooltip}
            barCategoryGap={2}
            data={data}
            index='month'
            categories={['Vendido', 'Em estoque']}
            colors={['purple', 'violet-300']}
            yAxisWidth={45}
            className='mt-6 hidden h-60 sm:block'
          />}
        {/* {data.error ?? data.length < 2 && <NoData />} */}
        {/* {data.loading && <BarChartSkeleton section={section} />} */}
      </div>
    </div>
  )
}

export default BarChartComponent
