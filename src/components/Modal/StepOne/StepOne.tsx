import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import BadgeIcon from '@mui/icons-material/Badge'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import KeyIcon from '@mui/icons-material/Key'

function StepOne() {
    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        numeroCel: '',
        email: '',
        senha: ''
    })

    return (
        <div className='card w-[60%] h-[65%] bg-base-100 shadow-xl'>
            <div className='card-body justify-between'>
                <Paragraph size='h3'>Dados pessoais</Paragraph>
                <div className='flex flex-row w-full justify-between'>
                <label className='input input-bordered text-[#9A9696] flex w-[49%] items-center gap-2'>
                    <BadgeIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Nome' />
                    </label>
                <label className='input input-bordered text-[#9A9696] flex w-[49%] items-center gap-2'>
                    <input type='text' className='grow text-black' placeholder='Sobrenome' />
                </label>
                </div>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Email' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <CallIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Telefone' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' className='grow text-black' placeholder='Senha' />
                </label>
                <div className='card-actions justify-center'>
                    <Button content='Avançar' href='/' />
                </div>
            </div>
        </div>
    )
}

export default StepOne
