/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()

  return (
    <div id='Inicio' className='hero mb-10 bg-slate-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md flex flex-col gap-y-2'>
          <img
            src='./heroImage.svg'
            alt='Ilustração de uma mulher meditando com um relógio atrás - organizando seu tempo'
            loading='lazy'
            width={400}
            className='mx-auto'
          />
          <Paragraph size='h3'>
            Organize mais melhorando o <span className='text-purple-500 italic'>sistema de gestão</span> da sua empresa.
          </Paragraph>
          <div className='inline-flex gap-4 justify-center'>
            <a onClick={() => navigate('/')}>
              <img
                src='./appStoreImage.png'
                alt='Faça o download na App Store'
                loading='lazy'
                width={150}
                className='rounded-md'
              />
            </a>
            <a onClick={() => navigate('/')}>
              <img
                src='./googlePlayImage.png'
                alt='Faça o download na Google Store'
                loading='lazy'
                width={130}
                className='rounded-md'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
