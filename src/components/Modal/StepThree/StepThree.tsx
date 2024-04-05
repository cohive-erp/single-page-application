import React, { useState, useRef } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import KeyIcon from '@mui/icons-material/Key'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

function StepThree() {
    const [dados, setDados] = useState({
        nome: '',
        cnpj: '',
        numeroFunc: ''
    })

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body gap-4'>
                <Step />
                <Paragraph size='h3'>Dados da loja</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Nome da loja' />
                </label>
                <div className='flex flex-row w-full justify-between'>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <KeyIcon fontSize='small' />
                        <input type='number' className='grow text-black' placeholder='CNPJ' />
                    </label>
                    <select className='select select-bordered w-[49%] text-[#9A9696]'>
                        <option disabled selected>Número de funcionários...</option>
                        <option className='text-black'>1-10</option>
                        <option className='text-black'>11-30</option>
                        <option className='text-black'>31-50</option>
                        <option className='text-black'>51-100</option>
                        <option className='text-black'>101 ou mais</option>
                    </select>
                </div>
                <div className='card-actions justify-between'>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Avançar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepThree
