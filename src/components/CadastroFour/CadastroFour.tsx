import React, { useState, useRef } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import ReCAPTCHA from 'react-google-recaptcha'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import Step from '../../components/Modal/Step/Step'
import Paragraph from '../../components/Paragraph/Paragraph'
import Button from '../../components/Button/Button'
import StoreIcon from '@mui/icons-material/Store';
import BadgeIcon from '@mui/icons-material/Badge';
import MapIcon from '@mui/icons-material/Map';

function CadastroOne() {
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })

    return (
        <div className='flex flex-col w-[45%] font-poppins justify-between gap-4'>
            <Step step={4} />
            <Paragraph size='h3'>Dados da loja</Paragraph>
            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                <MapIcon fontSize='small' />
                <input type='text' className='grow text-black' placeholder='CEP' />
            </label>

            <label className='input input-bordered text-[#9A9696] flex items-center gap-2'>
                {/* <BadgeIcon fontSize='small' /> */}
                <input type='text' className='grow text-black' placeholder='Endereço' />
            </label>

            <div className='flex justify-between gap-2'>
                <label className='input input-bordered text-[#9A9696] flex items-center w-[45%] '>
                    {/* <StoreIcon fontSize='small' /> */}
                    <input type='text' className='grow text-black ' placeholder='Cidade' />
                </label>

                <label className='input input-bordered text-[#9A9696] flex items-center w-[45%]'>
                    {/* <BadgeIcon fontSize='small' /> */}
                    <input type='text' className='grow text-black ' placeholder='Estado' />
                </label>
            </div>


            <div className='card-actions justify-between '>
                {<Button content='Voltar' className='w-[45%]' color='secondary' onClick={() => console.log()} />}
                <Button content='Finalizar' className='w-[45%]' onClick={() => console.log()} />
            </div>

        </div>
    )
}

export default CadastroOne
