import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'
import { TypeAnimation } from 'react-type-animation'

function SectionFour() {
  return (
    <div className='flex basis-full h-[70vh]'>
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
            <a href='/'>
              <img
                src='./appStoreImage.png'
                alt='Faça o download na App Store'
                width={150}
                className='rounded-md'
              />
            </a>
            <a href='/'>
              <img
                src='./googlePlayImage.png'
                alt='Faça o download na Google Store'
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
            width={469}
            className='mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionFour
