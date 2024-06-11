import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'
import { useNavigate } from 'react-router-dom'

function SectionThree() {
  const navigate = useNavigate()

  return (
    <div id='Sobre' className='h-[70vh] flex basis-full'>
      <div className='hero flex flex-row justify-evenly items-center'>
        <div className='flex basis-4/12'>
          <img
            src='./sectionThreeImage.svg'
            alt='Ilustração de um homem utilizando ferramentas que contém no seu smartphone'
            loading='lazy'
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

          <Button content='Experimente grátis' className='w-[50%]' onClick={() => navigate('/signup')} />
        </div>
      </div>
    </div>
  )
}

export default SectionThree
