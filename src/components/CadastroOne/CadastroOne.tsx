import React, { useState, useRef } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Step from '../../components/Modal/Step/Step'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'

function CadastroOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='flex flex-col w-[40%] font-poppins justify-between gap-4'>
            <Step step={1} />
            <Paragraph size='h3'>Inicie seu cadastro</Paragraph>
            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <MailOutlineIcon fontSize='small' />
                <input type='email' className='grow text-black' placeholder='Email' />
            </label>

            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <KeyIcon fontSize='small' />
                <input type='password' className='grow text-black' placeholder='Senha' />
            </label>

            <label className='cursor-pointer flex items-center gap-2'>
                <input type='checkbox' defaultChecked className='checkbox checkbox-sm' />
                <Paragraph size='h7'>Declaro ter lido e aceito os termos de serviço e as políticas</Paragraph>
            </label>

            <ReCAPTCHA
                sitekey='apikey'
                ref={useRef(null)}
            />
            
            <div className='card-actions justify-between'>
                {/* <Button content='Cancelar' color='secondary' onClick={() => console.log()} /> */}
                <Button content='Avançar' className='w-full'  onClick={() => console.log()} />
            </div>

            <div className='flex justify-center'>
                <Paragraph size='h6'>ou</Paragraph>
            </div>
            
        </div>
    )
}

export default CadastroOne
