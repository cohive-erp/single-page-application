/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import KeyIcon from '@mui/icons-material/Key'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthUserCommand } from '../../lib/types/auth-user-command'
import useClient from '../../lib/client/useClient'

function Login() {
  const client = useClient()
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value)
  }

  const handleAuthenticate = () => {
    if (!email || !password) {
      toast.error('Há campos obrigatórios não preenchidos!')
      return
    }

    const data: AuthUserCommand = { email, senha: password }

    client.authenticateUser(data).then((res) => {
      sessionStorage.setItem('token', res.token)
      sessionStorage.setItem('userData', JSON.stringify(res))
      toast.success('Login realizado com sucesso!')
      navigate('/dashboard')
    })
      .catch((e) => {
        toast.error('Erro ao tentar se logar!')
        console.error('Erro ao tentar se logar', e)
      })
  }

  return (
    <div className='flex flex-col font-poppins justify-between gap-8'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Paragraph size='h1'>Bem-vindo(a) de volta!</Paragraph>
        <Paragraph size='h3-regular'>Entre novamente para gerenciar seus produtos.</Paragraph>
      </div>
      <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
        <MailOutlineIcon fontSize='small' />
        <input
          type='email'
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
          className='grow text-black'
          placeholder='Email'
        />
      </label>
      <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
        <KeyIcon fontSize='small' />
        <input
          type='password'
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
          className='grow text-black'
          placeholder='Senha'
        />
      </label>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col items-center'>
          <Button content='Entrar' className='w-full' onClick={handleAuthenticate} />
        </div>

        <div className='flex flex-row justify-between'>
          <Paragraph size='h6'>
            <a
              className='text-purple-400 hover:text-purple-500 underline'
              onClick={() => navigate('/signup')}
            >
              Ainda não tenho conta
            </a>
          </Paragraph>
          <Paragraph size='h6'>
            <a
              className='text-purple-400 hover:text-purple-500 underline'
              onClick={() => navigate('/redefinir-senha')}
            >
              Esqueci minha senha
            </a>
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Login
