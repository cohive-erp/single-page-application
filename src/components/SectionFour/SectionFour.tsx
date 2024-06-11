/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import { useNavigate } from 'react-router-dom'

function SectionFour() {
  const navigate = useNavigate()

  return (
    <div id='Download' className='flex basis-full h-[70vh]'>
      <div className='hero flex flex-row justify-evenly items-center'>
        <div className='flex flex-col gap-6 basis-4/12'>
          <div>
            <Paragraph size='title'>
              Gerencie diretamente da tela do seu celular com o nosso <span className='text-purple-500'>aplicativo mobile</span>.
            </Paragraph>
          </div>

          <Paragraph size='content-regular'>
            Não se preocupe em utilizar nossa ferramenta em um único lugar através do seu celular.
            Conheça nosso aplicativo.
          </Paragraph>

          <div className='inline-flex gap-4 justify-start'>
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
                width={135}
                className='rounded-md'
              />
            </a>
          </div>
        </div>

        <div className='flex basis-4/12'>
          <img
            src='./sectionFourImage.svg'
            alt='Ilustração mulher olhando para o dashboard no celular'
            loading='lazy'
            width={469}
            className='mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionFour
