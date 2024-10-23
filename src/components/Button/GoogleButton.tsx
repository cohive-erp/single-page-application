import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

function GoogleButton(props: { isLogin?: boolean }) {
  const { isLogin } = props

  return (
    <button
      className='w-full h-[52px] rounded-lg border-2 border-gray-300 shadow-sm bg-white flex justify-center gap-4 items-center hover:bg-gray-100 transition'
    >
      <img
        src='/googleIcon.png'
        alt='Fazer login com o Google'
        title='Fazer login com o Google'
        referrerPolicy='no-referrer'
        loading='lazy'
        width={24}
      />

      <Paragraph size='h4'>
        {isLogin ? 'Login com Google' : 'Cadastrar com Google'}
      </Paragraph>
    </button>
  )
}

export default GoogleButton
