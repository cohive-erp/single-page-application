import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

type BarChartSkeletonProps = {
  section: string
}

function BarChartSkeleton(props: BarChartSkeletonProps) {
  const { section } = props

  return (
    <div className='card w-full h-[400px] bg-base-100 shadow-xl'>
      <div className='card-body'>
        <Paragraph size='h2'>Relatório de {section}</Paragraph>
        <div className='flex flex-row w-full h-full gap-2 justify-center items-end'>
          {Array(5).fill(0).map((_, index) => (
            <>
              <div key={index} className='skeleton w-20 h-[67%]'></div>
              <div key={index} className='skeleton w-20 h-full'></div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarChartSkeleton
