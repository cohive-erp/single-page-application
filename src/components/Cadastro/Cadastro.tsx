import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import KeyIcon from '@mui/icons-material/Key'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import PersonIcon from '@mui/icons-material/Person'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'

function Cadastro() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='flex flex-col font-poppins justify-between gap-4'>
            <Paragraph size='h1'>Crie sua conta</Paragraph>
            <div className='flex flex-col gap-6'>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PersonIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Nome completo' />
                </label>

                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <CallIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Telefone' />
                </label>

                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='email' className='grow text-black' placeholder='Email' />
                </label>

                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' className='grow text-black' placeholder='Senha' />
                </label>
            </div>

            <label className='cursor-pointer flex items-center gap-2'>
                <input type='checkbox' defaultChecked={false} className='checkbox checkbox-sm' />
                <Paragraph size='h6-regular'>Declaro ter lido e aceito os termos de uso e as políticas.</Paragraph>
            </label>

            <div className='flex w-full'>
                <ReCAPTCHA
                    sitekey='apikey'
                    ref={useRef(null)}
                />
            </div>
            <div className='flex flex-col items-center'>
                <Button content='Cadastrar' className='w-full' onClick={() => console.log()} />
                <Paragraph size='h6'>ou</Paragraph>
                <Button content='Conectar-se com o Google' color='white' className='w-full' onClick={() => console.log()} />
            </div>
        </div>
    )
}

export default Cadastro
