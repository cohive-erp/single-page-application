import React, { useState, useRef } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Step from '../../components/Modal/Step/Step'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';

function CadastroOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='flex flex-col w-[40%] font-poppins justify-between gap-4'>
            <Step step={2} />
            <Paragraph size='h3'>Dados pessoais</Paragraph>
            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <PersonIcon fontSize='small' />
                <input type='text' className='grow text-black' placeholder='Nome completo' />
            </label>

            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <CallIcon fontSize='small' />
                <input type='text' className='grow text-black' placeholder='Telefone' />
            </label>
            
            <div className='card-actions justify-between'>
                { <Button content='Voltar' className='w-[45%]' color='secondary' onClick={() => console.log()} /> }
                <Button content='Avançar' className='w-[45%]' onClick={() => console.log()} />
            </div>
            
        </div>
    )
}

export default CadastroOne
