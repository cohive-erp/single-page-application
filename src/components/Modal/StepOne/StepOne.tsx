import React, { useState, useRef } from 'react'
import Button from '../../Button/Button'
import Paragraph from '../../Paragraph/Paragraph'
import Step from '../Step/Step'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FormInput from '../../FormInput/FormInput'

function StepOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='card w-[60%] h-[80%] bg-base-100 shadow-xl font-poppins'>
            <div className='card-body justify-between gap-4'>
                <Step step={1} />
                <Paragraph size='h3'>Inicie seu cadastro</Paragraph>
                <FormInput icon={<MailOutlineIcon fontSize='small' />} typeInput='email' placeholder='Email' />
                <FormInput icon={<KeyIcon fontSize='small' />} typeInput='password' placeholder='Senha' />
                <ReCAPTCHA sitekey='apikey' ref={useRef(null)} />
                <FormInput icon={<KeyIcon fontSize='small' />} typeComponent='checkbox' typeInput='password' placeholder='Senha'>
                    Declaro ter lido e aceito os termos de serviço e as políticas
                </ FormInput>
                <div className='card-actions justify-between'>
                    <Button content='Cancelar' color='secondary' onClick={() => console.log()} />
                    <Button content='Avançar' onClick={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

export default StepOne
