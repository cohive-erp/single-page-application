import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import PlaceIcon from '@mui/icons-material/Place'
import LocationCityIcon from '@mui/icons-material/LocationCity'

function StepTwo() {
    const [dados, setDados] = useState({
        cep: '',
        endereco: '',
        cidade: '',
        estado: ''
    })
    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-6'>
                <Step />
                <Paragraph size='h3'>Localização da loja</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <input type='text' className='grow text-black' placeholder='CEP' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <PlaceIcon fontSize='small' />
                    <input type='text' className='grow text-black' placeholder='Endereço' />
                </label>

                <div className='flex flex-row w-full justify-between'>
                    <label className='input input-bordered text-[#9A9696] flex items-center gap-2 w-[49%]'>
                        <LocationCityIcon fontSize='small' />
                        <input type='text' className='grow text-black' placeholder='Cidade' />
                    </label>
                    <select className='select select-info w-[49%]'>
                        <option disabled selected>Selecione o estado</option>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
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

export default StepTwo
