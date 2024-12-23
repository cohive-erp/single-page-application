import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

function SectionOne() {
  return (
    <div id='sobre' className='h-[75vh] flex basis-full'>
      <div className='hero flex flex-row justify-evenly items-center'>
        <div className='flex basis-4/12'>
          <img
            src='./sectionOneImage.svg'
            alt='Ilustração de uma mulher fazendo gestão empresárial'
            loading='lazy'
            width={500}
            className='mx-auto'
          />
        </div>

        <div className='flex flex-col gap-6 basis-4/12'>
          <Paragraph size='title'>
            Oportunidade que <span className='text-purple-500'>pequenas empresas</span> buscam para melhorar o controle dos seus produtos.
          </Paragraph>

          <Paragraph size='content-regular'>
          Entendemos o quão difícil é investir em um sistema que te ajuda a organizar melhor seus produtos sendo uma pequena empresa, é por isso que pensamos em <strong>você</strong>.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
