import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import PersonIcon from '@mui/icons-material/Person'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { useNavigate } from 'react-router-dom'

type PriceCardProps = {
  title: string
  subtitle: string
  price: string
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
  const navigate = useNavigate()

  const icons = [
    <PersonIcon fontSize='small' className='text-purple-500' />,
    <FolderOpenIcon fontSize='small' className='text-purple-500' />,
    <AutoAwesomeIcon fontSize='small' className='text-purple-500' />
  ]

  return (
    <div className={`card w-80 h-96 pb-4 bg-slate-100 shadow-xl ${className}`}>
      <div className='card-body gap-2'>
        <div className='flex flex-col gap-1'>
          <Paragraph size='h2'>{title}</Paragraph>
          <Paragraph size='subtitle' className='text-gray-400'>{subtitle}</Paragraph>
          <Paragraph size='h3'>
            R$ <Paragraph tag='span' size='title'>{price}</Paragraph>
          </Paragraph>
        </div>

        <div className='divider'></div>

        <div className='flex flex-col items-start'>
          <ul className='list-disc list-inside items-start gap-2'>
            {vantagem.map((item, index) => (
              <Paragraph key={index} size='content'>{icons[index]} {item}</Paragraph>
            ))}
          </ul>
        </div>
      </div>

      <div className='card-actions justify-center'>
        {isDestaque && <Button content='Saiba mais' onClick={() => navigate('/signup')} className='border-none w-[80%] rounded-2xl' />}
        {!isDestaque && <Button content='Saiba mais' onClick={() => navigate('/signup')} color='white' className='border-2 border-purple-400 text-purple-400 w-[80%] rounded-2xl hover:border-purple-400 hover:bg-purple-100' />}
      </div>
    </div>
  )
}

export default PriceCard
