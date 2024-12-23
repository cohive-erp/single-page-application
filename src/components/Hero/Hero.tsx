import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function NewHeroSection() {
  const navigate = useNavigate()
  return (
    <div id='Inicio' className='hero h-[80vh]'>
      <div className='hero-content text-neutral-content'>
        <div className='flex flex-col gap-6 w-full justify-start'>
          <Paragraph size='h1' className='text-black w-[70%] text-start'>
            Ganhe mais organização e segurança para os seus produtos com o nosso <span className='text-purple-500'>sistema de estoque</span>.
          </Paragraph>

          <div className='flex flex-col gap-2'>
            <Button content='Conhecer planos 📝' className='w-[40%] ' onClick={() => navigate('/#planos')} />
            <Paragraph size='h6-thin' className='text-start'>Download para Android e iOS.</Paragraph>
          </div>
        </div>
        <img src='/homeImage.svg' alt='Página com Painel de visão geral das vendas e produtos.' loading='lazy' width={700} />
      </div>
    </div>
  )
}

export default NewHeroSection
