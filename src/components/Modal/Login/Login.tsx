import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import PlaceIcon from '@mui/icons-material/Place'
import LocationCityIcon from '@mui/icons-material/LocationCity'

function Login() {
    const [dados, setDados] = useState({
        cep: '',
        endereco: '',
        cidade: '',
        estado: ''
    })

    return (
        <div className='card w-[60%] h-[60%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-center'>
                <Paragraph size='h3'>Login</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <input type='text' className='grow text-black' placeholder='Nome' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <input type='text' className='grow text-black' placeholder='Senha' />
                </label>
                <div className='card-actions justify-between'>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Logar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default Login
