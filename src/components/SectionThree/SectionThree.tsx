import React from 'react'
import Paragraph from '../Paragraph/Paragraph.tsx'

function SectionOne() {
  return (
    <div id='sobre' className='flex basis-full'>
      <div className='hero flex h-[50vh] flex-col justify-evenly items-center'>
        <div className='flex flex-col justify-evenly items-center'>
        <Paragraph size='title'>Porque usar o sistema da <span className='text-purple-500 italic'>Cohive</span>?</Paragraph>
        <Paragraph size='content-regular'>Nosso ERP é para empresas que atuam com e-commerce,</Paragraph>
        <Paragraph size='content-regular'>loja física, serviços ou indústria. Com ele, você:</Paragraph>

        </div>
      </div>
    </div>
  )
}

export default SectionOne
