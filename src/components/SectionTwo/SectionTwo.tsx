import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'

function SectionTwo() {
  return (
    <div className='flex basis-full'>
      <div className='hero min-h-screen flex flex-row justify-evenly items-center'>
        <div className='flex flex-col gap-6 basis-4/12'>
          <div>
            <Paragraph size='title'>
              Evite complexidade.
            </Paragraph>
            <Paragraph size='title'>
              Melhore o controle do seu estoque de maneira <span className='text-purple-500'>rápida</span>. <span className='text-purple-500'>prática</span>. <span className='text-purple-500'>útil</span>.
            </Paragraph>
          </div>

          <Paragraph size='content'>
            Utilize nosso sistema para ampliar seu negócio sem depender de sistemas complexos que mais te complicam do que te ajudam!
          </Paragraph>

          <Button content='Saiba mais' href='/' />
        </div>

        <div className='flex basis-4/12'>
          <img
            src='./sectionTwoImage.svg'
            alt='Gerencie melhor sua empresa com o sistema de gestão da Cohive'
            width={469}
            className='mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
