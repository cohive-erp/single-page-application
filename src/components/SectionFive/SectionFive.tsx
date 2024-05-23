import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import PriceCard from '../PriceCard/PriceCard.tsx'

function SectionFive() {
  return (
    <div id='planos' className='flex basis-full'>
      <div className='hero h-[90vh] flex flex-col justify-center gap-12'>
        <Paragraph size='title'>O plano ideal para caber no seu orçamento:</Paragraph>
        <div className='flex flex-row gap-6 justify-center items-center'>
          <PriceCard
            title='Gratuíto'
            subtitle='Negócios de bairro'
            price='0'
            vantagem={['1 usuário', '20 MB de dados', 'gestão de estoque']} />

          <PriceCard
            isDestaque
            title='Micro Empresário'
            subtitle='Pequeno negócio'
            price='49.90'
            vantagem={['2 usuários', '100 MB de dados', 'sugestão de reposição']}
            className='border-4 border-purple-400' />

          <PriceCard
            title='Escalonamento'
            subtitle='Mais de um estabelecimento'
            price='120'
            vantagem={['15 usuários', '800 MB de dados', 'análises por assistente virtual']} />
        </div>
      </div>
    </div>
  )
}

export default SectionFive
