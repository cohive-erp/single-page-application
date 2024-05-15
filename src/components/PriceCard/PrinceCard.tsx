import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'

type PriceCardProps = {
  title: string
  subtitle: string
  price: number
  vantagem: string[]
  className?: string
  isDestaque?: boolean
}

function PriceCard(props: PriceCardProps) {
  const {
    title,
    subtitle,
    price,
    vantagem,
    className,
    isDestaque
  } = props

  return (
    <div className={`card w-80 h-96 pb-4 bg-slate-100 shadow-xl ${className}`}>
      <div className='card-body gap-2'>
        <div className='flex flex-col gap-1'>
          <Paragraph size='h2'>{title}</Paragraph>
          <Paragraph size='subtitle'>{subtitle}</Paragraph>
          <Paragraph size='h3'>R$ <Paragraph tag='span' size='title'>{price}</Paragraph></Paragraph>

        </div>

        <div className='divider'></div>

        <div className='flex flex-col justify-center'>
          <ul className='list-disc list-inside'>
            {vantagem.map((item, index) => (
              <Paragraph key={index} size='content'>- {item}</Paragraph>
            ))}
          </ul>
        </div>
      </div>

      <div className='card-actions justify-center'>
        {isDestaque && <Button content='Saiba mais' href='/signup' className='border-none w-[80%] rounded-2xl' />}
        {!isDestaque && <Button content='Saiba mais' href='/signup' color='white' className='border-2 border-purple-400 text-purple-400 w-[80%] rounded-2xl hover:border-purple-400 hover:bg-purple-100' />}
      </div>
    </div>
  )
}

export default PriceCard
