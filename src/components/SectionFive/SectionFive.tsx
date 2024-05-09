import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import PriceCard from '../PriceCard/PrinceCard.tsx'

function SectionFive() {
  return (
    <div className='flex basis-full'>
      <div className='hero h-[80vh] flex flex-col justify-center gap-12'>
        <Paragraph size='title'>O plano ideal que caber no seu orçamento:</Paragraph>
        <div className='flex flex-row gap-6 justify-center items-center'>
          <PriceCard
            title='Gratuíto'
            subtitle='Negócios de bairro'
            price={0}
            vantagem={['Vantagem 1', 'Vantagem 2', 'Vantagem 3']} />

          <PriceCard
            isDestaque
            title='Micro Empresário'
            subtitle='Pequeno negócio'
            price={49.90}
            vantagem={['Vantagem 1', 'Vantagem 2', 'Vantagem 3']}
            className='border-4 border-purple-400' />

          <PriceCard
            title='Escalonamento'
            subtitle='Mais de um estabelecimento'
            price={120}
            vantagem={['Vantagem 1', 'Vantagem 2', 'Vantagem 3']} />
        </div>
      </div>
    </div>
  )
}

export default SectionFive
