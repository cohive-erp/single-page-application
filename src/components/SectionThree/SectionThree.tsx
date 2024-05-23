import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'

function SectionThree() {
  return (
    <div id='sobre' className='h-[70vh] flex basis-full'>
      <div className='hero flex flex-row justify-evenly items-center'>
        <div className='flex basis-4/12'>
          <img
            src='./sectionThreeImage.svg'
            alt='Gerencie melhor sua empresa com o sistema de gestão da Cohive'
            width={500}
            className='mx-auto'
          />
        </div>

        <div className='flex flex-col gap-6 basis-4/12'>
          <Paragraph size='title'>
            <span className='text-purple-500'>Facilidade</span> de uso da ferramenta.
          </Paragraph>

          <div>
            <Paragraph size='content-regular'>
              Chega de utilizar ferramentas onde você tem que passar dias aprendendo a usar.
            </Paragraph>
            <Paragraph size='content-regular'>
              Aqui na <strong>Cohive</strong> a utilidade é instantânea.
            </Paragraph>
          </div>

          <Button content='Experimente grátis' className='w-[50%]' href='/signup' />
        </div>
      </div>
    </div>
  )
}

export default SectionThree
