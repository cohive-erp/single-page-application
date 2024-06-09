import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

function NoData() {
  return (
    <div className='flex flex-col w-full h-[50%] justify-center items-center'>
      <img src='./noData.svg' alt='Ilustração de Dados não encontrado' loading='lazy' width={40} height={40} />
      <Paragraph size='h3-regular'>Não há dados suficientes.</Paragraph>
    </div>
  )
}

export default NoData
