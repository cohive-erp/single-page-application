import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'

function NewHeroSection() {
  return (
    <div id='inicio' className='hero h-[80vh]'>
      <div className='hero-content text-neutral-content'>
        <div className='flex flex-col gap-6 w-full justify-start'>
          <Paragraph size='h1' className='text-black w-[70%] text-start'>
            Ganhe mais organização e segurança para os seus produtos com o nosso <span className='text-purple-500'>sistema de estoque</span>.
          </Paragraph>

          <div className='flex flex-col gap-2'>
            <Button content='Conhecer planos' className='w-[40%] ' href='/#planos' />
            <Paragraph size='h6-thin' className='text-start'>Download para Androide iOS</Paragraph>
          </div>
        </div>
        <img src='/homeImage.svg' alt='' width={700} />
      </div>
    </div>
  )
}

export default NewHeroSection
