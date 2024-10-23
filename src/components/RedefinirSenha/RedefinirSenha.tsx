import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockIcon from '@mui/icons-material/Lock'
import KeyIcon from '@mui/icons-material/Key'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { requestPasswordReset, validateToken } from '../../lib/services/index'

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
        await validateToken(token)
            .then(() => {
                toast.success('Cadastro realizado com sucesso!')
                setStep(3)
            })
            .catch((e) => {
                toast.error('Token inválido!')
                console.error('Erro ao colocar o token', e)
            })
    }

    // const handleChangePassword = async () => {

    //     if (senha !== confirmarSenha) {
    //         toast.error('Senhas não coincidem!')
    //         return
    //     }

    //     await resetPassword(token, senha)
    //         .then(() => {
    //             toast.success('Senha alterada com sucesso!')
    //             sessionStorage.clear()
    //             navigate('/login')
    //         })
    //         .catch((e) => {
    //             toast.error('Não foi possível atualizar sua senha.')
    //             console.error('Erro ao alterar senha', e)
    //         })
    // }

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
                    <div className='flex flex-col justify-center items-center gap-2 text-wrap'>
                        <Paragraph size='h1'>Confire sua caixa de entrada</Paragraph>
                        <Paragraph size='h3-regular'>Digite o token que está na sua caixa de entrada</Paragraph>
                    </div>
                    <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                        <LockIcon fontSize='small' />
                        <input type='text' className='grow text-black' placeholder='Token de verificação' onChange={(e) => handleInputChange(e, setToken)} />
                    </label>
                    <div className='flex flex-col gap-2'>
                        <Button content='Enviar' className='w-full' onClick={handleValidateToken} />
                        <Button content='Voltar' className='w-full' color='secondary' onClick={() => setStep(1)} />
                    </div>
                </>
            }
            {step === 3 &&
                <>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Paragraph size='h1'>Digite e confirme sua nova senha</Paragraph>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                            <KeyIcon fontSize='small' />
                            <input type='password' className='grow text-black' placeholder='Nova senha' onChange={(e) => handleInputChange(e, setSenha)} />
                        </label>
                        <label className='input bg-white border-black input-bordered text-[#9A9696] flex items-center gap-2'>
                            <KeyIcon fontSize='small' />
                            <input className='grow text-black' placeholder='Confirmar nova senha' onChange={(e) => handleInputChange(e, setConfirmarSenha)} />
                        </label>
                    </div>
                    {/* <div className='flex flex-col gap-2'>
                        <Button content='Alterar senha' className='w-full' onClick={handleChangePassword} />
                        <Button content='Voltar' className='w-full' color='secondary' onClick={() => setStep(2)} />
                    </div> */}
                </>
            }
        </div>
    )
}

export default RedefinirSenha
