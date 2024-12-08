/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import PersonIcon from '@mui/icons-material/Person'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import { CreateLojaCommand, CreateUserCommand } from '../../lib/types'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MaskedInput from 'react-text-mask'
import useClient from '../../lib/client/useClient'
import clsx from 'clsx'

function Cadastro() {
    const client = useClient()
    const navigate = useNavigate()

    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false)
    const [numero, setNumero] = useState<number>()
    const [cep, setCep] = useState<string>('')
    const [cnpj, setCnpj] = useState<string>('')

    const className = 'border-purple-500 shadow-md text-[#9A9696] flex items-center bg-white'

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
        } else if (!numero || !cep || !cnpj) {
            toast.error('Há campos obrigatórios não preenchidos!')
            return
        }

        try {
            if (acceptTerms) {
                const userData: CreateUserCommand = {
                    email,
                    nome: name,
                    numeroCelular: phoneNumber,
                    senha: password
                }

                const response = await client.createUser(userData)

                const storeData: CreateLojaCommand = {
                    numero,
                    cep,
                    cnpj,
                    usuario: response
                }

                await client.createStore(storeData)
                navigate('/login')
                toast.success('Cadastro realizado com sucesso!')
            }
        } catch (e) {
            toast.error('Erro ao tentar se cadastrar!')
            console.error('Erro ao tentar se cadastrar', e)
        }
    }

    return (
        <div className='flex flex-col w-full font-poppins justify-center gap-4'>
            <Paragraph size='h1'>Crie sua conta</Paragraph>
            <form className='flex gap-6 w-full'>
                <div className='flex flex-col gap-6 w-full'>
                    <Paragraph size='h4'>👨🏻‍💻 Usuário</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <PersonIcon fontSize='small' />
                        <input type='text' value={name} onChange={(e) => handleInputChange(e, setName)} className='grow text-black' placeholder='Nome completo' />
                    </label>

                    <label className={clsx('input input-bordered', className)}>
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

                    <label className={clsx('input input-bordered', className)}>
                        <MailOutlineIcon fontSize='small' />
                        <input type='email' value={email} onChange={(e) => handleInputChange(e, setEmail)} className='grow text-black' placeholder='Email' />
                    </label>

                    <label className={clsx('input input-bordered', className)}>
                        <KeyIcon fontSize='small' />
                        <input type='password' value={password} onChange={(e) => handleInputChange(e, setPassword)} className='grow text-black' placeholder='Senha' />
                    </label>

                    <label className={clsx('input input-bordered', className)}>
                        <KeyIcon fontSize='small' />
                        <input type='password' value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} className='grow text-black' placeholder='Confirmar senha' />
                    </label>
                </div>
                <div className='flex flex-col gap-6 w-full'>
                    <Paragraph size='h4'>🏪 Loja</Paragraph>
                    <label className={clsx('input input-bordered', className)}>
                        <input
                            className='grow text-black'
                            placeholder='CEP'
                            value={cep}
                            onChange={(e) => handleInputChange(e, setCep)}
                        />
                    </label>
                    <label className={clsx('input input-bordered', className)}>
                        <input
                            className='grow text-black'
                            placeholder='Número'
                            value={numero}
                            onChange={(e) => handleInputChange(e, setNumero)}
                        />
                    </label>
                    <label className={clsx('input input-bordered', className)}>
                        <input
                            className='grow text-black'
                            placeholder='CNPJ'
                            value={cnpj}
                            onChange={(e) =>
                                handleInputChange(e, setCnpj)}
                        />
                    </label>
                </div>
            </form>

            <div className='flex flex-col gap-4 w-full justify-center'>
                <label className='cursor-pointer flex items-center gap-2'>
                    <input
                        type='checkbox'
                        defaultChecked={acceptTerms}
                        onChange={(e) => handleInputChange(e, setAcceptTerms)}
                        className='checkbox checkbox-sm bg-white checked:bg-black border-black'
                    />
                    <Paragraph size='h5'>Declaro ter lido e aceito os <a onClick={() => navigate('/termos')} className='font-bold underline'>termos de uso</a> e as <a onClick={() => navigate('/privacidade')} className='font-bold underline'>políticas</a>.</Paragraph>
                </label>

                <div className='flex flex-col items-center'>
                    <Button content='Cadastrar' className='w-[50%]' onClick={handleSignUp} />
                </div>
            </div>
        </div>
    )
}

export default Cadastro
