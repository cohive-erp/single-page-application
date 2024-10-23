import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

type KpiProps = {
  value: string | number
  title: string
  className?: string
}

function Kpi(props: KpiProps) {
  const { value, title, className } = props

  return (
    <div className='bg-slate-100 rounded-xl shadow-md w-60 w- h-[90px] flex flex-col justify-center items-start p-6'>
      <Paragraph size='h2' className={className}>{value}</Paragraph>
      <Paragraph size='mini-title'>{title}</Paragraph>
    </div>
  )
}

export default Kpi
