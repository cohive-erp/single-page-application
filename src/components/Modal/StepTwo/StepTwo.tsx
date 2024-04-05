import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import BusinessIcon from '@mui/icons-material/Business'
import SignpostIcon from '@mui/icons-material/Signpost'
import PlaceIcon from '@mui/icons-material/Place'

function StepTwo() {
    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        numCel: '',
        email: '',
        senha: ''
    })
    return (
        <div className='card w-[60%] h-[65%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between'>
                <Paragraph size='h3'>Dados da loja</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <input type='text' className='grow' placeholder='CEP' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PlaceIcon fontSize='small' />
                    <input type='text' className='grow' placeholder='Endereço' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <SignpostIcon fontSize='small' />
                    <input type='text' className='grow' placeholder='Bairro' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <BusinessIcon fontSize='small' />
                    <input type='text' className='grow' placeholder='CNPJ' />
                </label>
                <div className='card-actions justify-center '>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Cadastrar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepTwo
