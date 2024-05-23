import React, { useState, useRef } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import PersonIcon from '@mui/icons-material/Person'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'
import { CreateUserCommand } from '../../lib/types/CreateUserCommand.ts'
import createUser from '../../lib/services/createUser.ts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import GoogleButton from '../Button/GoogleButton.tsx'

function Cadastro() {
    const navigate = useNavigate()
    const [nome, setNome] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleCreate = async () => {
        const data: CreateUserCommand = {
            nome,
            numeroCelular: telefone,
            email,
            senha
        }

        await createUser(data)
            .then(() => {
                sessionStorage.setItem('valores', JSON.stringify(data))
                navigate('/login')
                toast.success('Cadastro realizado com sucesso!')
            })
            .catch((e) => {
                toast.error('Erro ao tentar se cadastrar!')
                console.error('Erro ao tentar se cadastrar', e)
            })
    }

    return (
        <div className='flex flex-col font-poppins justify-between gap-4'>
            <Paragraph size='h1'>Crie sua conta</Paragraph>
            <form className='flex flex-col gap-6'>
                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PersonIcon fontSize='small' />
                    <input type='text' value={nome} onChange={(e) => handleInputChange(e, setNome)} className='grow text-black' placeholder='Nome completo' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <CallIcon fontSize='small' />
                    <input type='text' value={telefone} onChange={(e) => handleInputChange(e, setTelefone)} className='grow text-black' placeholder='Telefone' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='email' value={email} onChange={(e) => handleInputChange(e, setEmail)} className='grow text-black' placeholder='Email' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' value={senha} onChange={(e) => handleInputChange(e, setSenha)} className='grow text-black' placeholder='Senha' />
                </label>
            </form>

            <label className='cursor-pointer flex items-center gap-2'>
                <input type='checkbox' defaultChecked={false} className='checkbox checkbox-sm bg-white checked:bg-black border-black' />
                <Paragraph size='h6-regular'>Declaro ter lido e aceito os <a href='/termos  ' className='font-bold underline'>termos de uso</a> e as <a href='/privacidade' className='font-bold underline'>políticas</a>.</Paragraph>
            </label>

            <div className='flex flex-col items-center'>
                <Button content='Cadastrar' className='w-full' onClick={handleCreate} />
                <Paragraph size='h6' className='text-gray-400'>ou</Paragraph>
                <GoogleButton />
            </div>
        </div>
    )
}

export default Cadastro
