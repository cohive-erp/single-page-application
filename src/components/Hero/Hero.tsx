import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'

function NewHeroSection() {
  return (
    <div className='hero h-[80vh]' style={{ backgroundImage: 'url(https://libertis-solutions.com/wp-content/uploads/2023/04/Pros-y-contras-de-tener-un-stock-de-seguridad.jpg)' }}>
      <div className='hero-overlay bg-purple-800 bg-opacity-30'></div>
      <div className='hero-content text-neutral-content'>
        <div className='flex flex-col gap-6 w-full justify-start'>
          <Paragraph size='h1' className='text-white drop-shadow-text w-[30%] text-start text-wrap'>
            Ganhe mais organização e segurança para os seus produtos com o nosso sistema de estoque.
          </Paragraph>
          <Button content='Saiba mais' className='w-[20%] ' href='/signup' />
        </div>
      </div>
    </div>
  )
}

export default NewHeroSection
