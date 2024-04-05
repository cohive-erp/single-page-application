import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import BadgeIcon from '@mui/icons-material/Badge'
import CallIcon from '@mui/icons-material/Call'
import AbcIcon from '@mui/icons-material/Abc'

function StepTwo() {
    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        numeroCel: '',
        email: '',
        senha: ''
    })

    return (
        <div className='card w-[60%] h-[70%] bg-base-100 shadow-xl'>
            <div className='card-body justify-between gap-4'>
                <Step />
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
                    <AbcIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='CPF' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <CallIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Telefone' />
                </label>
                <div className='card-actions justify-between'>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Avançar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepTwo
