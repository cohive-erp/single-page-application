import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Button/Button'

function RedefinirSenha() {
    return (
        <div className='flex flex-col font-poppins justify-between gap-8'>
            <div className='flex flex-col justify-center items-center gap-2'>
            <Paragraph size='h1'>Redefinição de senha</Paragraph>
            <Paragraph size='h3-regular'>Digite seu e-mail para receber o link de redefinição.</Paragraph>
            </div>
            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <MailOutlineIcon fontSize='small' />
                <input type='email' className='grow text-black' placeholder='Email' />
            </label>
            <Button content='Enviar' className='w-full' onClick={() => console.log()} />
        </div>
    )
}

export default RedefinirSenha
