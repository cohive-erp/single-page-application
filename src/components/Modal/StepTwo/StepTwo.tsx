import React, { useState } from 'react'
import Button from '../../Button/Button'
import PlaceIcon from '@mui/icons-material/Place'
import Paragraph from '../../Paragraph/Paragraph'
import BusinessIcon from '@mui/icons-material/Business'
import SignpostIcon from '@mui/icons-material/Signpost'
import Step from '../Step/Step'

function StepTwo() {
    const [dados, setDados] = useState({
        cep: '',
        endereco: '',
        bairro: '',
        cnpj: ''
    })
    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between'>
                <Step />
                <Paragraph size='h3'>Dados da loja</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <input type='text' className='grow text-black' placeholder='CEP' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PlaceIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Endereço' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <SignpostIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Bairro' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <BusinessIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='CNPJ' />
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
