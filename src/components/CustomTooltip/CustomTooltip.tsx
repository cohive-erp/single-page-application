import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

type CustomTooltipTypeBar = {
  payload: any
  active?: boolean
  label: any
}

function CustomTooltip(props: CustomTooltipTypeBar) {
  const { payload, active } = props
  if (!active || !payload) return null
  return (
    <div className='w-56 rounded-box border bg-white p-2 shadow-xl'>
      {payload.map((category: any, idx: number) => (
        <div key={idx} className='flex flex-1 space-x-2.5'>
          <div
            className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
          />
          <div className='space-y-1'>
            <Paragraph size='h6-regular'>{category.dataKey}</Paragraph>
            <Paragraph size='h6'>{category.value}</Paragraph>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomTooltip
