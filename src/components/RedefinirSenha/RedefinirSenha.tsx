import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Paragraph from '../Paragraph/Paragraph.tsx'
import Button from '../Button/Button.tsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { requestPasswordReset, validatePasswordToken, resetPassword } from '../../lib/services/RequestPassword/index.ts'

function RedefinirSenha() {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [confirmarSenha, setConfirmarSenha] = useState<string>('')
    const [step, setStep] = useState<1 | 2 | 3>(1)

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value)
    }

    const handleSendEmail = async () => {
        await requestPasswordReset(email)
            .then(() => {
                toast.success('Cadastro realizado com sucesso!')
                setStep(2)
            })
            .catch((e) => {
                toast.error('O email é inválido/não existe!')
                console.error('Erro ao colocar email', e)
            })
    }

    const handleValidateToken = async () => {
        await validatePasswordToken(token)
            .then(() => {
                toast.success('Cadastro realizado com sucesso!')
                setStep(3)
            })
            .catch((e) => {
                toast.error('Token inválido!')
                console.error('Erro ao colocar o token', e)
            })
    }

    const handleChangePassword = async () => {

        if (senha !== confirmarSenha) {
            toast.error('Senhas não coincidem!')
            return
        }

        await resetPassword(token, senha)
            .then(() => {
                toast.success('Senha alterada com sucesso!')
                sessionStorage.clear()
                navigate('/login')
            })
            .catch((e) => {
                toast.error('Não foi possível atualizar sua senha.')
                console.error('Erro ao alterar senha', e)
            })
    }

    return (
        <div className='flex flex-col font-poppins justify-between gap-8'>
            {step === 1 &&
                <>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Paragraph size='h1'>Redefinição de senha</Paragraph>
                        <Paragraph size='h3-regular'>Digite seu e-mail para receber o link de redefinição.</Paragraph>
                    </div>
                    <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                        <MailOutlineIcon fontSize='small' />
                        <input type='email' className='grow text-black' placeholder='Email' onChange={(e) => handleInputChange(e, setEmail)} />
                    </label>
                    <Button content='Enviar' className='w-full' onClick={handleSendEmail} />
                </>
            }
            {step === 2 &&
                <>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Paragraph size='h1'>Redefinição de senha</Paragraph>
                        <Paragraph size='h3-regular'>Digite o token que foi enviado no email {email}</Paragraph>
                    </div>
                    <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                        <MailOutlineIcon fontSize='small' />
                        <input type='text' className='grow text-black' placeholder='Token de verificação' onChange={(e) => handleInputChange(e, setToken)} />
                    </label>
                    <Button content='Enviar' className='w-full' onClick={handleValidateToken} />
                </>
            }
            {step === 2 &&
                <>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Paragraph size='h1'>Redefinição de senha</Paragraph>
                        <Paragraph size='h3-regular'>Digite sua nova senha</Paragraph>
                    </div>
                    <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                        <MailOutlineIcon fontSize='small' />
                        <input type='password' className='grow text-black' placeholder='Nova senha' onChange={(e) => handleInputChange(e, setSenha)} />
                    </label>
                    <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                        <MailOutlineIcon fontSize='small' />
                        <input type='password' className='grow text-black' placeholder='Confirmar nova senha' onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                    </label>
                    <Button content='Alterar senha' className='w-full' onClick={handleChangePassword} />
                </>
            }
        </div>
    )
}

export default RedefinirSenha
