import React, { useState } from 'react'

function Step() {
  return (
    <ul className='steps w-full'>
      <li className='step'>Registro</li>
      <li className='step'>Dados pessoais</li>
      <li className='step'>Dados da loja</li>
      <li className='step'>Validação</li>
    </ul>
  )
}

export default Step
