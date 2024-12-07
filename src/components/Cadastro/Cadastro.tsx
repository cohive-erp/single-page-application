/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import PersonIcon from '@mui/icons-material/Person'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import { CreateUserCommand } from '../../lib/types'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MaskedInput from 'react-text-mask'
import useClient from '../../lib/client/useClient'

function Cadastro() {
    const client = useClient()
    const navigate = useNavigate()

    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleSignUp = async () => {
        if (!email || !name || !password || !phoneNumber) {
            toast.error('Há campos obrigatórios não preenchidos!')
            return
        } else if (password !== confirmPassword) {
            toast.error('As senhas não conferem!')
            return
        }

        try {
            const data: CreateUserCommand = {
                email,
                nome: name,
                numeroCelular: phoneNumber,
                senha: password
            }

            if (acceptTerms) {
                await client.createUser(data)
                navigate('/login')
                toast.success('Cadastro realizado com sucesso!')
            }
        } catch (e) {
            toast.error('Erro ao tentar se cadastrar!')
            console.error('Erro ao tentar se cadastrar', e)
        }
    }

    return (
        <div className='flex flex-col font-poppins justify-between gap-4'>
            <Paragraph size='h1'>Crie sua conta</Paragraph>
            <form className='flex flex-col gap-6'>
                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PersonIcon fontSize='small' />
                    <input type='text' value={name} onChange={(e) => handleInputChange(e, setName)} className='grow text-black' placeholder='Nome completo' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <CallIcon fontSize='small' />
                    <MaskedInput
                        mask={[/[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        placeholder='Telefone'
                        guide={false}
                        value={phoneNumber}
                        onChange={(e) => handleInputChange(e, setPhoneNumber)}
                        className='grow text-black'
                        render={(ref: any, props) => <input ref={ref} {...props} />}
                    />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='email' value={email} onChange={(e) => handleInputChange(e, setEmail)} className='grow text-black' placeholder='Email' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' value={password} onChange={(e) => handleInputChange(e, setPassword)} className='grow text-black' placeholder='Senha' />
                </label>

                <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} className='grow text-black' placeholder='Confirmar senha' />
                </label>
            </form>

            <label className='cursor-pointer flex items-center gap-2'>
                <input
                    type='checkbox'
                    defaultChecked={acceptTerms}
                    onChange={(e) => handleInputChange(e, setAcceptTerms)}
                    className='checkbox checkbox-sm bg-white checked:bg-black border-black'
                />
                <Paragraph size='h6-regular'>Declaro ter lido e aceito os <a onClick={() => navigate('/termos')} className='font-bold underline'>termos de uso</a> e as <a onClick={() => navigate('/privacidade')} className='font-bold underline'>políticas</a>.</Paragraph>
            </label>

            <div className='flex flex-col items-center'>
                <Button content='Cadastrar' className='w-full' onClick={handleSignUp} />
            </div>
        </div>
    )
}

export default Cadastro
