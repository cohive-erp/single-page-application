import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import BusinessIcon from '@mui/icons-material/Business'
import SignpostIcon from '@mui/icons-material/Signpost'
import PlaceIcon from '@mui/icons-material/Place'

type StepProps = {

}

function Step() {
  const [dados, setDados] = useState({
    nome: '',
    sobrenome: '',
    numCel: '',
    email: '',
    senha: ''
  })
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
