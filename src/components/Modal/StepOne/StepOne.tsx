import React, { useState, useRef } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

function StepOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-4'>
                <Step />
                <Paragraph size='h3'>Inicie seu cadastro</Paragraph>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <MailOutlineIcon fontSize='small' />
                    <input type='email' className='grow text-black' placeholder='Email' />
                </label>
                <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                    <KeyIcon fontSize='small' />
                    <input type='password' className='grow text-black' placeholder='Senha' />
                </label>
                <ReCAPTCHA
                    sitekey='apikey'
                    ref={useRef(null)}
                />
                <div className='card-actions justify-between'>
                    <Button content='Voltar' color='secondary' onClick={() => console.log()} />
                    <Button content='Avançar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepOne
