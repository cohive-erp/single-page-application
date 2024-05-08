import React, { useState, useRef } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Step from '../../components/Modal/Step/Step'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'
import StoreIcon from '@mui/icons-material/Store';
import BadgeIcon from '@mui/icons-material/Badge';

function CadastroOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='flex flex-col w-[40%] font-poppins justify-between gap-4'>
            <Step step={3} />
            <Paragraph size='h3'>Dados da loja</Paragraph>
            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <StoreIcon fontSize='small' />
                <input type='text' className='grow text-black' placeholder='Nome da loja' />
            </label>

            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <BadgeIcon fontSize='small' />
                <input type='text' className='grow text-black' placeholder='CNPJ' />
            </label>

            <div className='card-actions justify-between'>
                {<Button content='Voltar' className='w-[45%]' color='secondary' onClick={() => console.log()} />}
                <Button content='Avançar' className='w-[45%]' onClick={() => console.log()} />
            </div>

        </div>
    )
}

export default CadastroOne
