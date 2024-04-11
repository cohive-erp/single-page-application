import React, { useState } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import PlaceIcon from '@mui/icons-material/Place'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import FormInput from '../../FormInput/FormInput'

function StepFour() {
    const [dados, setDados] = useState({
        cep: '',
        endereco: '',
        cidade: '',
        estado: ''
    })

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-6'>
                <Step step={4} />
                <Paragraph size='h3'>Localização da loja</Paragraph>
                <FormInput placeholder='CEP' />
                <FormInput icon={<PlaceIcon fontSize='small' />} placeholder='Endereço' />
                <div className='flex flex-row w-full justify-between'>
                    <FormInput icon={<LocationCityIcon fontSize='small' />} placeholder='Cidade' className='w-[49%]' />
                    <select className='select select-bordered w-[49%] text-[#9A9696]'>
                        <option disabled selected>Selecione o estado</option>
                        <option className='text-black'>São Paulo</option>
                        <option className='text-black'>Rio de Janeiro</option>
                    </select>
                </div>
                <div className='card-actions justify-between'>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Cadastrar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepFour
